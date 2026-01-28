"use client"
import React, { useState } from 'react';
import All_forms from '@/app/form/common/All_forms';

const config = {
  edit_form_headers: {
    main_form: {
      form_name: "Product Master Form",
      view_id: "2569174000006873929",
      report: "Product_master_report",
      sf1: false,
      sf2: false
    },
    subforms: {
      sf1: {
        main_form_link_name: "product_id",
        view_id: "2569174000006870985",
        headers: [
          { name: "Permission ID", link_name: "permission_id", type: "text" },
          { name: "Status", link_name: "status", type: "dropdown", options: ["active^^Active", "inactive^^Inactive"] },
          { name: "Module Name", link_name: "module_id", type: "lookup", report: "Module_master_report" },
          { name: "Add", link_name: "add", type: "checkbox" },
          { name: "Edit", link_name: "edit", type: "checkbox" },
          { name: "Delete", link_name: "delete", type: "checkbox" },
          { name: "View", link_name: "view", type: "checkbox" },
          { name: "View All", link_name: "view_all", type: "checkbox" },
          { name: "Edit All", link_name: "edit_all", type: "checkbox" },
          { name: "Delete All", link_name: "delete_all", type: "checkbox" },
          { name: "Export", link_name: "export", type: "checkbox" },
          { name: "Print", link_name: "print", type: "checkbox" },
          { name: "Description", link_name: "description", type: "textarea" },
          { name: "Access Level", link_name: "access_level", type: "dropdown", options: ["read^^Read", "write^^Write", "admin^^Admin"], other: true },
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
  { "section": "details", "type": "text", "link_name": "product_name", "name": "Product Name", "placeholder": "Enter Product Name", "row": 1, "col": 1 },
  { "section": "details", "type": "text", "link_name": "product_id", "name": "Product ID", "placeholder": "Enter Product ID", "row": 1, "col": 2 },
  { "section": "details", "type": "dropdown", "link_name": "status", "name": "Status", options: ["active^^Active", "inactive^^Inactive"], "row": 1, "col": 3 },
  { "section": "details", "type": "dropdown", "link_name": "category", "name": "Category", "placeholder": "Enter Category", options: ["cat1^^Category 1", "cat2^^Category 2"], other: true, "row": 2, "col": 1 },
  { "section": "details", "type": "dropdown", "link_name": "subcategory", "name": "Subcategory", "placeholder": "Enter Subcategory", options: ["subcat1^^Subcategory 1", "subcat2^^Subcategory 2"], other: true, "row": 2, "col": 2 },
  { "section": "details", "type": "text", "link_name": "sku_barcode", "name": "SKU/Barcode", "placeholder": "Enter SKU or Barcode", "row": 2, "col": 3 },
  { "section": "details", "type": "number", "link_name": "quantity_in_stock", "name": "Quantity In Stock", "placeholder": "Enter Quantity In Stock", "row": 3, "col": 1 },
  { "section": "details", "type": "decimal", "link_name": "unit_price", "name": "Unit Price", "placeholder": "Enter Unit Price", "row": 3, "col": 2 },
  { "section": "details", "type": "decimal", "link_name": "discount", "name": "Discount", "placeholder": "Enter Discount", "row": 3, "col": 3 },
  { "section": "details", "type": "date", "link_name": "discontinued_date", "name": "Discontinued Date", "placeholder": "Select Discontinued Date", "row": 4, "col": 1 },
  { "section": "details", "type": "text", "link_name": "supplier", "name": "Supplier", "placeholder": "Enter Supplier", "row": 4, "col": 2 },
  { "section": "details", "type": "date", "link_name": "launch_date", "name": "Launch Date", "placeholder": "Select Launch Date", "row": 4, "col": 3 },
  { "section": "details", "type": "textarea", "link_name": "description", "name": "Description", "placeholder": "Enter Description", "row": 5, "col": 1 },

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
  ss.product_name.show = true
  ss.product_name.required = true
  ss.description.show = true
  ss.status.show = true
  ss.status.required = true
  ss.product_id.show = true
  ss.product_id.required = true
  ss.category.show = true
  ss.category.required = true
  ss.subcategory.show = true
  ss.unit_price.show = true
  ss.unit_price.required = true
  ss.discount.show = true
  ss.quantity_in_stock.show = true
  ss.supplier.show = true
  ss.sku_barcode.show = true
  ss.launch_date.show = true
  ss.discontinued_date.show = true

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

    ss.permission_id.show = true
    ss.permission_id.required = true
    ss.status.show = true
    ss.status.required = true
    ss.module_id.show = true
    ss.module_id.required = true
    ss.add.show = true
    ss.edit.show = true
    ss.delete.show = true
    ss.view.show = true
    ss.view_all.show = true
    ss.edit_all.show = true
    ss.delete_all.show = true
    ss.export.show = true
    ss.print.show = true
    ss.description.show = true
    ss.access_level.show = true
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
