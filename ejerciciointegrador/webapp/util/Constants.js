sap.ui.define([], function (){
    'use strict';
    return{

        model:{
            ordersModel: "ordersModel",
            selectedOrderModel : "selectedOrderModel",
            filterModel: "filterModel",
            I18n: "i18n"
        },
        routes:{
            RouteOrders: "RouteOrders"
        },
        namespace:{
            app: "ejerciciointegrador"
        },
        paths:{
            northwind: "/v2/northwind/northwind.svc/",
            filters: "/localService/filtros.JSON",
            I18n: "ejerciciointegrador.i18n.i18n"
        },
        entity:{
            orders: "/Orders"
        },
        filters:{
            EmployeeID: "EmployeeID",
            ShipCity: "ShipCity"
        },
        ids:{
            idOrdersTable: "idOrdersTable"
        },
        binding:{
            items: "items",
            application: "Application"
        },
        formatter:{
            Mouse: "Mouse",
            Monitor: "Monitor",
            Impresora: "Impresora",
            Otro: "Otro"
        }
    };
}, true)