import React, { useState } from 'react';
import { Modal } from 'antd';
import Report_logic from '@/app/common/Admin_report_logic';
import { useRouterNavigation } from '@/app/common/Router_list';
// import BulkEditModal from '@/app/report/common/BulkEditModal';

// Consolidated configuration object for All Main Report
export var config = {
  name: "All Product Master Report",
  // Actions configuration
  view_id: "2569174000006873929",//table/pivot
  module_id: "Z9187786608481763633563259",
  form: "Product_master_form",
  form_name: "Product Master Form",
  columns: ["record_id", "product_name"],
  actions: [
    {
      key: 'edit',
      label: 'Edit',
      single_action: true,
      onExecute: (row) => {
        // This will be overridden in the component
        console.log('Original edit action called - should be overridden');
      }
    },
    {
      key: 'delete',
      label: 'Delete',
      single_action: true,
      onExecute: (row) => {
        if (confirm('Are you sure you want to delete this record?')) {
          // Add delete logic here
          console.log('Delete record:', row.record_id);
        }
      }
    }
  ],

  // Fields configuration
  fields: [
    { "section": "details", "type": "text", "link_name": "product_name", "name": "Product Name", "display": true, "bulk_edit": true },
    { "section": "details", "type": "textarea", "link_name": "description", "name": "Description", "display": true, "bulk_edit": false },
    { "section": "details", "type": "dropdown", "link_name": "status", "name": "Status", "display": true, "bulk_edit": true, options: ["active^^Active", "inactive^^Inactive"] },
    { "section": "details", "type": "text", "link_name": "product_id", "name": "Product ID", "display": true, "bulk_edit": true },
    { "section": "details", "type": "dropdown", "link_name": "category", "name": "Category", "display": true, "bulk_edit": true, options: ["cat1^^Category 1", "cat2^^Category 2"] },
    { "section": "details", "type": "dropdown", "link_name": "subcategory", "name": "Subcategory", "display": true, "bulk_edit": true, options: ["subcat1^^Subcategory 1", "subcat2^^Subcategory 2"] },
    { "section": "details", "type": "decimal", "link_name": "unit_price", "name": "Unit Price", "display": true, "bulk_edit": true },
    { "section": "details", "type": "decimal", "link_name": "discount", "name": "Discount", "display": true, "bulk_edit": true },
    { "section": "details", "type": "number", "link_name": "quantity_in_stock", "name": "Quantity In Stock", "display": true, "bulk_edit": true },
    { "section": "details", "type": "text", "link_name": "supplier", "name": "Supplier", "display": true, "bulk_edit": true },
    { "section": "details", "type": "text", "link_name": "sku_barcode", "name": "SKU/Barcode", "display": true, "bulk_edit": true },
    { "section": "details", "type": "date", "link_name": "launch_date", "name": "Launch Date", "display": true, "bulk_edit": true },
    { "section": "details", "type": "date", "link_name": "discontinued_date", "name": "Discontinued Date", "display": true, "bulk_edit": true },
  ],
  // Detailed view configuration
  detailedView: {
    config: {
      parameters: {
        function: "get_records_by_filter",
        config: {
          responseFormat: "json",
          criteria: "(\"is_deleted\"='false' and \"is_latest\"='true')"
        },
        view_id: "2569174000006873929",
      },
      fields: [], // Will be populated from fields array
      subforms: {
        sf1: {
          subFormName: "SF1",
          main_form_link_name: "sf1",
          subform_view_id: "2569174000006870985",
          subFormHeaders: [
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
        }, sf2: {
          subFormName: "SF2",
          main_form_link_name: "sf2",
          subform_view_id: "2569174000007080001",
          subFormHeaders: [
            { name: "Record ID", link_name: "record_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
            { name: "Textbox", link_name: "textbox", type: "textbox", display: true, section: "All_fields", bulk_edit: true },
            { name: "Dropdown", link_name: "dropdown", type: "dropdown", display: true, section: "All_fields", bulk_edit: true },
            { name: "Multidropdown", link_name: "multidropdown", type: "multidropdown", display: true, section: "All_fields", bulk_edit: true },
            { name: "Multicheckbox", link_name: "multicheckbox", type: "multicheckbox", display: true, section: "All_fields", bulk_edit: true },
            { name: "Lookup", link_name: "lookup", type: "lookup", display: true, section: "All_fields", bulk_edit: true, report: "All_product_report" },
            { name: "Multilookup", link_name: "multilookup", type: "multilookup", display: true, section: "All_fields", bulk_edit: true, report: "All_product_report" },
            { name: "File", link_name: "file", type: "file", display: true, section: "All_fields", bulk_edit: true },
            { name: "Multifile", link_name: "multifile", type: "multifile", display: true, section: "All_fields", bulk_edit: true },
            { name: "Date", link_name: "date", type: "date", display: true, section: "All_fields", bulk_edit: true },
            { name: "Datetime", link_name: "datetime", type: "datetime", display: true, section: "All_fields", bulk_edit: true },
            { name: "Time", link_name: "time", type: "time", display: true, section: "All_fields", bulk_edit: true },
            { name: "Email", link_name: "email", type: "email", display: true, section: "All_fields", bulk_edit: true },
            { name: "Phone", link_name: "phone", type: "phone", display: true, section: "All_fields", bulk_edit: true },
            { name: "Password", link_name: "password", type: "password", display: true, section: "All_fields", bulk_edit: true },
            { name: "Number", link_name: "number", type: "number", display: true, section: "All_fields", bulk_edit: true },
            { name: "Decimal", link_name: "decimal", type: "decimal", display: true, section: "All_fields", bulk_edit: true },
            { name: "Textarea", link_name: "textarea", type: "textarea", display: true, section: "All_fields", bulk_edit: true },
            { name: "Radio", link_name: "radio", type: "radio", display: true, section: "All_fields", bulk_edit: true },
            { name: "Checkbox", link_name: "checkbox", type: "checkbox", display: true, section: "All_fields", bulk_edit: true },
          ]
        }
      },
    },
  },

  // Report configuration
  report: {
    function: "search_and_filter_records",
    app: "analytics",
    view_id: "2569174000006873929",
    config: {
      responseFormat: "json",
    },
    pagination: {
      fields: [], // Will be populated from fields array
      filterBy: [],
      sortBy: [
        {
          field: "product_id",
          sortOrder: "asc",
          case_sensitive: true,
        },
      ],
      reportTypes: ["Map View", "Pivot View", "Sheet View", "Grid View", "Kanban View", "Card View"],
      per_page: 20,
      page: 1,
    },
  },

  // Sample data for preview
  sampleData: []
};

// Initialize detailed view fields from the main fields array
config.detailedView.config.fields = config.fields;

// Initialize report pagination fields from the main fields array
config.report.pagination.fields = config.fields;

// Export individual configurations for backward compatibility
export const actions = config.actions;
export const var_fields = config.fields;
export const detailed_view_config = config.detailedView;
export const sampleData = config.sampleData;


const All_fields_report = () => {
  const { navigateToForm } = useRouterNavigation();
  const [modalVisible_action1, setModalVisible_action1] = useState(false);
  const [selectedData_action1, setSelectedData_action1] = useState(null);
  const [modalVisible_action2, setModalVisible_action2] = useState(false);
  const [selectedData_action2, setSelectedData_action2] = useState(null);
  const [bulkEditModalVisible, setBulkEditModalVisible] = useState(false);
  const [selectedRowsForEdit, setSelectedRowsForEdit] = useState([]);
  // Kanban related state (was missing and caused ReferenceError)
  const defaultColumnOrder = config.fields.map((f) => f.link_name);
  const [kanbanConfig, setKanbanConfig] = useState(() => ({
    sort_mode: 'asc',
    column_order: defaultColumnOrder,
  }));
  const [tempColumnOrder, setTempColumnOrder] = useState(() => defaultColumnOrder.slice());
  const [reorderModalVisible, setReorderModalVisible] = useState(false);

  const handle_action1 = (data) => {
    console.log("Action 1 executed for-All_fields_report.jsx:", data);
    // Handle both single row and bulk rows
    if (Array.isArray(data)) {
      // Bulk action - handle multiple rows
      setSelectedData_action1(data); // Store the array of rows
    } else {
      // Single action - handle single row
      setSelectedData_action1([data]); // Convert to array for consistent handling
    }
    setModalVisible_action1(true);
  };

  const handle_action2 = (data) => {
    console.log("Action 2 executed for-Client_report.jsx:", data);
    // Handle both single row and bulk rows - show only record IDs
    if (Array.isArray(data)) {
      // Bulk action - handle multiple rows
      setSelectedData_action2(data);
    } else {
      // Single action - handle single row
      setSelectedData_action2([data]);
    }
    setModalVisible_action2(true);
  };

  const handle_action3 = (data) => {
    console.log("Action 3 executed for-Client_report.jsx:", data);
    // Handle single row - open new tab with record_ids parameter
    const rows = Array.isArray(data) ? data : [data];
    const recordIds = rows.map(row => row.record_id).filter(id => id);

    if (recordIds.length > 0) {
      // Create URL with existing parameters plus record_ids
      const currentUrl = new URL(window.location.href);
      const recordIdsParam = `[${recordIds.join(',')}]`;
      currentUrl.searchParams.set('record_ids', recordIdsParam);
      const newUrl = currentUrl.toString();

      // Open in new tab
      window.open(newUrl, '_blank');
    }
  };

  const handle_bulk_edit = (rows) => {
    console.log("Bulk edit initiated for rows-Client_report.jsx:", rows);
    setSelectedRowsForEdit(Array.isArray(rows) ? rows : [rows]);
    setBulkEditModalVisible(true);
  };

  const handleBulkEditSave = async (rows, changes, clearFields = []) => {
    console.log("Saving bulk edits-Client_report.jsx:", { rows, changes, clearFields });
    // Here you would typically make an API call to update the records
    // For now, we'll just simulate the update
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In a real implementation, you would update the records via API
      // and then refresh the report data

      console.log(`Successfully updated ${rows.length} records with changes-All_fields_report.jsx:`, changes);
      if (clearFields.length > 0) {
        console.log(`Fields to clear-All_fields_report.jsx:`, clearFields);
      }
    } catch (error) {
      console.error("Error saving bulk edits:", error);
      throw error;
    }
  };

  const handleModalCancel_action1 = () => {
    setModalVisible_action1(false);
    setSelectedData_action1(null);
  };

  const handleModalCancel_action2 = () => {
    setModalVisible_action2(false);
    setSelectedData_action2(null);
  };

  // Modify the config to use the handle_action1, handle_action2, and handle_action3 functions
  const reportConfig = { ...config.report };
  reportConfig.actions = config.actions.map(action => {
    if (action.key === 'edit') {
      console.log('All_fields_report: Overriding edit action');
      return {
        ...action, onExecute: (row) => {
          console.log('All_fields_report: Modified edit action called with row:', row);
          console.log('All_fields_report: navigateToForm available:', typeof navigateToForm);
          console.log('All_fields_report: Calling navigateToForm with:', config.form, row.record_id);
          navigateToForm(config.form, row.record_id);
          console.log('All_fields_report: Modified navigateToForm called');
        }
      };
    } else if (action.key === 'action1') {
      return { ...action, onExecute: handle_action1 };
    } else if (action.key === 'action2') {
      return { ...action, onExecute: handle_action2 };
    } else if (action.key === 'action3') {
      return { ...action, onExecute: handle_action3 };
    } else if (action.key === 'bulkEdit') {
      return { ...action, onExecute: handle_bulk_edit };
    }
    return action;
  });
  reportConfig.sampleData = config.sampleData;

  return (
    <>
      <Report_logic reportType="All_fields_report" inline={true} configOverride={reportConfig} />
      <Modal
        title={`Action 1 Details - ${Array.isArray(selectedData_action1) && selectedData_action1.length === 1 ? 'Single Action' : 'Bulk Action'}${Array.isArray(selectedData_action1) && selectedData_action1.length > 1 ? ` (${selectedData_action1.length} items)` : ''}`}
        open={modalVisible_action1}
        onCancel={handleModalCancel_action1}
        footer={null}
        width={Array.isArray(selectedData_action1) && selectedData_action1.length > 1 ? 800 : 600}
      >
        {selectedData_action1 && Array.isArray(selectedData_action1) && selectedData_action1.map((row, index) => (
          <div key={row.record_id || index} style={{ marginBottom: index < selectedData_action1.length - 1 ? '20px' : '0', padding: '10px', border: '1px solid #f0f0f0', borderRadius: '4px' }}>
            {selectedData_action1.length > 1 && <h4>Item {index + 1}</h4>}
            <p><strong>Record ID:</strong> {row.record_id}</p>
            <p><strong>Textbox:</strong> {row.textbox}</p>
            <p><strong>Dropdown:</strong> {row.dropdown}</p>
            <p><strong>Number:</strong> {row.number}</p>
          </div>
        ))}
      </Modal>
      <Modal
        title={`Action 2 - Record IDs - ${Array.isArray(selectedData_action2) && selectedData_action2.length === 1 ? 'Single Action' : 'Bulk Action'}${Array.isArray(selectedData_action2) && selectedData_action2.length > 1 ? ` (${selectedData_action2.length} items)` : ''}`}
        open={modalVisible_action2}
        onCancel={handleModalCancel_action2}
        footer={null}
        width={Array.isArray(selectedData_action2) && selectedData_action2.length > 1 ? 600 : 400}
      >
        {selectedData_action2 && Array.isArray(selectedData_action2) && selectedData_action2.map((row, index) => (
          <div key={row.record_id || index} style={{ marginBottom: index < selectedData_action2.length - 1 ? '10px' : '0', padding: '8px', border: '1px solid #f0f0f0', borderRadius: '4px' }}>
            {selectedData_action2.length > 1 && <h4>Item {index + 1}</h4>}
            <p><strong>Record ID:</strong> {row.record_id}</p>
          </div>
        ))}
      </Modal>
      {/* <BulkEditModal
        visible={bulkEditModalVisible}
        onCancel={() => setBulkEditModalVisible(false)}
        onSave={handleBulkEditSave}
        selectedRows={selectedRowsForEdit}
        fields={config.fields}
      /> */}
    </>
  );
};

export default All_fields_report