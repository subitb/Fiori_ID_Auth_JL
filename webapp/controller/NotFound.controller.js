sap.ui.define([
	"webapp/Fiori_ID_Auth_JL/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("webapp.Fiori_ID_Auth_JL.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);
