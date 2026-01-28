"use client"
import React, { useState } from 'react';
import All_forms from '@/app/form/common/All_forms';

const config = {
  edit_form_headers: {
    main_form: {
      form_name: "Module Master Form",
      view_id: "2569174000006872862",
      report: "Module_master_report",
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
  { "section": "details", "type": "text", "link_name": "module_name", "name": "Module Name t5", "placeholder": "Enter Module Name", "row": 1, "col": 1 },
  { "section": "details", "type": "text", "link_name": "module_link_name", "name": "Module Link Name", "placeholder": "Enter Module Link Name", "row": 1, "col": 2 },
  { "section": "details", "type": "dropdown", "link_name": "status", "name": "Status", options: ["active^^Active", "inactive^^Inactive"], "row": 1, "col": 3 },
  { "section": "details", "type": "text", "link_name": "module_id", "name": "Module ID", "placeholder": "Enter Module ID", "row": 2, "col": 1 },
  { "section": "details", "type": "text", "link_name": "view_id", "name": "View ID", "placeholder": "Enter View ID", "row": 2, "col": 2 },
  { "section": "details", "type": "checkbox", "link_name": "is_public", "name": "Is Public", "placeholder": "Enter Is Public", "row": 2, "col": 3 },
  { "section": "details", "type": "dropdown", "link_name": "module_type", "name": "Module Type", "placeholder": "Enter Module Type", "row": 3, "col": 1, options: ["form^^Form", "report^^Report", "page^^Page"] },
  { "section": "details", "type": "text", "link_name": "url", "name": "URL", "placeholder": "Enter URL", "row": 3, "col": 2 },
  { "section": "details", "type": "number", "link_name": "limit", "name": "Limit", "placeholder": "Enter Limit", "row": 3, "col": 3 },
  { "section": "details", "type": "textarea", "link_name": "workdrive_id", "name": "Workdrive ID", "placeholder": "Enter Workdrive ID", "row": 4, "col": 1 },
  { "section": "details", "type": "datetime", "link_name": "last_workdrive_sync_time", "name": "Last Workdrive Sync Time", "placeholder": "Enter Last Workdrive Sync Time", "row": 4, "col": 2 },
  { "section": "details", "type": "textarea", "link_name": "description", "name": "Description", "placeholder": "Enter Description", "row": 4, "col": 3 },

  // { "section": "All_fields", "type": "text", "link_name": "record_id", "name": "Record ID", "width": "small", "placeholder": "", "row": 7, "col": 3 },
  ...(config.edit_form_headers.main_form.sf1 ? [{ section: 'sf1', type: 'subform', link_name: 'sf1', name: 'Subform1' }] : []),
  ...(config.edit_form_headers.main_form.sf2 ? [{ section: 'sf2', type: 'subform', link_name: 'sf2', name: 'Subform2' }] : [])
];




const load_values = (fs) => {
  fs.status = 'active';
  fs.limit = 10;
  return fs;
};

const all_UI_shed = (fs, ss, on_blur, on_change, fieldKey, editmode) => {
  config.edit_form_headers.main_form.form_headers.forEach(field => {
    if (ss[field.link_name]) {
      ss[field.link_name].show = false;
    }
  });
  ss.module_name.show = true
  ss.module_name.required = true
  ss.module_id.show = true
  ss.module_id.required = true
  ss.module_name.show = true
  ss.module_name.required = true
  ss.module_link_name.show = true
  ss.module_link_name.required = true
  ss.view_id.show = true
  ss.view_id.required = true
  ss.module_type.show = true
  ss.module_type.required = true
  ss.description.show = true
  ss.description.required = true
  ss.status.show = true
  ss.status.required = true
  ss.is_public.show = true
  ss.url.show = true
  ss.url.required = true
  ss.limit.show = true
  ss.limit.required = true
  if (editmode == true) {
    ss.last_workdrive_sync_time.show = true
    ss.last_workdrive_sync_time.disabled = true
    ss.workdrive_id.show = true
    ss.workdrive_id.disabled = true

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
