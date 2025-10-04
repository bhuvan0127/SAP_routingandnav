sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("routingandnav.controller.View1", {
        onInit() {
            var oModel=this.getOwnerComponent().getModel("Products");
            this.getView().setModel(oModel);
        },
        onPress(){
            var oTable=this.byId("Tab1");
            var oSelectedItem=oTable.getSelectedItem();
            if(!oSelectedItem){
                sap.m.MessageToast.show("select a row first");
                return ;
            }
            var sPath=oSelectedItem.getBindingContext("Products").getPath().substring(1);
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView2",{
                productPath: window.encodeURIComponent(sPath)
            });
        },
        onItemPress(OEvent){
            const oItem=OEvent.getSource();
            var sPath=oItem.getBindingContext("Products").getPath().substring(1);
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteView2",{
                    productPath: window.encodeURIComponent(sPath)
            });
        }
    });
});