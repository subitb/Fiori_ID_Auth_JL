sap.ui.define([
	"sap/ui/test/Opa5",
	"webapp/Fiori_ID_Auth_JL/test/integration/arrangements/Arrangement",
	"webapp/Fiori_ID_Auth_JL/test/integration/NavigationJourneyPhone",
	"webapp/Fiori_ID_Auth_JL/test/integration/NotFoundJourneyPhone",
	"webapp/Fiori_ID_Auth_JL/test/integration/BusyJourneyPhone"
], function (Opa5, Arrangement) {
	"use strict";

	Opa5.extendConfig({
		arrangements: new Arrangement(),
		viewNamespace: "webapp.Fiori_ID_Auth_JL.view.",
		autoWait: true
	});
});
