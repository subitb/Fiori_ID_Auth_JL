// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Supplier

sap.ui.define([
	"sap/ui/test/Opa5",
	"webapp/Fiori_ID_Auth_JL/test/integration/arrangements/Arrangement","webapp/Fiori_ID_Auth_JL/test/integration/MasterJourney",
	"webapp/Fiori_ID_Auth_JL/test/integration/NavigationJourney",
	"webapp/Fiori_ID_Auth_JL/test/integration/NotFoundJourney",
	"webapp/Fiori_ID_Auth_JL/test/integration/BusyJourney"
], function (Opa5, Arrangement) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "webapp.Fiori_ID_Auth_JL.view.",
		autoWait: true
	});
});
