/*
 * Copyright (C) 2009-2014 SAP SE or an SAP affiliate company. All rights reserved
 */
jQuery.sap.require("sap.ca.scfld.md.controller.BaseFullscreenController");
jQuery.sap.require("cus.crm.myaccounts.util.Util");
jQuery.sap.require("cus.crm.myaccounts.util.formatter");
jQuery.sap.require("cus.crm.myaccounts.util.Constants");
jQuery.sap.require("sap.m.MessageToast");
jQuery.sap.require("sap.m.MessageBox");
sap.ui.controller("cus.crm.myaccounts.CRM_MYACCOUNTSExtension.view.maintain.GeneralDataEditCustom", {
	onInit: function() {
		//		this.liveChangeTimer = 0;
		//		this.editMode = true;
		//		this.oDataModel = null;
		//		this.valueHelpEmployeeResponsible = null;
		//		this.valueHelpCountry = null;
		//		this.valueHelpRegion = null;
		//		this.countryIDUsedForRegion = undefined;
		//		this.countryIDUsedForRegionSuggestion = undefined;
		//		this.customizingModel = new sap.ui.model.json.JSONModel({
		//			TitleCustomizing: [],
		//			AcademicTitleCustomizing: [],
		//			RatingCustomizing: [],
		//			DefaultEmployeeResponsible: []
		//		});
		//		this.getView().setModel(this.customizingModel, "Customizing");
		//		if (!this.oDataModel) this.oDataModel = this.getView().getModel();
		//		var c = new sap.ui.model.json.JSONModel(cus.crm.myaccounts.util.Constants);
		//		this.getView().setModel(c, "constants");
				// this._readCustomizing(function() {
				// 	this._refreshDropDownBoxes();
				// 	this._setDefaultEmployeeResponsible()
				// });
		this.oRouter.attachRouteMatched(function(e) {
			//			if (e.getParameter("name") === "edit") {
			//				this.editMode = true;
			//				this._cleanUp();
			//				var a = e.getParameter("arguments");
			//				var m = this.oDataModel;
			//				this.getView().setModel(m);
			//				var b = "/" + a.contextPath;
			//				var C = m.getContext(b);
			//				this.getView().setBindingContext(C);
			//				var t = this;
			//				if (!C.getObject()) {
			//					m.createBindingContext(b, "", {
			//						expand: this._getExpandForDataBinding()
			//					}, function() {
			//						var C = t.getView().getBindingContext();
			//						var m = t.getView().getModel();
			//						var f = m.getProperty(C.sPath + "/MainAddress/countryID");
			//						if (f && f != "") t._setAddressFieldsEnabled(true, false);
			//						else t._setAddressFieldsEnabled(false, false)
			//					}, true)
			//				} else {
			//					this._toggleAddressFields()
			//				}
			//			}
			if (e.getParameter("name") === "new") {
				this.editMode = false;
				this._cleanUp();
				var d = e.getParameter("arguments").accountCategory;
				// if (d != cus.crm.myaccounts.util.Constants.accountCategoryPerson && d != cus.crm.myaccounts.util.Constants.accountCategoryCompany &&
				// 	d != cus.crm.myaccounts.util.Constants.accountCategoryGroup) d = cus.crm.myaccounts.util.Constants.accountCategoryCompany;
				// this._setEmptyScreen(d);
				this._enableAddressFields();
			}
		}, this);
	},
	_enableAddressFields: function() {
		this._setAddressFieldsEnabled(true, true);
	},
	//	_setEmptyScreen: function(a) {
	//		var A = this._getTemplateForAccount(a);
	//		var d = this._getDependentRelations();
	//		for (var i in d) {
	//			A[d[i]] = this._getTemplateForDependentObject(d[i])
	//		}
	//		var n = new sap.ui.model.json.JSONModel({
	//			NewAccount: A
	//		});
	//		n.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
	//		this.getView().setModel(n);
	//		this.getView().setBindingContext(n.getContext("/NewAccount"));
	//		this._setDefaultEmployeeResponsible()
	//	},
	//	_getExpandForDataBinding: function() {
	//		var e = 'Logo';
	//		var d = this._getDependentRelations();
	//		for (var i in d) {
	//			e = e + "," + d[i]
	//		}
	//		return e
	//	},
	//	_getDependentRelations: function() {
	//		var d = ["MainAddress", "Classification", "EmployeeResponsibleRel", "EmployeeResponsible"];
	//		var D = [];
	//		if (this.extHookGetDependentCustomRelations) D = this.extHookGetDependentCustomRelations();
	//		for (var i in D) {
	//			d.push(D[i])
	//		}
	//		return d
	//	},
	//	_getTemplateForAccount: function(a) {
	//		var A = this._generateTemplateUsingMetadata("AccountCollection");
	//		A.isMyAccount = false;
	//		A.category = a;
	//		if (A.birthDate == "") A.birthDate = null;
	//		return A
	//	},
	//	_getTemplateForDependentObject: function(r) {
	//		switch (r) {
	//			case "EmployeeResponsibleRel":
	//				{
	//					var R = this._generateTemplateUsingMetadata("AccountCollection/" + r);
	//					R.main = true;
	//					R.relationshipCategory = 'BUR011';
	//					return R
	//				}
	//			default:
	//				return this._generateTemplateUsingMetadata("AccountCollection/" + r);
	//				break
	//		}
	//	},
	//	_generateTemplateUsingMetadata: function(p) {
	//		var e = this.oDataModel.oMetadata._getEntityTypeByPath(p);
	//		var t = {};
	//		for (var i in e.property) {
	//			t[e.property[i].name] = ""
	//		}
	//		return t
	//	},
	//	_objectKeyIsInitial: function(o, p) {
	//		var e = this.oDataModel.oMetadata._getEntityTypeByPath(p);
	//		for (var i in e.key.propertyRef)
	//			if (o[e.key.propertyRef[i].name] != "") return false;
	//		return true
	//	},
		_fillNewObject: function(s, t, f, a) {
			var c = false;
			var i = "";
			for (var k in s) {
				if (a) i = this.getView().getId() + "--" + a + "--" + f + k + "Input";
				else i = this.getView().getId() + "--" + f + k + "Input"; if (typeof s[k] != "object" || k == "birthDate") t[k] = s[k];
				var I = this.byId(i);
				if (I) {
					var n = "";
					if (I.getDateValue) {
						n = I.getValue();
						if (n == "") {
							n = null
						} else {
							var d = sap.ui.core.format.DateFormat.getDateInstance({
								style: "medium"
							});
							var D = d.parse(n);
							if (D) {
								var N = new Date();
								N.setUTCFullYear(D.getFullYear());
								N.setUTCDate(D.getDate());
								N.setUTCMonth(D.getMonth());
								N.setUTCHours(0);
								N.setUTCMinutes(0);
								N.setUTCSeconds(0);
								N.setUTCMilliseconds(0);
								n = N
							} else {
								n = null
							}
						}
					} else if (I.getSelectedKey) n = I.getSelectedKey();
					else if (I.getValue) n = I.getValue();
					if (n && n.getTime) {
						if (!t[k] || n.getTime() != t[k].getTime()) {
							c = true;
							t[k] = n
						}
					} else if (t[k] != n) {
						c = true;
						t[k] = n
					}
				}
			}
			return c
		},
	//	_onAfterSave: function(r) {
	//		this._setBusy(false);
	//		if (this.editMode) window.history.back();
	//		else this.oRouter.navTo("detail", {
	//			contextPath: "AccountCollection('" + r.accountID + "')"
	//		}, true)
	//	},
		onSaveButtonPressed: function(e) {
			if (!this.byId('MainAddress.countryInput').getValue()) {
				this._setAddressFieldsEnabled(false, true)
			}
			if (!this._checkSavePossible()) return;
			if (!this._checkSaveNeeded()) {
				this.onCancelButtonPressed();
				return
			}
			this._setBusy(true);
			var m = this.getView().getModel();
			var a = this.getView().getBindingContext();
			var A = a.getObject();
			var n = {};
			var c = false,
				b = false,
				d = false;
			c = this._fillNewObject(A, n, "");
			if (A.category == cus.crm.myaccounts.util.Constants.accountCategoryPerson) b = this._fillNewObject(n, n, "", "personFragment");
			if (A.category != cus.crm.myaccounts.util.Constants.accountCategoryPerson) b = this._fillNewObject(n, n, "", "companyFragment");
			if (b) c = b;
			d = this._changesForDependentRelationsExists("saveMode");
			if (!c && !d) return;
			var B, r;
			var f = [];
			if (this.editMode) {
				if (c) {
					r = a.sPath;
					B = m.createBatchOperation(r, "PUT", n);
					f.push(B)
				}
				if (d) {
					this._createBatchOperationForDependentRelations(f)
				}
				var R = cus.crm.myaccounts.util.Util.getRefreshUIObject(m, a.sPath, this._getExpandForDataBinding());
				this._submitBatchOperation(f, function() {
					R.refresh();
					this._onAfterSave()
				}, function() {
					R.destroy();
					this._setBusy(false)
				})
			} else {
			    debugger;
				r = "/AccountCollection";
				n = {};
				n.fullName = "Text";
				n.name1 = "irgendwas";
				n.category = "2";
				var addressArray = [];
				var address = {};
				address.email = "m.bartsch@erco.com";
				addressArray.push(address);
				n.Addresses = addressArray;
				debugger;
				this.oDataModel.create("/Account", n, null, function(){
				    
				    alert("success");
				});
				B = this.oDataModel.createBatchOperation(r, "POST", n);
				if (d) {
					this._adaptAccountWithDependentRelationsBeforeCreate(n)
				}
				f.push(B);
				this._submitBatchOperation(f, this._onAfterSave, function() {
					this._setBusy(false)
				})
			}
		},
	//	_adaptAccountWithDependentRelationsBeforeCreate: function(n) {
	//		var d = this._getDependentRelations();
	//		for (var i in d) {
	//			var D = this._getTemplateForDependentObject(d[i]);
	//			var N = {};
	//			var c = this._fillNewObject(D, N, d[i] + ".");
	//			if (c) n[d[i]] = N
	//		}
	//	},
	//	_createBatchOperationForDependentRelations: function(b) {
	//		var m = this.getView().getModel();
	//		var a = this.getView().getBindingContext();
	//		var A = a.getObject();
	//		var d = this._getDependentRelations();
	//		for (var i in d) {
	//			var D = m.getProperty(a + "/" + d[i]);
	//			var o = null;
	//			if (D) o = m.getContext("/" + A[d[i]]["__ref"]);
	//			var n = {};
	//			var c = false;
	//			var e = false;
	//			if (!D || this._objectKeyIsInitial(D, "AccountCollection/" + d[i])) {
	//				e = true;
	//				D = this._getTemplateForDependentObject(d[i]);
	//				if (D.accountID != null && D.accountID != undefined) D.accountID = A.accountID
	//			}
	//			c = this._fillNewObject(D, n, d[i] + ".");
	//			var B, r;
	//			if (c) {
	//				var h;
	//				if (e) {
	//					h = "POST";
	//					var E = this.oDataModel.oMetadata._getEntityTypeByPath("AccountCollection/" + d[i]);
	//					r = E.name + "Collection"
	//				} else {
	//					h = "PUT";
	//					r = o.sPath
	//				}
	//				B = m.createBatchOperation(r, h, n);
	//				b.push(B)
	//			}
	//		}
	//	},
	//	_changesForDependentRelationsExists: function(s) {
	//		var m = this.oDataModel;
	//		var a = this.getView().getBindingContext();
	//		var c = false;
	//		var d = this._getDependentRelations();
	//		for (var i in d) {
	//			var D = m.getProperty(a + "/" + d[i]);
	//			if (!s) D = a.getProperty(d[i]);
	//			if (!D) D = this._getTemplateForDependentObject(d[i]);
	//			var n = {};
	//			c = this._fillNewObject(D, n, d[i] + ".");
	//			if (c) return c
	//		}
	//		return c
	//	},
	//	_submitBatchOperation: function(b, c, a) {
	//		var m = this.oDataModel;
	//		m.clearBatch();
	//		m.addBatchChangeOperations(b);
	//		var t = this;
	//		m.submitBatch(jQuery.proxy(function(d) {
	//			var e = null;
	//			var B = d.__batchResponses;
	//			var r = null;
	//			for (var i = 0; i < B.length; i++) {
	//				if (B[i].response) {
	//					e = jQuery.parseJSON(B[i].response.body).error.message.value
	//				}
	//				if (B[i].__changeResponses && B[i].__changeResponses.length > 0 && B[i].__changeResponses[0].statusCode == 201) {
	//					r = B[i].__changeResponses[0].data
	//				}
	//			}
	//			if (!e) {
	//				if (this.editMode) sap.m.MessageToast.show(cus.crm.myaccounts.util.Util.geti18NText("MSG_UPDATE_SUCCESS"));
	//				else sap.m.MessageToast.show(cus.crm.myaccounts.util.Util.geti18NText("MSG_CREATION_SUCCESS")); if (c) c.call(t, r)
	//			} else {
	//				sap.m.MessageBox.alert(e);
	//				if (a) a.call(t)
	//			}
	//		}, this), jQuery.proxy(function() {
	//			if (this.editMode) sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText("MSG_UPDATE_ERROR"));
	//			else sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText("MSG_CREATION_ERROR")); if (a) a.call(t)
	//		}, this), true)
	//	},
	//	onCancelButtonPressed: function() {
	//		if (!this._checkSaveNeeded()) {
	//			window.history.back();
	//			return
	//		}
	//		sap.m.MessageBox.confirm(cus.crm.myaccounts.util.Util.geti18NText("MSG_CONFIRM_CANCEL"), jQuery.proxy(function(c) {
	//			if (c === "OK") {
	//				window.history.back()
	//			}
	//		}, this))
	//	},
	//	onInputFieldChanged: function(e) {},
	//	_checkSavePossible: function() {
	//		var i, c, a, r, b, e, d, u;
	//		i = this.getView().byId("MainAddress.countryIDInput");
	//		if (i) c = i.getValue();
	//		i = this.getView().byId("MainAddress.countryInput");
	//		if (i) a = i.getValue();
	//		if (a && !c) {
	//			sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText1("MSG_WRONG_COUNTRY_ERROR", a));
	//			return false
	//		}
	//		i = this.getView().byId("MainAddress.regionIDInput");
	//		if (i) r = i.getValue();
	//		i = this.getView().byId("MainAddress.regionInput");
	//		if (i) b = i.getValue();
	//		if (b && !r) {
	//			sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText1("MSG_WRONG_REGION_ERROR", b));
	//			return false
	//		}
	//		i = this.getView().byId("EmployeeResponsibleRel.account2IDInput");
	//		if (i) e = i.getValue();
	//		i = this.getView().byId("EmployeeResponsibleRel.account2FullNameInput");
	//		if (i) d = i.getValue();
	//		if (d && !e) {
	//			sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText1("MSG_WRONG_EMPLOYEE_ERROR", d));
	//			return false
	//		}
	//		i = this.getView().byId("MainAddress.websiteInput");
	//		if (i) {
	//			u = i.getValue();
	//			if (!jQuery.sap.validateUrl(u)) {
	//				sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText1("MSG_WRONG_URL_ERROR", u));
	//				return false
	//			}
	//		}
	//		var A = this.getView().getBindingContext().getObject();
	//		if (A.category == cus.crm.myaccounts.util.Constants.accountCategoryPerson) {
	//			if (this.byId(sap.ui.core.Fragment.createId("personFragment", "name1Input")).getValue().length == 0) {
	//				sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText("MSG_MANDATORY_FIELDS"));
	//				return false
	//			}
	//		} else {
	//			if (this.byId(sap.ui.core.Fragment.createId("companyFragment", "name1Input")).getValue().length == 0) {
	//				sap.m.MessageBox.alert(cus.crm.myaccounts.util.Util.geti18NText("MSG_MANDATORY_FIELDS"));
	//				return false
	//			}
	//		}
	//		return true
	//	},
	//	_checkSaveNeeded: function() {
	//		var a = this.getView().getBindingContext();
	//		var A = a.getObject();
	//		var n = {};
	//		var c = false,
	//			b = false;
	//		c = this._fillNewObject(A, n, "");
	//		if (c) return true;
	//		if (A.category == cus.crm.myaccounts.util.Constants.accountCategoryPerson) c = this._fillNewObject(n, n, "", "personFragment");
	//		if (A.category != cus.crm.myaccounts.util.Constants.accountCategoryPerson) c = this._fillNewObject(n, n, "", "companyFragment");
	//		if (c) return true;
	//		b = this._changesForDependentRelationsExists();
	//		if (!b) return false;
	//		else return true
	//	},
	//	_cleanUp: function() {
	//		this.getView().setModel(null);
	//		this.setBtnEnabled("saveButton", true)
	//	},
	//	_setBusy: function(b) {
	//		if (!this.oBusyDialog) this.oBusyDialog = new sap.m.BusyDialog();
	//		if (b) {
	//			this.setBtnEnabled("saveButton", !b);
	//			this.setBtnEnabled("cancelButton", !b);
	//			this.oBusyDialog.open()
	//		} else {
	//			this.setBtnEnabled("saveButton", !b);
	//			this.setBtnEnabled("cancelButton", !b);
	//			this.oBusyDialog.close()
	//		}
	//	},
	//	_setCountry: function(c, a) {
	//		var b = this.getView().byId("MainAddress.countryInput");
	//		var d = this.getView().byId("MainAddress.countryIDInput");
	//		var o = d.getValue();
	//		if (o != c) {
	//			this._setRegion("", "")
	//		}
	//		if (b) b.setValue(a);
	//		if (d) d.setValue(c);
	//		this._toggleAddressFields()
	//	},
	//	_readCountries: function(c) {
	//		var t = this;
	//		this.valueHelpCountry.setModel(new sap.ui.model.json.JSONModel({
	//			CountryCustomizing: []
	//		}));
	//		this.oDataModel.read("/CountryCustomizing", null, undefined, true, function(d, r) {
	//			var a = jQuery.parseJSON(JSON.stringify(d));
	//			t.valueHelpCountry.setModel(new sap.ui.model.json.JSONModel({
	//				CountryCustomizing: a.results
	//			}));
	//			if (c) c.call(t)
	//		}, function(e) {
	//			jQuery.sap.log.error("Read failed in GeneralDateEdit->_readCountries:" + e.response.body)
	//		})
	//	},
	//	_setRegion: function(r, a) {
	//		var b = this.getView().byId("MainAddress.regionInput");
	//		if (b) b.setValue(a);
	//		var c = this.getView().byId("MainAddress.regionIDInput");
	//		if (c) c.setValue(r)
	//	},
	//	_readRegions: function(c) {
	//		var t = this;
	//		var a = this.getView().byId("MainAddress.countryIDInput").getValue();
	//		if (!t.aRegionCallback) t.aRegionCallback = [];
	//		if (t.regionReadRunning && c) {
	//			t.aRegionCallback.push(c);
	//			return
	//		}
	//		if (this.countryIDUsedForRegion == a) {
	//			if (c) c.call(t);
	//			return
	//		}
	//		if (c) t.aRegionCallback.push(c);
	//		t.regionReadRunning = true;
	//		this.countryIDUsedForRegion = a;
	//		this.valueHelpRegion.setModel(new sap.ui.model.json.JSONModel({
	//			RegionCustomizing: []
	//		}));
	//		this.oDataModel.read("/RegionCustomizing", null, ["countryID='" + a + "'"], true, function(d, r) {
	//			var b = jQuery.parseJSON(JSON.stringify(d));
	//			t.valueHelpRegion.setModel(new sap.ui.model.json.JSONModel({
	//				RegionCustomizing: b.results
	//			}));
	//			t.regionReadRunning = false;
	//			for (var i in t.aRegionCallback) t.aRegionCallback[i].call(t)
	//		}, function(e) {
	//			jQuery.sap.log.error("Read failed in GeneralDateEdit->_readRegions: " + e.response.body);
	//			t.regionReadRunning = false
	//		})
	//	},
	// 	_toggleAddressFields: function() {
	// 		var c = this.getView().byId("MainAddress.countryIDInput").getValue();
	// 		if (c && c != "") this._setAddressFieldsEnabled(true, false);
	// 		else this._setAddressFieldsEnabled(false, false);
	// 	},
	// 	_setAddressFieldsEnabled: function(e, a) {
	// 		var A = this.getView().byId("editFormAddress");
	// 		if (!A) return;
	// 		var f = A.getFormElements();
	// 		var v = this.getView().getId();
	// 		for (var i in f) {
	// 			var F = f[i].getFields();
	// 			for (var z in F) {
	// 				var r = new RegExp(v + "--MainAddress.[A-z0-9]+Input", "g");
	// 				var b = F[z].getId();
	// 				if (b == v + "--MainAddress.countryInput") continue;
	// 				if (r.test(b)) {
	// 					F[z].setEnabled(e);
	// 					if (a) F[z].setValue("")
	// 				}
	// 			}
	// 		}
	// 	},
	//	_setEmployeeResponsible: function(e, a) {
	//		var b = this.getView().byId("EmployeeResponsibleRel.account2FullNameInput");
	//		if (b) b.setValue(a);
	//		var c = this.getView().byId("EmployeeResponsibleRel.account2IDInput");
	//		if (c) c.setValue(e)
	//	},
	//	onEmployeeResponsibleValueHelpSelected: function(e) {
	//		if (!this.valueHelpEmployeeResponsible) {
	//			this.valueHelpEmployeeResponsible = sap.ui.xmlfragment("cus.crm.myaccounts.view.maintain.ValueHelpEmployeeResponsible", this);
	//			this.valueHelpEmployeeResponsible.setModel(this.getView().getModel("i18n"), "i18n");
	//			this.valueHelpEmployeeResponsible.setModel(this.oDataModel)
	//		} else {
	//			this.valueHelpEmployeeResponsible.setModel(this.oDataModel)
	//		}
	//		this.valueHelpEmployeeResponsible.open()
	//	},
	//	onEmployeeResponsibleValueHelpClose: function(e) {
	//		var s = e.getParameter("selectedItem");
	//		if (s) {
	//			var S = s.getBindingContext().getObject();
	//			this._setEmployeeResponsible(S.employeeID, S.fullName)
	//		}
	//		if (e.getSource().getBinding("items").aFilters.length) {
	//			e.getSource().destroyItems();
	//			this.valueHelpEmployeeResponsible.setModel(null)
	//		}
	//	},
	//	onEmployeeResponsibleValueHelpSearch: function(e) {
	//		var s = e.getParameter("value");
	//		var f = new sap.ui.model.Filter("fullName", sap.ui.model.FilterOperator.Contains, s);
	//		e.getSource().getBinding("items").filter([f])
	//	},
	//	onEmployeeResponsibleValueHelpCancel: function(e) {
	//		if (e.getSource().getBinding("items").aFilters.length) {
	//			e.getSource().destroyItems();
	//			this.valueHelpEmployeeResponsible.setModel(null)
	//		}
	//	},
	//	onEmployeeResponsibleSuggestItemSelected: function(e) {
	//		var I = e.getParameter("selectedItem");
	//		var a = null;
	//		for (var i in I.getCustomData()) {
	//			var c = I.getCustomData()[i];
	//			if (c.getKey() == "employeeID") a = c.getValue()
	//		}
	//		this._setEmployeeResponsible(a, I.getText())
	//	},
	//	onEmployeeResponsibleInputFieldChanged: function(e) {
	//		this.onInputFieldChanged();
	//		var a = e.getSource();
	//		this._setEmployeeResponsible("", a.getValue());
	//		a.removeAllSuggestionItems();
	//		a.setFilterSuggests(false);
	//		var c = function(E) {
	//			for (var i = 0 in E) {
	//				var o = E[i];
	//				if (o.fullName.toUpperCase() == a.getValue().toUpperCase()) {
	//					this._setEmployeeResponsible(o.employeeID, o.fullName)
	//				}
	//				var C = new sap.ui.core.CustomData({
	//					key: "employeeID",
	//					value: o.employeeID
	//				});
	//				var I = new sap.ui.core.Item({
	//					text: o.fullName,
	//					customData: C
	//				});
	//				a.addSuggestionItem(I)
	//			}
	//		};
	//		this._readEmployeeResponsible(a.getValue(), c)
	//	},
	//	_readEmployeeResponsible: function(s, c) {
	//		var t = this;
	//		var d = (s ? 500 : 0);
	//		clearTimeout(this.liveChangeTimer);
	//		if (d) {
	//			this.liveChangeTimer = setTimeout(function() {
	//				t.oDataModel.read("/EmployeeCollection", null, '$top=10&$filter=substringof(%27' + encodeURIComponent(s) + '%27,fullName)', true,
	//					function(D, r) {
	//						var e = jQuery.parseJSON(JSON.stringify(D));
	//						if (c) c.call(t, e.results)
	//					}, function(e) {
	//						jQuery.sap.log.error("Read failed in GeneralDateEdit->_readEmployeeResponsible:" + e.response.body)
	//					})
	//			}, d)
	//		}
	//	},
	//	onCountryValueHelpSelected: function(e) {
	//		if (!this.valueHelpCountry) {
	//			this._createValueHelpCountry();
	//			this._readCountries()
	//		}
	//		this.valueHelpCountry.open()
	//	},
	//	_createValueHelpCountry: function() {
	//		if (!this.valueHelpCountry) {
	//			this.valueHelpCountry = sap.ui.xmlfragment("cus.crm.myaccounts.view.maintain.ValueHelpCountry", this);
	//			this.valueHelpCountry.setModel(this.getView().getModel("i18n"), "i18n")
	//		}
	//	},
	//	onCountryValueHelpSearch: function(e) {
	//		var s = e.getParameter("value");
	//		var f = new sap.ui.model.Filter("country", sap.ui.model.FilterOperator.Contains, s);
	//		e.getSource().getBinding("items").filter([f])
	//	},
	//	onCountryValueHelpClose: function(e) {
	//		var s = e.getParameter("selectedItem");
	//		if (s) {
	//			var S = s.getBindingContext().getObject();
	//			this._setCountry(S.countryID, S.country)
	//		}
	//		e.getSource().getBinding("items").filter([])
	//	},
	//	onCountryValueHelpCancel: function(e) {
	//		e.getSource().getBinding("items").filter([])
	//	},
	//	onRegionValueHelpSelected: function(e) {
	//		if (!this.valueHelpRegion) {
	//			this._createValueHelpRegion()
	//		}
	//		this._readRegions();
	//		this.valueHelpRegion.open()
	//	},
	//	_createValueHelpRegion: function() {
	//		if (!this.valueHelpRegion) {
	//			this.valueHelpRegion = sap.ui.xmlfragment("cus.crm.myaccounts.view.maintain.ValueHelpRegion", this);
	//			this.valueHelpRegion.setModel(this.getView().getModel("i18n"), "i18n")
	//		}
	//	},
	//	onRegionValueHelpSearch: function(e) {
	//		var s = e.getParameter("value");
	//		var f = new sap.ui.model.Filter("region", sap.ui.model.FilterOperator.Contains, s);
	//		e.getSource().getBinding("items").filter([f])
	//	},
	//	onRegionValueHelpClose: function(e) {
	//		var s = e.getParameter("selectedItem");
	//		if (s) {
	//			var S = s.getBindingContext().getObject();
	//			this._setRegion(S.regionID, S.region)
	//		}
	//		e.getSource().getBinding("items").filter([])
	//	},
	//	onRegionValueHelpCancel: function(e) {
	//		e.getSource().getBinding("items").filter([])
	//	},
	//	onCountrySuggest: function(e) {
	//		var c = e.getSource();
	//		var d = function() {
	//			var m = this.valueHelpCountry.getModel();
	//			if (c.getSuggestionItems().length > 0) return;
	//			var C = m.getProperty("/CountryCustomizing");
	//			for (var i = 0 in C) {
	//				var o = C[i];
	//				var a = new sap.ui.core.CustomData({
	//					key: "countryID",
	//					value: o.countryID
	//				});
	//				var I = new sap.ui.core.Item({
	//					text: o.country,
	//					customData: a
	//				});
	//				c.addSuggestionItem(I)
	//			}
	//		};
	//		if (!this.valueHelpCountry) {
	//			this._createValueHelpCountry();
	//			this._readCountries(d)
	//		} else {
	//			d.call(this)
	//		}
	//	},
	//	onCountrySuggestItemSelected: function(e) {
	//		var I = e.getParameter("selectedItem");
	//		var c = null;
	//		for (var i in I.getCustomData()) {
	//			var C = I.getCustomData()[i];
	//			if (C.getKey() == "countryID") c = C.getValue()
	//		}
	//		this._setCountry(c, I.getText())
	//	},
	//	onCountryInputFieldChanged: function(e) {
	//		this.onInputFieldChanged();
	//		var c = e.getSource();
	//		this._setCountry("", c.getValue());
	//		var C = function() {
	//			var m = this.valueHelpCountry.getModel();
	//			var a = m.getProperty("/CountryCustomizing");
	//			for (var i = 0 in a) {
	//				var o = a[i];
	//				if (o.country.toUpperCase() == c.getValue().toUpperCase()) this._setCountry(o.countryID, c.getValue())
	//			}
	//		};
	//		if (!this.valueHelpCountry) {
	//			this._createValueHelpCountry();
	//			this._readCountries(C)
	//		} else {
	//			C.call(this)
	//		}
	//	},
	//	onRegionSuggest: function(e) {
	//		var r = e.getSource();
	//		var d = function() {
	//			if (this.countryIDUsedForRegionSuggestion == this.countryIDUsedForRegion) return;
	//			this.countryIDUsedForRegionSuggestion = this.countryIDUsedForRegion;
	//			var m = this.valueHelpRegion.getModel();
	//			var R = m.getProperty("/RegionCustomizing");
	//			r.removeAllSuggestionItems();
	//			for (var i = 0 in R) {
	//				var o = R[i];
	//				var c = new sap.ui.core.CustomData({
	//					key: "regionID",
	//					value: o.regionID
	//				});
	//				var I = new sap.ui.core.Item({
	//					text: o.region,
	//					customData: c
	//				});
	//				r.addSuggestionItem(I)
	//			}
	//		};
	//		if (!this.valueHelpRegion) this._createValueHelpRegion();
	//		this._readRegions(d)
	//	},
	//	onRegionSuggestItemSelected: function(e) {
	//		var I = e.getParameter("selectedItem");
	//		var r = null;
	//		for (var i in I.getCustomData()) {
	//			var c = I.getCustomData()[i];
	//			if (c.getKey() == "regionID") r = c.getValue()
	//		}
	//		this._setRegion(r, I.getText())
	//	},
	//	onRegionInputFieldChanged: function(e) {
	//		this.onInputFieldChanged();
	//		var r = e.getSource();
	//		this._setRegion("", r.getValue());
	//		var c = function() {
	//			var m = this.valueHelpRegion.getModel();
	//			var R = m.getProperty("/RegionCustomizing");
	//			for (var i = 0 in R) {
	//				var o = R[i];
	//				if (o.region.toUpperCase() == r.getValue().toUpperCase()) {
	//					this._setRegion(o.regionID, r.getValue())
	//				}
	//			}
	//		};
	//		if (!this.valueHelpRegion) {
	//			this._createValueHelpRegion();
	//			this._readRegions(c)
	//		} else {
	//			c.call(this)
	//		}
	//	},
		_readCustomizing: function(c) {
		    debugger;
			var t = this;
			var a = function(r) {
				var A = r["Collection(CRM_BUPA_ODATA.custAcaTitle)"];
				A.unshift({
					title: "",
					titleDescription: ""
				});
				t.customizingModel.setProperty("/AcademicTitleCustomizing", A);
				var T = r["Collection(CRM_BUPA_ODATA.custTitle)"];
				T.unshift({
					title: "",
					titleDescription: "",
					person: "X",
					organization: "X",
					group: "X"
				});
				t.customizingModel.setProperty("/TitleCustomizing", T);
				var R = r["Collection(CRM_BUPA_ODATA.custRating)"];
				R.unshift({
					ratingID: "",
					ratingText: ""
				});
				t.customizingModel.setProperty("/RatingCustomizing", R);
				var d = r["CRM_BUPA_ODATA.Employee"];
				if (d) t.customizingModel.setProperty("/DefaultEmployeeResponsible", d);
				else t.customizingModel.setProperty("/DefaultEmployeeResponsible", {
					fullName: "",
					employeeID: ""
				}); if (c) c.call(t)
			};
			cus.crm.myaccounts.util.Util.sendBatchReadOperations(this.oDataModel, ["TitleCustomizing", "AcademicTitleCustomizing",
				"RatingCustomizing", "DefaultEmployeeResponsible"], a, a)
		},
	//	_refreshDropDownBoxes: function() {
	//		var d = this._getIDForDropDownBoxes();
	//		for (var i in d) {
	//			var D = this.byId(this.getView().getId() + "--" + d[i]);
	//			if (D) {
	//				var b = D.getBinding("selectedKey");
	//				if (b) {
	//					D.bindProperty("selectedKey", b.sPath)
	//				}
	//			}
	//		}
	//	},
	//	_getIDForDropDownBoxes: function() {
	//		return ["personFragment--academicTitleIDInput", "personFragment--titleIDInput", "Classification.ratingIDInput"]
	//	},
	//	getHeaderFooterOptions: function() {
	//		var t = this;
	//		return {
	//			sI18NFullscreenTitle: "DETAIL_TITLE",
	//			buttonList: [{
	//				sI18nBtnTxt: "BUTTON_SAVE",
	//				sId: "saveButton",
	//				onBtnPressed: jQuery.proxy(this.onSaveButtonPressed, this),
	//				bDisabled: "true"
	//			}, {
	//				sI18nBtnTxt: "BUTTON_CANCEL",
	//				sId: "cancelButton",
	//				onBtnPressed: jQuery.proxy(this.onCancelButtonPressed, this),
	//			}, ],
	//			onBack: function(e) {
	//				t.onCancelButtonPressed()
	//			},
	//		}
	//	},
	//	_setDefaultEmployeeResponsible: function() {
	//		if (!this.editMode && this.customizingModel.getProperty('/DefaultEmployeeResponsible/employeeID')) {
	//			var e = this.customizingModel.getProperty('/DefaultEmployeeResponsible/employeeID');
	//			var a = this.customizingModel.getProperty('/DefaultEmployeeResponsible/fullName');
	//			var A = this.getView().getBindingContext();
	//			var m = this.getView().getModel();
	//			if (A.getProperty("EmployeeResponsibleRel")) {
	//				m.setProperty(A.sPath + "/EmployeeResponsibleRel/account2ID", e);
	//				m.setProperty(A.sPath + "/EmployeeResponsibleRel/account2FullName", a)
	//			}
	//			this._setEmployeeResponsible(e, a)
	//		}
	//	}
	//
});