// Import form categories from the main Sidebar component
import { FiLayers } from "react-icons/fi";

export const online_formCategories = [
  {
    label: "Offline Forms",
    icon: <FiLayers />,
    key: "offline_forms",
    forms: [
      { key: "zems?form=Offline_form1", label: "Offline Form1", module_link_name: "", icon: <FiLayers /> },
      { key: "zems?form=Offline_form2", label: "Offline Form2", module_link_name: "", icon: <FiLayers /> },
      { key: "zems?form=Offline_form3", label: "Offline Form3", module_link_name: "", icon: <FiLayers /> },
    ],
  },
  {
    label: "Developer Tools",
    icon: <FiLayers />,
    key: "developer_tools",
    forms: [
      { key: "zems?page=Developer", label: "Developer", module_link_name: "", icon: <FiLayers /> },
      { key: "zems?page=Summary", label: "App Summary", module_link_name: "", icon: <FiLayers /> },
    ],
  },
  {
    label: "Reports1",
    icon: <FiLayers />,
    key: "reports",
    forms: [
      { key: "zems?page=Grid_view", label: "Grid View1", module_link_name: "", icon: <FiLayers /> },
      { key: "zems?report=All_user_report", label: "All User Report", module_link_name: "", icon: <FiLayers /> },
      { key: "zems?report=Admin_user_report", label: "Admin User Report", module_link_name: "", icon: <FiLayers /> },
    ],
  },
  {
    label: "Sample Form 1",
    icon: <FiLayers />,
    key: "Sample_Form_1",
    forms: [
      {
        key: "zems?form=Sample_Main_Form_2Fields_Form",
        label: "Sample Main Form",
        module_link_name: "form=Sample_Main_Form_2Fields_Form",
        module_type: "form",
        icon: <FiLayers />,
      },
      {
        key: "zems?report=Sample_Main_Form_2Fields_Report1&page=1&per_page=100",
        label: "Sample Main Form Report1",
        module_link_name: "report=Sample_Main_Form_2Fields_Report1",
        module_type: "report",
        icon: <FiLayers />,
      },
      {
        key: "zems?report=Sample_Main_Form_2Fields_Report2&page=1&per_page=100",
        label: "Sample Main Form Report2",
        module_link_name: "report=Sample_Main_Form_2Fields_Report2",
        module_type: "report",
        icon: <FiLayers />,
      },
      {
        key: "zems?report=Sample_Main_Form_2Fields_Report3&page=1&per_page=100",
        label: "Sample Main Form Report3",
        module_link_name: "report=Sample_Main_Form_2Fields_Report3",
        module_type: "report",
        icon: <FiLayers />,
      },
    ],
  },
  {
    label: "Role Master",
    icon: <FiLayers />,
    key: "Role_Master",
    forms: [
      { key: "zems?form=Role_Master_Form", label: "Role Form", module_link_name: "form=Role_Master_Form", module_type: "form", icon: <FiLayers /> },
      {
        key: "zems?report=Role_Master_Report&page=1&per_page=100",
        label: "Role Form Report",
        module_link_name: "report=Role_Master_Report",
        module_type: "report",
        icon: <FiLayers />,
      },
    ],
  },
  {
    label: "Order Form",
    icon: <FiLayers />,
    key: "Order_form",
    forms: [
      { key: "zems?form=Order_form", label: "Order Form", module_link_name: "form=Order_form", module_type: "form", icon: <FiLayers /> }
    ],
  },
  {
    label: "Main Form Test",
    icon: <FiLayers />,
    key: "Main_form_test",
    forms: [
      { key: "zems?form=Main_form_test", label: "Main Form Test", module_link_name: "form=Main_form_test", module_type: "form", icon: <FiLayers /> },
    ],
  },
  {
    label: "Alert Master",
    icon: <FiLayers />,
    key: "Alert_Form",
    forms: [{ key: "zems?form=Alert_Form", label: "Alert Form", module_link_name: "form=Alert_Form", module_type: "form", icon: <FiLayers /> }],
  },
  {
    label: "User Master",
    icon: <FiLayers />,
    key: "User_Master",
    forms: [
      { key: "zems?form=User_Master_Form", label: "User Master", module_link_name: "form=User_Master_Form", module_type: "form", icon: <FiLayers /> },
      {
        key: "zems?report=User_Master_Report&page=1&per_page=100",
        label: "User Master Report",
        module_link_name: "report=User_Master_Report",
        module_type: "report",
        icon: <FiLayers />,
      },
    ],
  },
  {
    label: "Module Master",
    icon: <FiLayers />,
    key: "Module_Master",
    forms: [
      { key: "zems?form=Module_Master_Form", label: "Module Form", icon: <FiLayers /> },
      {
        key: "zems?report=Module_Master_Report&page=1&per_page=100",
        label: "Module Master Report",
        icon: <FiLayers />,
      },
    ],
  },
  {
    label: "Permission Master",
    icon: <FiLayers />,
    key: "Permission_Master",
    forms: [
      { key: "zems?form=Permission_Master_Form", label: "Permission Form", icon: <FiLayers /> },
      {
        key: "zems?report=Permission_Master_Report&page=1&per_page=100",
        label: "Permission Master Report",
        icon: <FiLayers />,
      },
    ],
  },
  {
    label: "L1",
    icon: <FiLayers />,
    key: "L1",
    forms: [
      {
        key: "L2",
        label: "L2",
        icon: <FiLayers />,
        children: [
          { key: "zems?form=Offline_form1&L2.1", label: "L2.1", module_link_name: "", icon: <FiLayers /> },
          { key: "zems?form=Offline_form2&L2.2", label: "L2.2", module_link_name: "", icon: <FiLayers /> },
          { key: "zems?form=Offline_form3&L2.3", label: "L2.3", module_link_name: "", icon: <FiLayers /> },
        ],
      }, {
        key: "L3",
        label: "L3",
        icon: <FiLayers />,
        children: [
          { key: "zems?form=Offline_form1&L3.1", label: "L3.1", module_link_name: "", icon: <FiLayers /> },
          { key: "zems?form=Offline_form2&L3.2", label: "L3.2", module_link_name: "", icon: <FiLayers /> },
          { key: "zems?form=Offline_form3&L3.3", label: "L3.3", module_link_name: "", icon: <FiLayers /> },
        ],
      },
    ],
  },
];


export const offline_formCategories = [
  {
    label: "Offline Forms",
    icon: <FiLayers />,
    key: "offline_forms",
    forms: [
      {
        key: "zems?form=Offline_form1",
        label: "Offline Form1",
        icon: <FiLayers />,
        link_name: "offline_form1",

      }, {
        key: "zems?form=Offline_form2",
        label: "Offline Form2",
        icon: <FiLayers />, link_name: "offline_form2",

      }, {
        key: "zems?form=Offline_form3",
        label: "Offline Form3",
        icon: <FiLayers />, link_name: "offline_form3",

      }
    ],
  },
];

export const logout_formCategories = [
   
  {
    label: "Contact",
    icon: <FiLayers />,
    key: "contact",
    forms: [
      {
        key: "zems?form=Contact_form",
        label: "Contact Form",
        icon: <FiLayers />, link_name: "Contact_form",

      },
      {
        key: "zems?report=Contact_report",
        label: "Contact Report",
        icon: <FiLayers />, link_name: "Contact_report",

      }
    ],
  },{
    label: "Call",
    icon: <FiLayers />,
    key: "call",
    forms: [
      {
        key: "zems?form=Call_form",
        label: "Call Form",
        icon: <FiLayers />, link_name: "Call_form",

      },
      // {
      //   key: "zems?report=Call_report",
      //   label: "Call Report",
      //   icon: <FiLayers />, link_name: "Call_report",

      // }
    ],
  },
  {
    label: "Role",
    icon: <FiLayers />,
    key: "role",
    forms: [
      {
        key: "zems?form=Role_master_form",
        label: "Role Master Form",
        icon: <FiLayers />, link_name: "Role_master_form",

      },
      {
        key: "zems?report=Role_master_report",
        label: "Role Master Report",
        icon: <FiLayers />, link_name: "Role_master_report",

      }
    ],
  },
  {
    label: "Module",
    icon: <FiLayers />,
    key: "module",
    forms: [
      {
        key: "zems?form=Module_master_form",
        label: "Module Master Form",
        icon: <FiLayers />, link_name: "Module_master_form",

      },
      {
        key: "zems?report=Module_master_report",
        label: "Module Master Report",
        icon: <FiLayers />, link_name: "Module_master_report",

      }
    ],
  },
  {
    label: "User",
    icon: <FiLayers />,
    key: "user",
    forms: [
      {
        key: "zems?form=User_master_form",
        label: "User Master Form",
        icon: <FiLayers />, link_name: "User_master_form",

      },
      {
        key: "zems?report=User_master_report",
        label: "User Master Report",
        icon: <FiLayers />, link_name: "User_master_report",

      }
    ],
  },
  {
    label: "Task",
    icon: <FiLayers />,
    key: "task",
    forms: [
      {
        key: "zems?form=All_tasks_form",
        label: "Task Form",
        icon: <FiLayers />, link_name: "All_tasks_form",

      },
      {
        key: "zems?report=All_tasks_report",
        label: "Task Report",
        icon: <FiLayers />, link_name: "All_tasks_report",

      }
    ],
  },
  {
    label: "Product",
    icon: <FiLayers />,
    key: "product",
    forms: [
      {
        key: "zems?form=Product_master_form",
        label: "Product Form",
        icon: <FiLayers />, link_name: "Product_master_form",

      },
      {
        key: "zems?report=Product_master_report",
        label: "Product Report",
        icon: <FiLayers />, link_name: "Product_master_report",

      }
    ],
  },
  {
    label: "Client",
    icon: <FiLayers />,
    key: "client",
    forms: [
      {
        key: "zems?form=Client_form",
        label: "Client Form",
        icon: <FiLayers />, link_name: "Client_form",

      },
      // {
      //   key: "zems?report=Client_report",
      //   label: "Client Report",
      //   icon: <FiLayers />, link_name: "Client_report",

      // }
    ],
  },
  {
    label: "Yas Customer",
    icon: <FiLayers />,
    key: "yas_customer",
    forms: [
      {
        key: "zems?form=Yas_customer_form",
        label: "Yas Customer Form",
        icon: <FiLayers />, link_name: "Yas_customer_form",

      },
      // {
      //   key: "zems?report=Yas_customer_report",
      //   label: "Yas Customer Report",
      //   icon: <FiLayers />, link_name: "Yas_customer_report",

      // }
    ],
  },
  {
    label: "Yas Chit",
    icon: <FiLayers />,
    key: "yas_chit",
    forms: [
      {
        key: "zems?form=Yas_chit_form",
        label: "Chit Form",
        icon: <FiLayers />, link_name: "Yas_chit_form",

      },
      // {
      //   key: "zems?report=Yas_chit_report",
      //   label: "Chit Report",
      //   icon: <FiLayers />, link_name: "Yas_chit_report",

      // }
    ],
  }



];