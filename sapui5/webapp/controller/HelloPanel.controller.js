sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/m/MessageToast"
], function (Controller, MessageToast) {    
    "use strict";
    
    return Controller.extend("elvisivan.sapui5.controller.HelloPanel", {

        onInit: function () {
            
        },

        onShowHello: function () {
            // read text from i18n model
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            // read property from data model
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        },

        onOpenDialog: function() {
            this.getOwnerComponent().openHelloDialog();        
        }
        

    });
});