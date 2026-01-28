"use client"
import React, { useState } from 'react';
import All_forms from '@/app/form/common/All_forms';

const config = {
  edit_form_headers: {
    main_form: {
      form_name: "User Master Form",
      view_id: "2569174000006873161",
      report: "User_master_report",
      sf1: false,
      sf2: false
    },
    subforms: {
      sf1: {
        main_form_link_name: "sf1",
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
          { link_name: "gender", name: "Gender", type: "dropdown", options: ["male^^Male", "female^^Female"] },]
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
          { link_name: "gender", name: "Gender", type: "dropdown", options: ["male^^Male", "female^^Female"] },]
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
  { "section": "details", "type": "text", "link_name": "user_name", "name": "User Name", "placeholder": "Enter User Name", "row": 1, "col": 1 },
  { "section": "details", "type": "lookup", "link_name": "role", "name": "Role", "report": "Role_master_report" },
  { "section": "details", "type": "dropdown", "link_name": "status", "name": "Status", options: ["active^^Active", "inactive^^Inactive"], "row": 1, "col": 3 },
  { "section": "details", "type": "email", "link_name": "email", "name": "Email", "placeholder": "Enter Email", "row": 2, "col": 1 },
  { "section": "details", "type": "phone", "link_name": "phone", "name": "Phone", "placeholder": "Enter Phone", "row": 2, "col": 2 },
  { "section": "details", "type": "date", "link_name": "dob", "name": "Date of Birth", "placeholder": "Enter Date of Birth", "row": 2, "col": 3 },
  { "section": "details", "type": "dropdown", "link_name": "gender", "name": "Gender", options: ["male^^Male", "female^^Female"], "row": 3, "col": 1 },
  { "section": "details", "type": "dropdown", "link_name": "department", "name": "Department", options: ["hr^^HR", "it^^IT", "finance^^Finance"], "row": 3, "col": 2 },
  { "section": "details", "type": "dropdown", "link_name": "designation", "name": "Designation", options: ["manager^^Manager", "developer^^Developer", "analyst^^Analyst"], "row": 3, "col": 3 },
  { "section": "details", "type": "textarea", "link_name": "address", "name": "Address", "placeholder": "Enter Address", "row": 4, "col": 1 },
  { "section": "details", "type": "textarea", "link_name": "profile_picture", "name": "Profile Picture", "placeholder": "Enter Profile Picture", "row": 4, "col": 2 },
  { "section": "details", "type": "datetime", "link_name": "last_login", "name": "Last Login", "row": 4, "col": 3 },
  { "section": "details", "type": "checkbox", "link_name": "has_mobile_access", "name": "Has Mobile Access", "row": 5, "col": 1 },
  { "section": "details", "type": "checkbox", "link_name": "has_web_access", "name": "Has Web Access", "row": 5, "col": 2 },
  { "section": "details", "type": "checkbox", "link_name": "has_multiple_device", "name": "Has Multiple Device", "row": 5, "col": 3 },
  { "section": "details", "type": "textarea", "link_name": "zems_url", "name": "Zems URL", "placeholder": "Enter Zems URL", "row": 6, "col": 1 },
  { "section": "details", "type": "textarea", "link_name": "development_api_url", "name": "Development API URL", "placeholder": "Enter Development API URL", "row": 6, "col": 2 },
  { "section": "details", "type": "textarea", "link_name": "live_api_url", "name": "Live API URL", "placeholder": "Enter Live API URL", "row": 6, "col": 3 },
  { "section": "details", "type": "text", "link_name": "user_id", "name": "User ID", "placeholder": "Enter User ID", "row": 7, "col": 1 },
  { "section": "details", "type": "number", "link_name": "time_per_capture", "name": "Time Per Capture", "placeholder": "Enter Time Per Capture", "row": 7, "col": 2 },
  { "section": "details", "type": "number", "link_name": "time_per_send", "name": "Time Per Send", "placeholder": "Enter Time Per Send", "row": 7, "col": 3 },
  { "section": "details", "type": "textarea", "link_name": "description", "name": "Description", "placeholder": "Enter Description", "row": 8, "col": 1 },

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

  ss.user_name.show = true
  ss.user_name.required = true
  ss.role.show = true
  ss.role.required = true
  ss.status.show = true
  ss.status.required = true
  ss.email.show = true
  ss.email.required = true
  ss.phone.show = true
  ss.phone.required = true
  ss.dob.show = true
  ss.dob.required = true
  ss.gender.show = true
  ss.gender.required = true
  ss.department.show = true
  ss.department.required = true
  ss.designation.show = true
  ss.designation.required = true
  ss.address.show = true
  ss.address.required = true
  ss.profile_picture.show = true
  ss.profile_picture.required = true
  ss.last_login.show = true
  ss.last_login.required = true
  ss.has_mobile_access.show = true
  ss.has_mobile_access.required = true
  ss.has_web_access.show = true
  ss.has_web_access.required = true
  ss.has_multiple_device.show = true
  ss.has_multiple_device.required = true
  ss.zems_url.show = true
  ss.zems_url.required = true
  ss.development_api_url.show = true
  ss.development_api_url.required = true
  ss.live_api_url.show = true
  ss.live_api_url.required = true
  ss.user_id.show = true
  ss.user_id.required = true
  ss.time_per_capture.show = true
  ss.time_per_capture.required = true
  ss.time_per_send.show = true
  ss.time_per_send.required = true
  ss.description.show = true
  ss.description.required = true





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

    ss.textbox.show = true
    ss.textbox.required = true
    ss.radio.show = true
    ss.radio.required = true
    ss.dropdown.show = true
    ss.dropdown.required = true
    ss.multidropdown.show = true
    ss.multidropdown.required = true
    ss.multicheckbox.show = true
    ss.multicheckbox.required = true
    ss.lookup.show = true
    ss.lookup.required = true
    ss.multilookup.show = true
    ss.multilookup.required = true
    ss.time.show = true
    if (editmode == true) {
      ss.assigned_by.show = true
      ss.assigned_by.disabled = true
      ss.assigned_date.show = true
      ss.assigned_date.disabled = true
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
