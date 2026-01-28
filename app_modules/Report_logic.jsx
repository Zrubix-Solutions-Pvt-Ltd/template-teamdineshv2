export const loadReportConfig = (reportType) => {
  try {
    switch (reportType) {
      case 'All_fields_report2':
        return () => import('@team/All_fields_form2/All_fields_report2').then(mod => mod.config);
      case 'All_fields_report':
        return () => import('@team/All_fields_form/All_fields_report').then(mod => mod.config);
      case 'All_product_report':
        return () => import('@team/All_products/All_product_report').then(mod => mod.config);
      case 'Role_master_report':
        return () => import('@team/Role_master/Role_master_report').then(mod => mod.config);
      case 'Module_master_report':
        return () => import('@team/Module_master/Module_master_report').then(mod => mod.config);
      case 'User_master_report':
        return () => import('@team/User_master/User_master_report').then(mod => mod.config);
      case 'All_tasks_report':
        return () => import('@team/All_tasks/All_tasks_report').then(mod => mod.config);
      case 'Product_master_report':
        return () => import('@team/Product_master_form/Product_master_report').then(mod => mod.config);
      case 'Client_report':
        return () => import('@team/Client_form/Client_report').then(mod => mod.config);
         case 'Contact_report':
        return () => import('@team/Contact_form/Contact_report').then(mod => mod.config);
      case 'Call_report':
        return () => import('@team/Call_form/Call_report').then(mod => mod.config);
      case 'Yas_customer_report':
        return () => import('@team/Yas_customer_form/Yas_customer_report').then(mod => mod.config);
      case 'Yas_chit_report':
        return () => import('@team/Yas_chit_form/Yas_chit_report').then(mod => mod.config);
      default:
        return () => Promise.resolve({
          type: "report",
          reportName: "Default Grid View",
          display: true,
          isReport: true,
          config: {}, // Default config
          headers: []
        });
    }
  } catch (error) {
    console.error(`Error loading config for ${reportType}:`, error);
    return () => Promise.resolve({
      type: "report",
      reportName: "Error Loading Report",
      display: true,
      isReport: true,
      config: {},
      headers: []
    });
  }
};
