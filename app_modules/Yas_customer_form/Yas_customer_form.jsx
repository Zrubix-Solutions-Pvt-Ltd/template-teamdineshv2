"use client"
import React, { useState } from 'react';
import All_forms from '@/app/form/common/All_forms';

const config = {
  edit_form_headers: {
    main_form: {
      form_name: "Yas Customer Form",
      view_id: "yas_customer_view_id",
      report: "Yas_customer_report",
      sf1: false,
      sf2: false
    },
    subforms: {
      sf1: {
        main_form_link_name: "l_client_form",
        view_id: "12345",
        headers: [
          { name: "Call Details ID", link_name: "call_details_id", type: "text" },
          { name: "Conversation Type", link_name: "conversation_type", type: "dropdown", options: ["clarification^^Clarification", "deviation^^Deviation", "doubt^^Doubt", "complaint^^Complaint"] },
          { name: "File Number", link_name: "file_number", type: "text" },
          { name: "Clarification Requested", link_name: "clarification_requested", type: "textarea" },
          { name: "Clarification Given", link_name: "clarification_given", type: "textarea" },
          { name: "Deviation Request", link_name: "deviation_request", type: "textarea" },
          { name: "Cleared Deviation", link_name: "cleared_deviation", type: "dropdown", options: ["yes^^Yes", "no^^No"] },
          { name: "Deviation Given", link_name: "deviation_given", type: "textarea" },
          { name: "Why Deviation Rejected", link_name: "deviation_rejected_reason", type: "textarea" },
          { name: "Doubt Asked", link_name: "doubt_asked", type: "textarea" },
          { name: "Doubt Clarification Given", link_name: "doubt_clarification_given", type: "textarea" },
          { name: "Complaint Details", link_name: "complaint_details", type: "textarea" },
          { name: "Cleared Complaint", link_name: "cleared_complaint", type: "dropdown", options: ["yes^^Yes", "no^^No"] },
          { name: "How Complaint Cleared", link_name: "complaint_cleared_how", type: "textarea" },
          { name: "Why Complaint Not Cleared", link_name: "complaint_not_cleared_reason", type: "textarea" },
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
  { link_name: 'section1', name: 'Section1', columns: 3, gap: 12 },
  { link_name: 'section2', name: 'Section2', columns: 3, gap: 12 },
  ...(config.edit_form_headers.main_form.sf1 ? [{ link_name: 'sf1', name: 'SF1', columns: 1 }] : []),
  ...(config.edit_form_headers.main_form.sf2 ? [{ link_name: 'sf2', name: 'SF2', columns: 1 }] : [])
];

// Build form_headers conditionally
config.edit_form_headers.main_form.form_headers = [
    { "section": "section1", "type": "text", "link_name": "name", "name": "Name", "width": "medium", "placeholder": "Enter customer name", "row": 2, "col": 1 },
  { "section": "section1", "type": "date", "link_name": "dob", "name": "Date of Birth", "width": "small", "placeholder": "Select DOB", "row": 2, "col": 2 },
  { "section": "section1", "type": "phone", "link_name": "contact_number", "name": "Contact Number", "width": "small", "placeholder": "Enter contact number", "row": 2, "col": 3 },
  { "section": "section1", "type": "phone", "link_name": "whatsapp_number", "name": "Whatsapp Number", "width": "small", "placeholder": "Enter whatsapp number", "row": 3, "col": 1 },
  { "section": "section1", "type": "textarea", "link_name": "address", "name": "Address", "width": "large", "placeholder": "Enter address", "row": 3, "col": 2, "colSpan": 2 },
  { "section": "section1", "type": "email", "link_name": "email", "name": "Email", "width": "medium", "placeholder": "Enter email", "row": 4, "col": 1 },
  { "section": "section1", "type": "date", "link_name": "special_day", "name": "Special Day", "width": "small", "placeholder": "Select special day", "row": 4, "col": 2 },
  { "section": "section1", "type": "text", "link_name": "preferred_products", "name": "Preferred Products", "width": "medium", "placeholder": "Enter preferred products", "row": 4, "col": 3 },
  { "section": "section1", "type": "decimal", "link_name": "credit_limit", "name": "Credit Limit", "width": "small", "placeholder": "Enter credit limit", "row": 5, "col": 1 },
  { "section": "section1", "type": "text", "link_name": "referral_source", "name": "Referral Source", "width": "medium", "placeholder": "Enter referral source", "row": 5, "col": 2 },
  { "section": "section1", "type": "dropdown", "link_name": "customer_category", "name": "Customer Category", "width": "medium", "placeholder": "Select category", "row": 5, "col": 3, options: ["regular^^Regular", "premium^^Premium", "vip^^VIP"] },
  { "section": "section1", "type": "textarea", "link_name": "notes_remarks", "name": "Notes / Remarks", "width": "large", "placeholder": "Enter notes or remarks", "row": 6, "col": 1, "colSpan": 3 },
  { "section": "section2", "type": "date", "link_name": "follow_up_date", "name": "Follow-up Date", "width": "small", "placeholder": "Select follow-up date", "row": 7, "col": 1 },
  { "section": "section2", "type": "textarea", "link_name": "follow_up_remarks", "name": "Follow-up Remarks", "width": "large", "placeholder": "Enter follow-up remarks", "row": 7, "col": 2, "colSpan": 2 },
  { "section": "section2", "type": "dropdown", "link_name": "feedback_rating", "name": "Feedback / Satisfaction Rating", "width": "medium", "placeholder": "Select rating", "row": 8, "col": 1, options: ["1^^1", "2^^2", "3^^3", "4^^4", "5^^5"] },
  { "section": "section2", "type": "textarea", "link_name": "occasion_reminders", "name": "Occasion Reminders", "width": "large", "placeholder": "Enter occasion reminders (birthday, anniversary, etc.)", "row": 8, "col": 2, "colSpan": 2 },
  { "section": "section2", "type": "text", "link_name": "occupation_business_name", "name": "Occupation / Business Name", "width": "medium", "placeholder": "Enter occupation or business name", "row": 9, "col": 1 },
  { "section": "section2", "type": "text", "link_name": "business_type_industry", "name": "Business Type / Industry", "width": "medium", "placeholder": "Enter business type or industry", "row": 9, "col": 2 },
  { "section": "section2", "type": "textarea", "link_name": "office_address", "name": "Office Address", "width": "large", "placeholder": "Enter office address", "row": 9, "col": 3 },
  { "section": "section2", "type": "text", "link_name": "gst_pan_number", "name": "GST Number / PAN Number", "width": "medium", "placeholder": "Enter GST or PAN number", "row": 10, "col": 1 },
  { "section": "section2", "type": "text", "link_name": "website_social_links", "name": "Website or Social Media Links", "width": "large", "placeholder": "Enter website or social media links", "row": 10, "col": 2, "colSpan": 2 },
  ...(config.edit_form_headers.main_form.sf1 ? [{ section: 'sf1', type: 'subform', link_name: 'sf1', name: 'Subform1' }] : []),
  ...(config.edit_form_headers.main_form.sf2 ? [{ section: 'sf2', type: 'subform', link_name: 'sf2', name: 'Subform2' }] : [])
];

const load_values = (fs) => {
  // Initial workflow values
  try {
    fs.caller_phone = fs.caller_phone || "919876543210";
    fs.agent_phone = fs.agent_phone || "919876543210";
    // store option with label if the rest of the app expects value^^Label
    fs.call_type = fs.call_type || "incoming";
  } catch (e) { }
  return fs;
};

const all_UI_shed = (fs, ss, on_blur, on_change, fieldKey, editmode) => {
  config.edit_form_headers.main_form.form_headers.forEach(field => {
    if (ss[field.link_name]) {
      ss[field.link_name].show = true;
    }
  });




  // Helper to get raw value before '^^' when stored as 'value^^Label'
  const raw = (v) => {
    if (typeof v === 'string' && v.includes('^^')) return v.split('^^')[0];
    return v;
  };

  // Ensure discussion SF is visible
  if (ss.sf1) ss.sf1.show = true;

  // Disable caller / agent phone and call type as part of the load workflow
  // if (ss.caller_phone) ss.caller_phone.show = true
  // ss.caller_phone.disabled = true;
  // if (ss.agent_phone) ss.agent_phone.show = true
  // ss.agent_phone.disabled = true;
  // if (ss.call_type) ss.call_type.show = true
  // ss.call_type.disabled = true;





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
    // Helper to get raw value before '^^' when stored as 'value^^Label'
    const raw = (v) => {
      if (typeof v === 'string' && v.includes('^^')) return v.split('^^')[0];
      return v;
    };

    config.edit_form_headers.subforms.sf1.headers.forEach(field => {
      if (ss[field.link_name]) {
        ss[field.link_name].show = false;
      }
    });

    // Always show and disable Conversation Type
    if (ss.conversation_type) {
      ss.conversation_type.show = true;
       if (!fs.conversation_type)ss.conversation_type.required = true; // Always required
      // ss.conversation_type.disabled = true;
    }

    // if (on_change === undefined || fieldKey === undefined) {
    //   // Initial load: hide all except conversation_type
    //   return { fs, ss };
    // }

   
    if (raw(fs.conversation_type) === 'clarification') {
        ss.file_number.show = true;
        if (!fs.file_number) ss.file_number.required = true;
         ss.clarification_requested.show = true;
         if (!fs.clarification_requested) ss.clarification_requested.required = true;
        ss.clarification_given.show = true;
        if (!fs.clarification_given) ss.clarification_given.required = true;
      } else if (raw(fs.conversation_type) === 'deviation') {
        ss.file_number.show = true;
        if (!fs.file_number) ss.file_number.required = true;
        ss.deviation_request.show = true;
        if (!fs.deviation_request) ss.deviation_request.required = true;
        ss.cleared_deviation.show = true;
        if (!fs.cleared_deviation) ss.cleared_deviation.required = true;
      } else if (raw(fs.conversation_type) === 'doubt') {
        ss.doubt_asked.show = true;
        if (!fs.doubt_asked) ss.doubt_asked.required = true;
        ss.doubt_clarification_given.show = true;
        if (!fs.doubt_clarification_given) ss.doubt_clarification_given.required = true;
      } else if (raw(fs.conversation_type) === 'complaint') {
        ss.complaint_details.show = true;
        if (!fs.complaint_details) ss.complaint_details.required = true;
        ss.cleared_complaint.show = true;
        if (!fs.cleared_complaint) ss.cleared_complaint.required = true;
      }
      var cleared = raw(fs.cleared_deviation);
      if (cleared === 'yes') {
        ss.deviation_given.show = true;
        if (!fs.deviation_given) ss.deviation_given.required = true;
        ss.deviation_rejected_reason.show = false;
        fs.deviation_rejected_reason = '';
      } else if (cleared === 'no') {
        ss.deviation_given.show = false;
        ss.deviation_rejected_reason.show = true;
        if (!fs.deviation_rejected_reason) ss.deviation_rejected_reason.required = true;
        fs.deviation_given = '';
      }
      cleared = raw(fs.cleared_complaint);
      if (cleared === 'yes') {
        ss.complaint_cleared_how.show = true;
        if (!fs.complaint_cleared_how) ss.complaint_cleared_how.required = true;
        ss.complaint_not_cleared_reason.show = false;
        fs.complaint_not_cleared_reason = '';
      } else if (cleared === 'no') {
        ss.complaint_cleared_how.show = false;
        ss.complaint_not_cleared_reason.show = true;
        if (!fs.complaint_not_cleared_reason) ss.complaint_not_cleared_reason.required = true;
        fs.complaint_cleared_how = '';
      }
    

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
