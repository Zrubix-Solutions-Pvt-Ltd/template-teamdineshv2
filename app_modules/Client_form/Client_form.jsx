"use client"
import React, { useState } from 'react';
import All_forms from '@/app/form/common/All_forms';

const config = {
  edit_form_headers: {
    main_form: {
      form_name: "Client Form",
      view_id: "2569174000006875634",
      report: "Client_report",
      sf1: true,
      sf2: false
    },
    subforms: {
      sf1: {
        main_form_link_name: "l_client_form",
        view_id: "2569174000006875265",
        headers: [
          { name: "Contact ID", link_name: "contact_id", type: "text" },
          { name: "Contact Name", link_name: "contact_name", type: "text" },
          { name: "Gender", link_name: "gender", type: "dropdown", options: ["Male^^Male", "Female^^Female", "Other^^Other", "Prefer not to say^^Prefer not to say"] },
          { name: "Contact Email", link_name: "contact_email", type: "email" },
          { name: "Contact Phone", link_name: "contact_phone", type: "phone" },
          { name: "Designation", link_name: "designation", type: "text" },
          { name: "Department", link_name: "department", type: "text" },
          { name: "LinkedIn", link_name: "linkedin", type: "text" },
          { name: "Notes", link_name: "notes", type: "textarea" },
          { name: "Status", link_name: "status", type: "dropdown", options: ["active^^Active", "inactive^^Inactive"] },
          { name: "Preferred Contact Method", link_name: "preferred_contact_method", type: "dropdown", options: ["Email^^Email", "Phone^^Phone"] },
          { name: "Address", link_name: "address", type: "text" },
          { name: "Birthday", link_name: "birthday", type: "date" },
          { name: "Company Name", link_name: "company_name", type: "text" },
          { name: "Relationship Type", link_name: "relationship_type", type: "dropdown", options: [] },
        ]
      },
      sf2: {
        main_form_link_name: "sf2",
        view_id: "2569174000007080001",
        headers: [
          { name: "Record ID", link_name: "record_id", type: "text" },
          { name: "Textbox", link_name: "textbox", type: "textbox" },
          { name: "Radio", link_name: "radio", type: "radio", options: ["male^^Male", "female^^Female"] },
          { name: "Dropdown", link_name: "dropdown", type: "dropdown", options: ["lead^^Lead", "company^^Company"], other: true },
          { name: "Multidropdown", link_name: "multidropdown", type: "multidropdown", options: ["lead^^Lead", "company^^Company"], other: true },
          { name: "Multicheckbox", link_name: "multicheckbox", type: "multicheckbox", options: ["lead^^Lead", "company^^Company"] },
          { name: "Lookup", link_name: "lookup", type: "lookup", report: "All_product_report" },
          { name: "Multilookup", link_name: "multilookup", type: "multilookup", report: "All_product_report" },
          { name: "File", link_name: "file", type: "file" },
          { name: "Multifile", link_name: "multifile", type: "multifile" },
          { name: "Date", link_name: "date", type: "date", },
          { name: "Datetime", link_name: "datetime", type: "datetime", },
          { name: "Time", link_name: "time", type: "time", },
          { name: "Email", link_name: "email", type: "email", },
          { name: "Phone", link_name: "phone", type: "phone", },
          { name: "Password", link_name: "password", type: "password" },
          { name: "Number", link_name: "number", type: "number", },
          { name: "Decimal", link_name: "decimal", type: "decimal", },
          { name: "Textarea", link_name: "textarea", type: "textarea", },
          { name: "Checkbox", link_name: "checkbox", type: "checkbox" },
          { link_name: "contact_name", name: "Contact Name", type: "text" },
          { link_name: "contact_id", name: "Contact ID", type: "text" },
          { link_name: "gender", name: "Gender", type: "dropdown", options: ["male^^Male", "female^^Female"] }
        ]
      }
    }
  }
};

// Build form_section_headers conditionally
config.edit_form_headers.form_section_headers = [
  { link_name: 'details', name: 'Details', columns: 3, gap: 12 },
  ...(config.edit_form_headers.main_form.sf1 ? [{ link_name: 'sf1', name: 'SF1', columns: 1 }] : []),
  ...(config.edit_form_headers.main_form.sf2 ? [{ link_name: 'sf2', name: 'SF2', columns: 1 }] : [])
];

// Build form_headers conditionally
config.edit_form_headers.main_form.form_headers = [
  { "section": "details", "type": "text", "link_name": "client_id", "name": "Client ID", "placeholder": "Enter Client ID", "row": 1, "col": 1 },
  { "section": "details", "type": "dropdown", "link_name": "type", "name": "Type", "row": 1, "col": 2, "options": ["Lead^^Lead", "Company^^Company"] },
  { "section": "details", "type": "text", "link_name": "name", "name": "Name", "placeholder": "Enter Name", "row": 1, "col": 3 },
  { "section": "details", "type": "dropdown", "link_name": "industry", "name": "Industry", "row": 2, "col": 1, "options": ["IT Services^^IT Services", "Manufacturing^^Manufacturing"] },
  { "section": "details", "type": "text", "link_name": "website", "name": "Website", "placeholder": "Enter Website", "row": 2, "col": 2 },
  { "section": "details", "type": "multidropdown", "link_name": "tags", "name": "Tags", "row": 2, "col": 3, "options": ["Cold^^Cold", "Newsletter^^Newsletter"] },
  { "section": "details", "type": "dropdown", "link_name": "priority", "name": "Priority", "row": 3, "col": 1, "options": ["High^^High", "Medium^^Medium", "Low^^Low"] },
  { "section": "details", "type": "number", "link_name": "lead_score", "name": "Lead Score", "placeholder": "Enter Lead Score", "row": 3, "col": 2 },
  { "section": "details", "type": "dropdown", "link_name": "status", "name": "Status", "row": 3, "col": 3, "options": ["Active^^Active", "Inactive^^Inactive"] },
  { "section": "details", "type": "dropdown", "link_name": "stage", "name": "Stages", "row": 4, "col": 1, "options": ["New^^New", "Contacted^^Contacted", "Interested^^Interested", "Qualified^^Qualified", "Won^^Won"] },
  { "section": "details", "type": "lookup", "link_name": "sales_owner", "name": "Sales Owner", "row": 4, "col": 2, "report": "User_master_report" },
  { "section": "details", "type": "dropdown", "link_name": "source", "name": "Source", "row": 4, "col": 3, "options": ["Web^^Web", "mail^^mail"] },
  { "section": "details", "type": "text", "link_name": "source_detail", "name": "Lead Source Detail", "placeholder": "Enter Lead Source Detail", "row": 5, "col": 1 },
  { "section": "details", "type": "textarea", "link_name": "notes", "name": "Notes / Comments", "placeholder": "Enter Notes / Comments", "row": 6, "col": 1 },
  { "section": "details", "type": "radio", "link_name": "do_not_contact", "name": "Do Not Contact", "row": 6, "col": 2, "options": ["Yes^^Yes", "No^^No"] },
  { "section": "details", "type": "multifile", "link_name": "attachments", "name": "Attachment(s)", "row": 6, "col": 3 },
  { "section": "details", "type": "email", "link_name": "email", "name": "Email", "placeholder": "Enter Email", "row": 7, "col": 1 },
  { "section": "details", "type": "phone", "link_name": "phone", "name": "Phone", "placeholder": "Enter Phone", "row": 7, "col": 2 },
  { "section": "details", "type": "text", "link_name": "address_line_1", "name": "Address line 1", "placeholder": "Enter Address line 1", "row": 7, "col": 3 },
  { "section": "details", "type": "text", "link_name": "address_line_2", "name": "Address line 2", "placeholder": "Enter Address line 2", "row": 8, "col": 1 },
  { "section": "details", "type": "text", "link_name": "city", "name": "City", "placeholder": "Enter City", "row": 8, "col": 2 },
  { "section": "details", "type": "text", "link_name": "state", "name": "State", "placeholder": "Enter State", "row": 8, "col": 3 },
  { "section": "details", "type": "text", "link_name": "country", "name": "Country", "placeholder": "Enter Country", "row": 9, "col": 1 },
  { "section": "details", "type": "text", "link_name": "linkedin", "name": "LinkedIn", "placeholder": "Enter LinkedIn", "row": 9, "col": 2 },
  { "section": "details", "type": "text", "link_name": "twitter", "name": "Twitter", "placeholder": "Enter Twitter", "row": 9, "col": 3 },
  { "section": "details", "type": "number", "link_name": "annual_revenue", "name": "Annual Revenue", "placeholder": "Enter Annual Revenue", "row": 10, "col": 1 },
  { "section": "details", "type": "number", "link_name": "num_employees", "name": "Number of Employees", "placeholder": "Enter Number of Employees", "row": 10, "col": 2 },
  { "section": "details", "type": "datetime", "link_name": "next_followup_date", "name": "Next Follow-up Date", "placeholder": "Select Next Follow-up Date", "row": 10, "col": 3 },
  { "section": "details", "type": "text", "link_name": "latitude", "name": "Latitude", "placeholder": "Enter Latitude", "row": 11, "col": 1 },
  { "section": "details", "type": "text", "link_name": "longitude", "name": "Longitude", "placeholder": "Enter Longitude", "row": 11, "col": 2 },
  // { "section": "All_fields", "type": "text", "link_name": "record_id", "name": "Record ID", "width": "small", "placeholder": "", "row": 7, "col": 3 },
  ...(config.edit_form_headers.main_form.sf1 ? [{ section: 'sf1', type: 'subform', link_name: 'sf1', name: 'Subform1' }] : []),
  ...(config.edit_form_headers.main_form.sf2 ? [{ section: 'sf2', type: 'subform', link_name: 'sf2', name: 'Subform2' }] : [])
];

const load_values = (fs) => {
  return fs;
};

const all_UI_shed = (fs, ss, on_blur, on_change, fieldKey, editmode) => {
  config.edit_form_headers.main_form.form_headers.forEach(field => {
    if (ss[field.link_name]) {
      ss[field.link_name].show = false;
    }
  });
  ss.sf1.show = true
  ss.client_id.show = true
  ss.client_id.required = true
  ss.type.show = true
  ss.name.show = true
  ss.name.required = true
  ss.industry.show = true
  ss.website.show = true
  ss.tags.show = true
  ss.priority.show = true
  ss.lead_score.show = true
  ss.status.show = true
  ss.status.required = true
  ss.stage.show = true
  ss.sales_owner.show = true
  ss.source.show = true
  ss.source_detail.show = true
  ss.notes.show = true
  ss.do_not_contact.show = true
  ss.attachments.show = true
  ss.email.show = true
  ss.email.required = true
  ss.phone.show = true
  ss.phone.required = true
  ss.address_line_1.show = true
  ss.address_line_2.show = true
  ss.city.show = true
  ss.state.show = true
  ss.country.show = true
  ss.linkedin.show = true
  ss.twitter.show = true
  ss.annual_revenue.show = true
  ss.num_employees.show = true
  ss.next_followup_date.show = true
  ss.latitude.show = true
  ss.longitude.show = true
  if (editmode == true) {

  }
  if (on_change === undefined || fieldKey === undefined) {
    return { fs, ss };
  }
  // Custom logic here
  return { fs, ss };
};

let sf1_load_values, sf1_all_UI_shed, sf2_load_values, sf2_all_UI_shed;

if (config.edit_form_headers.main_form.sf1) {
  sf1_load_values = (fs) => fs;
  sf1_all_UI_shed = (fs, ss, on_blur, on_change, fieldKey, editmode) => {
    config.edit_form_headers.subforms.sf1.headers.forEach(field => {
      if (ss[field.link_name]) {
        ss[field.link_name].show = false;
      }
    });

    ss.contact_id.show = true
    ss.contact_id.required = true
    ss.contact_name.show = true
    ss.contact_name.required = true
    ss.gender.show = true
    ss.contact_email.show = true
    ss.contact_email.required = true
    ss.contact_phone.show = true
    ss.contact_phone.required = true
    ss.designation.show = true
    ss.department.show = true
    ss.linkedin.show = true
    ss.notes.show = true
    ss.status.show = true
    ss.status.required = true
    ss.preferred_contact_method.show = true
    ss.address.show = true
    ss.birthday.show = true
    ss.company_name.show = true
    ss.relationship_type.show = true
    if (editmode == true) {
      // ss.assigned_by.show = true
      // ss.assigned_by.disabled = true
      // ss.assigned_date.show = true
      // ss.assigned_date.disabled = true
    }
    if (on_change === undefined || fieldKey === undefined) {
      return { fs, ss };
    }
    // Custom logic here
    return { fs, ss };
  };
}

if (config.edit_form_headers.main_form.sf2) {
  sf2_load_values = (fs) => {
    // console.log('sf2_load_values called', fs);
    // fs.gender = 'male';
    fs.contact_name = 'jai';
    // console.log('after setting gender', fs);
    return fs;
  };
  sf2_all_UI_shed = (fs, ss, on_blur, on_change, fieldKey, editmode) => {
    config.edit_form_headers.subforms.sf2.headers.forEach(field => {
      if (ss[field.link_name]) {
        ss[field.link_name].show = false;
      }
    });
    if (editmode == true) {
      ss.multicheckbox.show = true;

    }
    ss.record_id.show = false
    if (fs.contact_id == "1") {
      fs.contact_name = "A" + fs.contact_id;
      if (fs.gender == "" || fs.gender == null) {
        ss.gender.required = true
      }
    }
    if (fs.contact_name == "1") {
      if (fs.gender == "" || fs.gender == null) {
        ss.gender.required = true
      }
    }

    if (fs.si_no == 1) {
      ss.contact_name.show = false;

    }
    else if (fs.si_no == 2) {
      ss.contact_name.show = true;

      ss.contact_name.disabled = true;
      ss.gender.show = false;

    }
    else {
      ss.contact_name.show = true;
      ss.gender.show = true;

    }

    if (on_change === undefined || fieldKey === undefined) {
      return { fs, ss };
    }
    // Custom logic here
    return { fs, ss };
  };
}

export { config };

export default function All_fields_form({
  onSave, onCancel, initialData = {}, isForm, sections, show
}) {
  return (
    <All_forms
      config={config}
      fields={config.edit_form_headers.main_form.form_headers}
      sections={config.edit_form_headers.form_section_headers}
      Form={{ form_name: config.edit_form_headers.main_form.form_name, c_submit: "Create All Fields Form", e_submit: "Update All Fields Form", cancel: "Cancel", display: true }}
      load_values={load_values}
      all_UI_shed={all_UI_shed}
      sf1_load_values={sf1_load_values}
      sf1_all_UI_shed={sf1_all_UI_shed}
      sf2_load_values={sf2_load_values}
      sf2_all_UI_shed={sf2_all_UI_shed}
      view_id={config.edit_form_headers.main_form.view_id}
      report={config.edit_form_headers.main_form.report}
      onSave={onSave}
      onCancel={onCancel}
      initialData={initialData}
      show={show}
    />
  );
}
