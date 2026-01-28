"use client"
import React, { useState } from 'react';
import All_forms from '@/app/form/common/All_forms';

const config = {
  edit_form_headers: {
    main_form: {
      form_name: "All Fields",
      view_id: "2569174000007009002",
      report: "All_fields_report",
      sf1: true,
      sf2: true
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
  { link_name: 'All_fields', name: 'All Fields', columns: 3, gap: 12 },
  ...(config.edit_form_headers.main_form.sf1 ? [{ link_name: 'sf1', name: 'SF1', columns: 1 }] : []),
  ...(config.edit_form_headers.main_form.sf2 ? [{ link_name: 'sf2', name: 'SF2', columns: 1 }] : [])
];

// Build form_headers conditionally
config.edit_form_headers.main_form.form_headers = [
  { "section": "All_fields", "type": "textbox", "link_name": "textbox", "name": "Textbox", "placeholder": "Enter client ID", "row": 1, "col": 1 ,edit: true},
  { "section": "All_fields", "type": "radio", "link_name": "radio", "name": "Radio", "placeholder": "Select gender", "row": 7, "col": 1, options: ["male^^Male", "female^^Female"] },
  { "section": "All_fields", "type": "dropdown", "link_name": "dropdown", "name": "Dropdown", "placeholder": "Enter client type", "row": 1, "col": 2, options: ["lead^^Lead", "company^^Company", "contact^^Contact"], other: true },
  { "section": "All_fields", "type": "multidropdown", "link_name": "multidropdown", "name": "Multidropdown", "placeholder": "Enter client types", "row": 1, "col": 3, options: ["lead^^Lead", "company^^Company", "contact^^Contact"], other: true },
  { "section": "All_fields", "type": "multicheckbox", "link_name": "multicheckbox", "name": "Multicheckbox", "placeholder": "Enter client type", "row": 2, "col": 1, options: ["lead^^Lead", "company^^Company", "contact^^Contact"] },
  { section: 'All_fields', type: 'lookup', link_name: 'lookup', name: 'Lookup', placeholder: 'Lookup placeholder', row: 2, col: 2,  report: "All_product_report" },
  { section: 'All_fields', type: 'multilookup', link_name: 'multilookup', name: 'Multilookup', placeholder: 'Multilookup placeholder', row: 2, col: 3, report: "All_product_report" },
  { "section": "All_fields", "type": "file", "link_name": "file", "name": "File", "placeholder": "Enter client name", "row": 3, "col": 1 },
  { "section": "All_fields", "type": "multifile", "link_name": "multifile", "name": "Multifile", "placeholder": "Enter client name", "row": 3, "col": 2 },
  { "section": "All_fields", "type": "date", "link_name": "date", "name": "Date", "placeholder": "Select date", "row": 4, "col": 1 },
  { "section": "All_fields", "type": "datetime", "link_name": "datetime", "name": "Datetime", "placeholder": "Select datetime", "row": 4, "col": 2 },
  { "section": "All_fields", "type": "time", "link_name": "time", "name": "Time", "placeholder": "Select time", "row": 4, "col": 3 },
  { "section": "All_fields", "type": "email", "link_name": "email", "name": "Email", "placeholder": "Enter email", "row": 5, "col": 1 },
  { "section": "All_fields", "type": "phone", "link_name": "phone", "name": "Phone", "placeholder": "Enter phone", "row": 5, "col": 2 },
  { "section": "All_fields", "type": "password", "link_name": "password", "name": "Password", "placeholder": "Enter password", "row": 5, "col": 3 },
  { "section": "All_fields", "type": "number", "link_name": "number", "name": "Number", "placeholder": "Enter age", "row": 6, "col": 1 },
  { "section": "All_fields", "type": "decimal", "link_name": "decimal", "name": "Decimal", "placeholder": "Enter salary", "row": 6, "col": 2 },
  { "section": "All_fields", "type": "textarea", "link_name": "textarea", "name": "Textarea", "placeholder": "Enter notes", "row": 6, "col": 3 },
  { "section": "All_fields", "type": "checkbox", "link_name": "checkbox", "name": "Checkbox", "placeholder": "", "row": 7, "col": 2 },
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
  ss.sf2.show = true
  ss.textbox.show = true
  ss.textbox.required = true
  ss.radio.show = true
  ss.radio.required = true
  ss.dropdown.show = true
  ss.dropdown.required = true
  // ss.multidropdown.show = true
  // ss.multidropdown.required = true
  // ss.multicheckbox.show = true
  // ss.multicheckbox.required = true
  // ss.lookup.show = true
  // ss.lookup.required = true
  // ss.multilookup.show = true
  // ss.multilookup.required = true
  if ( editmode == true) {
    ss.file.show = true
    ss.file.required = true
    ss.multifile.show = true
    ss.multifile.required = true
  }
  // ss.date.show = true
  // ss.date.required = true
  // ss.datetime.show = true
  // ss.datetime.required = true
  // ss.time.show = true
  // ss.time.required = true
  // ss.email.show = true
  // ss.email.required = true
  // ss.phone.show = true
  // ss.phone.required = true
  ss.password.show = true
  ss.password.required = true
  // ss.number.show = true
  // ss.number.required = true
  // ss.decimal.show = true
  // ss.decimal.required = true
  // ss.textarea.show = true
  // ss.textarea.required = true
  ss.radio.show = true
  ss.radio.required = true
  ss.checkbox.show = true
  ss.checkbox.required = true
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
  if ( editmode == true) {
    ss.file.show = true
    ss.file.required = true
    ss.multifile.show = true
    ss.multifile.required = true
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
      if ( editmode == true) {
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
