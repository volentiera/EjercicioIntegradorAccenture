sap.ui.define(["ejerciciointegrador/util/Constants"], function (Constants){
    'use strict';
    return{
        changeData: function(value){
            switch (value) {
                case 1:
                    return Constants.formatter.Mouse;
                case 2:
                    return Constants.formatter.Monitor;
                case 3:
                    return Constants.formatter.Impresora;
                default:
                    return Constants.formatter.Otro;
            }
        }
    };
}, true)