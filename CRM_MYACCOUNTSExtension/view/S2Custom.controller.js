/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.require("cus.crm.myaccounts.controller.Base360Controller");
jQuery.sap.require("sap.ca.ui.quickoverview.EmployeeLaunch");
jQuery.sap.require("cus.crm.myaccounts.util.formatter");
jQuery.sap.require("sap.ca.ui.model.format.AmountFormat");
jQuery.sap.require("cus.crm.myaccounts.util.Constants");
jQuery.sap.require("cus.crm.myaccounts.util.Util");
sap.ui.controller("cus.crm.myaccounts.CRM_MYACCOUNTSExtension.view.S2Custom", {
	onInit: function() {
		//		if (cus.crm.myaccounts.view.overview && cus.crm.myaccounts.view.overview.OverviewPage.storage) cus.crm.myaccounts.view.overview.OverviewPage
		//			.storage = null;
		//		cus.crm.myaccounts.controller.Base360Controller.prototype.onInit.call(this);
		//		this.resourceBundle = this.oApplicationFacade.getResourceBundle();
		//		var m = new sap.ui.model.json.JSONModel({
		//			isRefreshing: false,
		//			searchValue: "",
		//			selectedKey: "MyAccount",
		//			threshold: this.getThreshold(),
		//			items: [{
		//				text: this.resourceBundle.getText("MY_ACCOUNT"),
		//				key: "MyAccount"
		//			}, {
		//				text: this.resourceBundle.getText("MY_INDIVIDUAL_ACCOUNTS"),
		//				key: "MyIndividual"
		//			}, {
		//				text: this.resourceBundle.getText("MY_CORPORATE_ACCOUNTS"),
		//				key: "MyCorporate"
		//			}, {
		//				text: this.resourceBundle.getText("MY_ACCOUNT_GROUPS"),
		//				key: "MyGroup"
		//			}, {
		//				text: this.resourceBundle.getText("ALL_ACCOUNTS"),
		//				key: "All"
		//			}, {
		//				text: this.resourceBundle.getText("ALL_INDIVIDUAL_ACCOUNTS"),
		//				key: "AllIndividual"
		//			}, {
		//				text: this.resourceBundle.getText("ALL_CORPORATE_ACCOUNTS"),
		//				key: "AllCorporate"
		//			}, {
		//				text: this.resourceBundle.getText("ALL_ACCOUNT_GROUPS"),
		//				key: "AllGroup"
		//			}]
		//		});
		//		var M = this.getView().getModel();
		//		M.forceNoCache(true);
		//		this.getView().setModel(m, "config");
		//		this.oRouter.attachRouteMatched(this.handleNavTo, this);
		//		this.backendSupportsCreate = cus.crm.myaccounts.util.Util.getServiceSchemaVersion(M, "AccountCollection") > 0
	},
	onAddAccount: function(oEvent) {
		// debugger;
		//	this.oRouter.navTo("addAccount") ;              
		this.oRouter.navTo("new", {
			accountCategory: "2"
		});
	}

	//	onExit: function() {
	//		if (this.oCreateAccountActionSheet) {
	//			this.oCreateAccountActionSheet.destroy();
	//			this.oCreateAccountActionSheet = null
	//		}
	//	},
	//	destroy: function() {
	//		var b = this.getTargetBinding();
	//		b.detachChange(this._fnOnBindingChange)
	//	},
	// 	handleNavTo: function(e) {
	// 	    debugger;
	// 		if (e.getParameter("name") === "mainPage") {
	// 			var a = e.getParameter("arguments");
	// 			this.getView().getModel('config').setProperty("/selectedKey", a.filterState);
	// 		}
	// 		if (e.getParameter("name") === "S2" || e.getParameter("name") === "mainPage") {
	// 			jQuery.sap.log.info("My accounts nav to " + e.getParameter("name"));
	// 			jQuery.sap.delayedCall(2000, this, function() {
	// 				this.byId("myPullToRefresh").hide();
	// 			});
	// 			this._bindGrowingTileContainer();
	// 			this.setHeaderFooterOptions(this._getHeaderFooterOptions());
	// 		}
	// 	}
	//	_bindGrowingTileContainer: function() {
	//		if (!this.getView().byId("myOverviewTile")) return;
	//		var g = this.getControl(),
	//			b;
	//		if (!this.getTargetBinding()) {
	//			g.setGrowingThreshold(this.getThreshold()).setGrowing(true);
	//			g.bindAggregation("content", {
	//				path: '/AccountCollection',
	//				filters: this._getFilters(),
	//				parameters: {
	//					expand: 'MainContact,Classification,MainAddress,Logo,AccountFactsheet',
	//					select: '*,MainContact,Classification,MainAddress,Logo,AccountFactsheet/opportunityVolume,AccountFactsheet/revenueCurrentYear,AccountFactsheet/lastContact,AccountFactsheet/nextContact'
	//				},
	//				template: this.getView().byId("myOverviewTile").clone(),
	//			});
	//			this._fnOnBindingChange = jQuery.proxy(this.onBindingChange, this);
	//			b = this.getTargetBinding();
	//			b.attachChange(this._fnOnBindingChange)
	//		}
	//	},
	//	getControl: function() {
	//		return this._getTileContainer()
	//	},
	//	getTargetAggregation: function() {
	//		return "content"
	//	},
	//	_getTileContainer: function() {
	//		return this.byId("tileContainer")
	//	},
	//	_isMyAccount: function() {
	//		var k = this.getView().getModel('config').getProperty("/selectedKey");
	//		return ((k === "MyAccount") || (k === "MyIndividual") || (k === "MyCorporate") || (k === "MyGroup")) ? true : false
	//	},
	//	isBackendSearch: function() {
	//		return true
	//	},
	//	applyBackendSearchPattern: function(f, b) {
	//		var a = this._getFilters(),
	//			b = this.getControl().getBinding(this.getTargetAggregation());
	//		b.aApplicationFilters = [];
	//		b.filter(a)
	//	},
	//	onTileTap: function(e) {
	//		this.oRouter.navTo("detail", {
	//			contextPath: e.getSource().getBindingContext().sPath.replace('/', "")
	//		})
	//	},
	//	openBusinessCard: function(e) {
	//		var E = {};
	//		if (e) {
	//			var s = e.oSource;
	//			if (s) {
	//				var c = s.getBindingContext();
	//				if (c) {
	//					E = {
	//						name: c.getProperty("MainContact/fullName"),
	//						imgurl: this.photoUrlFormatter(c.getProperty("MainContact/Photo/__metadata/media_src")),
	//						department: c.getProperty("MainContact/department"),
	//						mobilephone: c.getProperty("MainContact/WorkAddress/mobilePhone"),
	//						officephone: c.getProperty("MainContact/WorkAddress/phone"),
	//						email: c.getProperty("MainContact/WorkAddress/email"),
	//						companyname: c.getProperty("MainContact/company"),
	//						companyaddress: c.getProperty("MainContact/WorkAddress/address")
	//					};
	//					var o = new sap.ca.ui.quickoverview.EmployeeLaunch(E);
	//					o.openBy(e.getParameters())
	//				}
	//			}
	//		}
	//	},
	//	photoUrlFormatter: function(m) {
	//		if (m) {
	//			return cus.crm.myaccounts.util.formatter.getRelativePathFromURL(m)
	//		} else {
	//			return "sap-icon://person-placeholder"
	//		}
	//	},
	//	_getHeaderFooterOptions: function() {
	//		var c = this;
	//		var b = [];
	//		if (this.backendSupportsCreate) {
	//			b.push({
	//				sIcon: "sap-icon://add",
	//				onBtnPressed: function(e) {
	//					c._addAccount(e)
	//				}
	//			})
	//		}
	//		var f = "";
	//		if (this._oControlStore && this._oControlStore.oTitle) {
	//			f = this._oControlStore.oTitle.getText()
	//		}
	//		return {
	//			sFullscreenTitle: f,
	//			aAdditionalSettingButtons: [],
	//			buttonList: b,
	//			oFilterOptions: {
	//				aFilterItems: this.getView().getModel('config').getProperty("/items"),
	//				sSelectedItemKey: this.getView().getModel('config').getProperty("/selectedKey"),
	//				onFilterSelected: function(s) {
	//					jQuery.sap.log.info(s + " has been selected");
	//					c.getView().getModel('config').setProperty("/selectedKey", s);
	//					c.handleFilter()
	//				}
	//			},
	//			oAddBookmarkSettings: {
	//				icon: "sap-icon://Fiori2/F0002"
	//			}
	//		}
	//	},
	//	_addAccount: function(e) {
	//		var t = this;
	//		var c = this._getPossibleAccountCategories();
	//		var b = [];
	//		for (var i in c) {
	//			switch (c[i]) {
	//				case cus.crm.myaccounts.util.Constants.accountCategoryCompany:
	//					b.push(new sap.m.Button({
	//						text: this.resourceBundle.getText("CORPORATE_ACCOUNT"),
	//						press: function() {
	//							t._navigateToCreateScreen(cus.crm.myaccounts.util.Constants.accountCategoryCompany)
	//						}
	//					}));
	//					break;
	//				case cus.crm.myaccounts.util.Constants.accountCategoryPerson:
	//					b.push(new sap.m.Button({
	//						text: this.resourceBundle.getText("INDIVIDUAL_ACCOUNT"),
	//						press: function() {
	//							t._navigateToCreateScreen(cus.crm.myaccounts.util.Constants.accountCategoryPerson)
	//						}
	//					}));
	//					break;
	//				case cus.crm.myaccounts.util.Constants.accountCategoryGroup:
	//					b.push(new sap.m.Button({
	//						text: this.resourceBundle.getText("ACCOUNT_GROUP"),
	//						press: function() {
	//							t._navigateToCreateScreen(cus.crm.myaccounts.util.Constants.accountCategoryGroup)
	//						}
	//					}));
	//					break
	//			}
	//		}
	//		if (!this.oCreateAccountActionSheet) {
	//			this.oCreateAccountActionSheet = new sap.m.ActionSheet("AddAccountActionSheet", {
	//				buttons: b,
	//				placement: sap.m.PlacementType.Top,
	//			})
	//		}
	//		this.oCreateAccountActionSheet.openBy(e.getSource())
	//	},
	//	_getPossibleAccountCategories: function() {
	//		return [cus.crm.myaccounts.util.Constants.accountCategoryCompany, cus.crm.myaccounts.util.Constants.accountCategoryPerson, cus.crm.myaccounts
	//			.util.Constants.accountCategoryGroup]
	//	},
	//	_navigateToCreateScreen: function(a) {
	//		var p;
	//		p = {
	//			accountCategory: a,
	//		};
	//		this.oRouter.navTo("new", p, false)
	//	},
	//	handleFilter: function() {
	//		var f = this._getFilters(),
	//			l = this.getTargetBinding();
	//		l.aApplicationFilters = [];
	//		l.filter(f);
	//		this._setFilterInURL()
	//	},
	//	_setFilterInURL: function() {
	//		var p = {};
	//		p.filterState = this.getView().getModel('config').getProperty("/selectedKey");
	//		this.oRouter.navTo("mainPage", p, true)
	//	},
	//	_getFilters: function() {
	//		var f = [],
	//			v = this.getView().getModel("config").getProperty("/searchValue"),
	//			i = this._isMyAccount(),
	//			s = this.getView().getModel("config").getProperty("/selectedKey");
	//		if (v && v.length > 0) {
	//			f.push(new sap.ui.model.Filter("name1", sap.ui.model.FilterOperator.Contains, v))
	//		}
	//		f.push(new sap.ui.model.Filter("isMyAccount", sap.ui.model.FilterOperator.EQ, i));
	//		switch (s) {
	//			case "MyIndividual":
	//			case "AllIndividual":
	//				f.push(new sap.ui.model.Filter("category", sap.ui.model.FilterOperator.EQ, '1'));
	//				break;
	//			case "MyCorporate":
	//			case "AllCorporate":
	//				f.push(new sap.ui.model.Filter("category", sap.ui.model.FilterOperator.EQ, '2'));
	//				break;
	//			case "MyGroup":
	//			case "AllGroup":
	//				f.push(new sap.ui.model.Filter("category", sap.ui.model.FilterOperator.EQ, '3'));
	//				break
	//		}
	//		return f
	//	},
	//	refreshList: function(e) {
	//		jQuery.sap.delayedCall(2000, this, function() {
	//			this.byId("myPullToRefresh").hide()
	//		});
	//		var c = this.getControl(),
	//			i = this.getView().getModel("config").getProperty("/isRefreshing"),
	//			b = c.getBinding(this.getTargetAggregation()),
	//			r = jQuery.proxy(function() {
	//				this.getView().getModel("config").setProperty("/isRefreshing", false);
	//				b.detachDataReceived(r);
	//				sap.ca.ui.utils.busydialog.releaseBusyDialog()
	//			}, this),
	//			R = jQuery.proxy(function() {
	//				this.getView().getModel("config").setProperty("/isRefreshing", true);
	//				sap.ca.ui.utils.busydialog.requireBusyDialog();
	//				b.detachDataRequested(R)
	//			}, this),
	//			v;
	//		b.attachDataRequested(R);
	//		b.attachDataReceived(r);
	//		if (this.isBackendSearch() && !i) {
	//			v = this.getView().getModel("config").getProperty("/searchValue");
	//			this.applyBackendSearchPattern(v, b)
	//		}
	//	},
	//	onBindingChange: function() {
	//		var t = undefined,
	//			s = this.getView().getModel("config").getProperty("/selectedKey");
	//		switch (s) {
	//			case "MyAccount":
	//				t = "MY_ACCOUNT_TITLE";
	//				break;
	//			case "MyIndividual":
	//				t = "MY_INDIVIDUAL_ACCOUNT_TITLE";
	//				break;
	//			case "MyCorporate":
	//				t = "MY_CORPORATE_ACCOUNT_TITLE";
	//				break;
	//			case "MyGroup":
	//				t = "MY_ACCOUNT_GROUP_TITLE";
	//				break;
	//			case "All":
	//				t = "ALL_ACCOUNTS_TITLE";
	//				break;
	//			case "AllIndividual":
	//				t = "ALL_INDIVIDUAL_ACCOUNTS_TITLE";
	//				break;
	//			case "AllCorporate":
	//				t = "ALL_CORPORATE_ACCOUNTS_TITLE";
	//				break;
	//			case "AllGroup":
	//				t = "ALL_ACCOUNT_GROUPS_TITLE";
	//				break
	//		}
	//		var i = t,
	//			c = 0,
	//			b = this.getTargetBinding();
	//		if (b) {
	//			c = b.getLength()
	//		}
	//		if (c > 0) this._oControlStore.oTitle.setText(this.resourceBundle.getText(i, c));
	//		else this._oControlStore.oTitle.setText(this.resourceBundle.getText(i, "0"))
	//	},
	//	getThreshold: function() {
	//		if (jQuery.device.is.phone) {
	//			return 3
	//		} else {
	//			return 10
	//		}
	//	}
	//
});