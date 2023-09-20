sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "ejerciciointegrador/util/Constants",
    "ejerciciointegrador/util/Formatter",
    "ejerciciointegrador/util/Commons",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Constants, Formatter, Commons) {
        "use strict";

        return Controller.extend("ejerciciointegrador.controller.Main", {
            Formatter: Formatter,

            onInit: function () {
                Commons.getData.call(this);
                Commons.setI18n.call(this);
            },
            onItemPress: function(oEvent){
                const oItem = oEvent.getSource().getBindingContext(Constants.model.ordersModel)
                const sPath = oItem.getPath()

                const selectedOrder = this.getView().getModel(Constants.model.ordersModel).getProperty(sPath);

                const selectedOrderModel = new JSONModel(selectedOrder);

                this.getOwnerComponent().getRouter().navTo(Constants.routes.RouteOrders)
                this.getOwnerComponent().setModel(selectedOrderModel, Constants.model.selectedOrderModel)
            },
            success: function(oData){
                Commons.success.call(this, oData)
            },
            error: function(error){
                Commons.error.call(this, error)
            },
            onSearch: function(oEvent){
                Commons.onSearch.call(this, oEvent)
            },
        });
    });
