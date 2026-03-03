#!/bin/bash
# ============================================================
# Script: trigger_template_v1.sh
# Purpose: Triggers the template-teamdineshv1 GitHub repository
#          workflow via the GitHub API (repository_dispatch event).
#
# This script is called from the Catalyst pipeline after
# a successful deployment, acting as a CI/CD cross-repo trigger.
#
# REQUIRED SETUP:
# ────────────────────────────────────────────────────────────
# You MUST add a GitHub Personal Access Token (PAT) as an
# environment variable named GITHUB_ACCESS_TOKEN.
#
# Steps to create and add the token:
#   1. Go to https://github.com/settings/tokens
#   2. Click "Generate new token" → "Generate new token (classic)"
#   3. Give it a descriptive name (e.g., "Catalyst Pipeline Trigger")
#   4. Select the following scopes:
#      ✅ repo (Full control of private repositories)
#   5. Click "Generate token" and COPY the token immediately
#   6. Add the token as an environment variable in your
#      Zoho Catalyst project:
#      - Go to Catalyst Console → Your Project → Settings
#      - Navigate to CI/CD → Pipeline Settings → Environment Variables
#      - Add a new variable:
#          Name:  GITHUB_ACCESS_TOKEN
#          Value: <your-github-personal-access-token>
#          Mark as Secret: YES ✅
#
# ────────────────────────────────────────────────────────────

set -e

# ── Configuration ──
# Inherit these from environment variables if set
GITHUB_OWNER="${GITHUB_OWNER:-Zrubix-Solutions-Pvt-Ltd}"
GITHUB_REPO="${GITHUB_REPO:-template-teamdineshv1}"
EVENT_TYPE="trigger-from-${GITHUB_REPO_SOURCE:-teamdineshv2}"

# ── Validate token ──
if [ -z "$GITHUB_ACCESS_TOKEN" ]; then
  echo "❌ ERROR: GITHUB_ACCESS_TOKEN environment variable is not set!"
  echo ""
  echo "Please add your GitHub Personal Access Token as a secret"
  echo "environment variable in Catalyst Pipeline Settings."
  echo ""
  echo "Steps:"
  echo "  1. Go to https://github.com/settings/tokens"
  echo "  2. Generate a new token (classic) with 'repo' scope"
  echo "  3. Add it as GITHUB_ACCESS_TOKEN in Catalyst CI/CD settings"
  exit 1
fi

echo "── Triggering template-teamdineshv1 repository ──"

# ── Send repository_dispatch event to GitHub ──
HTTP_STATUS=$(curl -s -o /tmp/github_response.txt -w "%{http_code}" \
  -X POST \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${GITHUB_ACCESS_TOKEN}" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  "https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/dispatches" \
  -d "{\"event_type\":\"${EVENT_TYPE}\",\"client_payload\":{\"source\":\"template-teamdineshv2\",\"triggered_at\":\"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}}")

# ── Check response ──
if [ "$HTTP_STATUS" -eq 204 ]; then
  echo "✅ Successfully triggered ${GITHUB_REPO} repository!"
  echo "   Event type: ${EVENT_TYPE}"
  echo "   Target: ${GITHUB_OWNER}/${GITHUB_REPO}"
elif [ "$HTTP_STATUS" -eq 404 ]; then
  echo "❌ ERROR: Repository not found or token lacks access."
  echo "   Ensure the token has 'repo' scope and the repository exists."
  cat /tmp/github_response.txt
  exit 1
elif [ "$HTTP_STATUS" -eq 401 ] || [ "$HTTP_STATUS" -eq 403 ]; then
  echo "❌ ERROR: Authentication failed (HTTP ${HTTP_STATUS})."
  echo "   Check that your GITHUB_ACCESS_TOKEN is valid and not expired."
  cat /tmp/github_response.txt
  exit 1
else
  echo "❌ ERROR: Unexpected response (HTTP ${HTTP_STATUS})."
  cat /tmp/github_response.txt
  exit 1
fi
