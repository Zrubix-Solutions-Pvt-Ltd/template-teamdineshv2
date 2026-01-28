export const loadFormConfig = (formType) => {
  try {
    switch (formType) {

      case 'All_fields_form':
        return {
          formComponent: () => import('@team/All_fields_form/All_fields_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/All_fields_form/All_fields_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'All_fields_form2':
        return {
          formComponent: () => import('@team/All_fields_form2/All_fields_form2').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/All_fields_form2/All_fields_form2').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'All_product_form':
        return {
          formComponent: () => import('@team/All_products/All_product_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/All_products/All_product_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'Role_master_form':
        return {
          formComponent: () => import('@team/Role_master/Role_master_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Role_master/Role_master_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'Module_master_form':
        return {
          formComponent: () => import('@team/Module_master/Module_master_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Module_master/Module_master_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'User_master_form':
        return {
          formComponent: () => import('@team/User_master/User_master_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/User_master/User_master_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'All_tasks_form':
        return {
          formComponent: () => import('@team/All_tasks/All_tasks_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/All_tasks/All_tasks_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'Product_master_form':
        return {
          formComponent: () => import('@team/Product_master_form/Product_master_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Product_master_form/Product_master_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'Client_form':
        return {
          formComponent: () => import('@team/Client_form/Client_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Client_form/Client_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
          case 'Contact_form':
        return {
          formComponent: () => import('@team/Contact_form/Contact_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Contact_form/Contact_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'Call_form':
        return {
          formComponent: () => import('@team/Call_form/Call_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Call_form/Call_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'Yas_customer_form':
        return {
          formComponent: () => import('@team/Yas_customer_form/Yas_customer_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Yas_customer_form/Yas_customer_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
      case 'Yas_chit_form':
        return {
          formComponent: () => import('@team/Yas_chit_form/Yas_chit_form').then(mod => ({ default: mod.default })),
          formHeaders: () => import('@team/Yas_chit_form/Yas_chit_form').then(mod => ({ headers: mod.config ? mod.config.edit_form_headers : mod.edit_form_headers }))
        };
        return null;
    }
  } catch (error) {
    console.error(`Error loading config for ${formType}:`, error);
    return null;
  }
};
