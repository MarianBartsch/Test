jQuery.sap.declare("cus.crm.myaccounts.CRM_MYACCOUNTSExtension.Component");

// use the load function for getting the optimized preload file if present 
sap.ui.component.load({
	name: "cus.crm.myaccounts",

	// Use the below URL to run the extended application when SAP-delivered application is deployed on SAPUI5 ABAP Repository
	url: "/sap/bc/ui5_ui5/sap/crm.myaccounts"

	// we use a URL relative to our own component
	// extension application is deployed with customer namespace 
});

this.cus.crm.myaccounts.Component.extend("cus.crm.myaccounts.CRM_MYACCOUNTSExtension.Component", {
	metadata: {
		version: "1.0",
		// 		routing: {
		//	config: {
		// viewType: "XML",
		// viewPath: "cus.crm.myaccounts.view.maintain"

		// clearTarget: false,
		// targetAggregation: "pages",
		// // targetParent: "__xmlview1",
		// viewPath: "cus.crm.myaccounts.view",
		// viewType: "XML"

		//	},
		// 			routes: {

		// pattern: "addAccount",
		// view: "GeneralDataEditCustom",
		// targetAggregation: "Content"

		// "S2" : {
		// pattern : "",
		// view : "S2",

		// },
		// "mainPage" : {
		// pattern : "mainPage/{filterState}",
		// view : "S2",

		// },
		// "addAccount": {
		// 	pattern: "addAccount",
		// 	view: "maintain.GeneralDataEditCustom"
		// }

		// 			}
		// 		},
		//         fullScreenPageRoutes : {

		// 		"addAccount" : {
		// 			pattern : "addAccount",
		// 			view : "maintain.GeneralDataEditCustom"
		// 		}
		//},

		config: {
			"sap.ca.serviceConfigs": [
				{
					name: "CRM_BUPA_ODATA",
					serviceUrl: "/sap/opu/odata/sap/ZCRM_BUPA_ODATA_SRV",
					isDefault: true
		      }
		  ]

		},

		customizing: {
			"sap.ui.viewReplacements": {
				"cus.crm.myaccounts.view.S360": {
					viewName: "cus.crm.myaccounts.CRM_MYACCOUNTSExtension.view.S360Custom",
					type: "XML"
				},
				"cus.crm.myaccounts.view.S2": {
					viewName: "cus.crm.myaccounts.CRM_MYACCOUNTSExtension.view.S2Custom",
					type: "XML"
				},
				"cus.crm.myaccounts.view.maintain.GeneralDataEdit": {
					viewName: "cus.crm.myaccounts.CRM_MYACCOUNTSExtension.view.maintain.GeneralDataEditCustom",
					type: "XML"
				}
			},
			"sap.ui.controllerExtensions": {
				"cus.crm.myaccounts.view.S2": {
					controllerName: "cus.crm.myaccounts.CRM_MYACCOUNTSExtension.view.S2Custom"
				},
				"cus.crm.myaccounts.view.maintain.GeneralDataEdit": {
					controllerName: "cus.crm.myaccounts.CRM_MYACCOUNTSExtension.view.maintain.GeneralDataEditCustom"
				}
			}
		}
	}
});