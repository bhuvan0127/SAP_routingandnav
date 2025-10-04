sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("routingandnav.controller.View2", {
        onInit() {
            var oRouter=this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView2").attachPatternMatched(this.onObjectMatched,this);
        },
        onObjectMatched(oEvent){
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").productPath),
                model: "Products"
            });
        },
        onBack(){
            this.getOwnerComponent().getRouter().navTo("RouteView1");
        }
    });
});