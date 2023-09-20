sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "ejerciciointegrador/util/Commons",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, Commons) {
        "use strict";

        return Controller.extend("ejerciciointegrador.controller.Orders", {
            onInit: function () { 
            },
            navBack: function(){
                Commons.navBack()
            }
            
        });
    });
