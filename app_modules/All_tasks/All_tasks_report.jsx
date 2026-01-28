import React, { useState } from 'react';
import { Modal } from 'antd';
import Report_logic from '@/app/common/Admin_report_logic';
import { useRouterNavigation } from '@/app/common/Router_list';
// import BulkEditModal from '@/app/report/common/BulkEditModal';

// Consolidated configuration object for All Main Report
export var config = {
  name: "All Tasks Report",
  // Actions configuration
  view_id: "2569174000007099002",
  module_id: "Z9181908335641762521017558",
  form: "All_tasks_form",
  form_name: "All Tasks Form",
    columns: ["record_id", "activity_id"],

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
    { name: "Record ID", link_name: "record_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
    { name: "Activity ID", link_name: "activity_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
    { name: "Activity Name", link_name: "activity_name", type: "textbox", display: true, section: "All_fields", bulk_edit: true },
    { name: "Description", link_name: "description", type: "textarea", display: true, section: "All_fields", bulk_edit: true },
    { name: "From Date-Time", link_name: "from_date_time", type: "datetime", display: true, section: "All_fields", bulk_edit: true },
    { name: "To Date-Time", link_name: "to_date_time", type: "datetime", display: true, section: "All_fields", bulk_edit: true },
    { name: "Parent Activity ID", link_name: "parent_activity_id", type: "lookup", display: true, section: "All_fields", bulk_edit: true, report: "All_tasks_report" },
    { name: "Status", link_name: "status", type: "dropdown", display: true, section: "All_fields", bulk_edit: true, options: ["planned^^Planned", "missed^^Missed", "started^^Started", "completed^^Completed", "cancelled^^Cancelled", "closed^^Closed"] },
    { name: "Assigned Staffs", link_name: "assigned_staffs", type: "multilookup", display: true, section: "All_fields", bulk_edit: true, report:"All_users_report" },
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
        view_id: "2569174000007099002",
      },
      fields: [], // Will be populated from fields array
      //  subforms: {
      //   sf1: {
      //     subFormName: "SF1",
      //     main_form_link_name: "sf1",
      //     subform_view_id: "2569174000007080001",
      //     subFormHeaders: [
      //       { name: "Record ID", link_name: "record_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Activity ID", link_name: "activity_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Activity Name", link_name: "activity_name", type: "textbox", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Description", link_name: "description", type: "textarea", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Planned From Date-Time", link_name: "planned_from_datetime", type: "datetime", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Planned To Date-Time", link_name: "planned_to_datetime", type: "datetime", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Parent Activity ID", link_name: "parent_activity_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Status", link_name: "status", type: "dropdown", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Wallet Deduction", link_name: "wallet_deduction", type: "number", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Assigned Zrubix Staffs", link_name: "assigned_zrubix_staffs", type: "multidropdown", display: true, section: "All_fields", bulk_edit: true },
      //       { name: "Assigned Client Staffs", link_name: "assigned_client_staffs", type: "multidropdown", display: true, section: "All_fields", bulk_edit: true },
      //     ]
      //   }, sf2: {
      //     subFormName: "SF2",
      //     main_form_link_name: "sf2",
      //     subform_view_id: "2569174000007080001",
      //     subFormHeaders: [
      //      { name: "Record ID", link_name: "record_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Activity ID", link_name: "activity_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Activity Name", link_name: "activity_name", type: "textbox", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Description", link_name: "description", type: "textarea", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Planned From Date-Time", link_name: "planned_from_datetime", type: "datetime", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Planned To Date-Time", link_name: "planned_to_datetime", type: "datetime", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Parent Activity ID", link_name: "parent_activity_id", type: "text", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Status", link_name: "status", type: "dropdown", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Wallet Deduction", link_name: "wallet_deduction", type: "number", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Assigned Zrubix Staffs", link_name: "assigned_zrubix_staffs", type: "multidropdown", display: true, section: "All_fields", bulk_edit: true },
      //      { name: "Assigned Client Staffs", link_name: "assigned_client_staffs", type: "multidropdown", display: true, section: "All_fields", bulk_edit: true },
      //     ]
      //   }
      // },
    },
  },

  // Report configuration
  report: {
    function: "search_and_filter_records",
    app: "analytics",
    view_id: "2569174000007099002",
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
      return { ...action, onExecute: (row) => {
        console.log('All_fields_report: Modified edit action called with row:', row);
        console.log('All_fields_report: navigateToForm available:', typeof navigateToForm);
        console.log('All_fields_report: Calling navigateToForm with:', config.form, row.record_id);
        navigateToForm(config.form, row.record_id);
        console.log('All_fields_report: Modified navigateToForm called');
      }};
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
            <p><strong>Activity ID:</strong> {row.activity_id}</p>
            <p><strong>Activity Name:</strong> {row.activity_name}</p>
            <p><strong>Status:</strong> {row.status}</p>
            <p><strong>Wallet Deduction:</strong> {row.wallet_deduction}</p>
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