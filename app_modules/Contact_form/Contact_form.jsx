"use client"
import React, { useState } from 'react';
import All_forms from '@/app/form/common/All_forms';

const config = {
  edit_form_headers: {
    main_form: {
      form_name: "Contact Form",
      view_id: "2569174000007009251",
      report: "Contact_report",
      sf1: false,
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
    {"section":"details","type":"textbox","link_name":"name","name":"Name","width":"small","placeholder":"Enter name","row":1,"col":1},
    {"section":"details","type":"phone","link_name":"number","name":"Number","width":"small","placeholder":"Enter phone number","row":1,"col":2},
    {"section":"details","type":"email","link_name":"email_id","name":"Email ID","width":"small","placeholder":"Enter email","row":1,"col":3},
    {"section":"details","type":"radio","link_name":"caller_type","name":"Caller Type","width":"small","placeholder":"Select caller type","row":2,"col":1,options:["bank_staff^^Bank Staff","lh_staff^^LH Staff"]},
    {"section":"details","type":"textbox","link_name":"emp_id","name":"EMP ID","width":"small","placeholder":"Enter employee ID","row":2,"col":2},
    {"section":"details","type":"textbox","link_name":"designation","name":"Designation","width":"small","placeholder":"Enter designation","row":2,"col":3},
    {"section":"details","type":"textbox","link_name":"branch","name":"Branch","width":"small","placeholder":"Enter branch","row":3,"col":1},
    {"section":"details","type":"dropdown","link_name":"bank_name","name":"Bank Name","width":"small","placeholder":"Select bank","row":3,"col":2,options:["sbi^^State Bank of India","hdfc^^HDFC Bank","icici^^ICICI Bank","axis^^Axis Bank"],other:true},
    {"section":"details","type":"textbox","link_name":"product_name","name":"Product name","width":"small","placeholder":"Enter product name","row":3,"col":3},
  ...(config.edit_form_headers.main_form.sf1 ? [{ section: 'sf1', type: 'subform', link_name: 'sf1', name: 'Subform1' }] : []),
  ...(config.edit_form_headers.main_form.sf2 ? [{ section: 'sf2', type: 'subform', link_name: 'sf2', name: 'Subform2' }] : [])
];

const load_values = (fs) => {
  fs.number="+91 8989898989"
  return fs;
};

const all_UI_shed = (fs, ss, on_blur, on_change, fieldKey, editmode) => {
  config.edit_form_headers.main_form.form_headers.forEach(field => {
    if (ss[field.link_name]) {
      ss[field.link_name].show = false;
    }
  });
  
              ss.emp_id.show = false;
        ss.bank_name.show = false;
        ss.number.disabled = true;

    
     config.edit_form_headers.main_form.form_headers.forEach(field => {
        if (ss[field.link_name]) {
          if (field.link_name === 'emp_id' || field.link_name === 'bank_name') {
            ss[field.link_name].show = false;
          } else {
            ss[field.link_name].show = true;
          }
          if (field.link_name === 'number') {
            ss[field.link_name].disabled = true;
          }
        }
      });

      // Helper to get raw value before '^^' when stored as 'value^^Label'
      const raw = (v) => {
        if (typeof v === 'string' && v.includes('^^')) return v.split('^^')[0];
        return v;
      };

      // Conditional logic based on Caller Type (compare raw stored value)
      if (raw(fs.caller_type) === 'lh_staff') {
        if (ss.emp_id) ss.emp_id.show = true;
        if (ss.bank_name) ss.bank_name.show = false;
      } else if (raw(fs.caller_type) === 'bank_staff') {
        if (ss.emp_id) ss.emp_id.show = false;
        if (ss.bank_name) ss.bank_name.show = true;
      }
    
    
  
      // Default required fields
      const defaultRequired = ['name', 'email_id', 'caller_type', 'designation', 'branch'];
      defaultRequired.forEach(link_name => {
        if (ss[link_name]) {
          ss[link_name].required = true;
        }
      });

      // Conditional required fields based on Caller Type (use raw value)
      if (raw(fs.caller_type) === 'bank_staff') {
         ss.bank_name.show = true
         ss.bank_name.required = true;
      } else if (raw(fs.caller_type) === 'lh_staff') {
        ss.emp_id.show = true;
        ss.emp_id.required = true;
      }
    

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
