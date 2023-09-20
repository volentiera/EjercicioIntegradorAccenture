sap.ui.define(["sap/ui/core/mvc/Controller",
"sap/ui/model/json/JSONModel",
"ejerciciointegrador/util/Constants","sap/ui/core/routing/History","sap/ui/model/resource/ResourceModel","sap/ui/model/Filter",
"sap/ui/model/FilterOperator"], 
function (Controller,JSONModel,Constants, History, ResourceModel, Filter, FilterOperator){
    
    'use strict';
    const Commons = {
        navBack: function(){
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();
            
            if (sPreviousHash !== undefined){
                window.history.go(-1);
            }else{
                this.getOwnerComponent().getRouter().navTo(Constants.paths.app, {}, true)
            }
        },
        getData: function(){
            const url = sap.ui.require.toUrl(Constants.namespace.app) + Constants.paths.northwind
                this._model = new sap.ui.model.odata.v2.ODataModel(url,{
                    json: true,
                    headers: {
                        "DataServiceVersion": "2.0",
                        "Cache-Control": "no-cache, no-store",
                        "Pragma": "no-cache"
                    },
                    useBatch: true
                })
                this._model.read(Constants.entity.orders,{
                    async: true,
                    success: jQuery.proxy(this.success, this),
                    error: jQuery.proxy(this.error, this)
                })
                const sPath = jQuery.sap.getModulePath(Constants.namespace.app) + Constants.paths.filters
                const oModelFilters = new JSONModel(sPath);
                oModelFilters.loadData(sPath);
                this.getView().setModel(oModelFilters, Constants.model.filterModel)
        },
        success: function(oData){
            const oModel = new JSONModel(oData.results)
            this.getView().setModel(oModel, Constants.model.ordersModel)
        } ,
        error: function(error){
            console.log(error)
        },
        setI18n: function(){
            var i18nModel = new ResourceModel({
                bundleName: Constants.paths.I18n
            });
            this.getView().setModel(i18nModel, Constants.model.I18n);
        },
        onSearch: function(oEvent){
            let aFilters = [];
            let sQuery = oEvent.getSource().getValue();
            
            if (sQuery && sQuery.length > 0) {
                let filterEmployeeID = new Filter(Constants.filters.EmployeeID, FilterOperator.EQ, sQuery);
                aFilters.push(filterEmployeeID);
                let filterShipCity = new Filter(Constants.filters.ShipCity, FilterOperator.Contains, sQuery);
                aFilters.push(filterShipCity);
            }
            let oCombinedFilter = new Filter({
                filters: aFilters,
                and: false
            });
            let oList = this.byId(Constants.ids.idOrdersTable);
            let oBinding = oList.getBinding(Constants.binding.items);
            oBinding.filter(oCombinedFilter, Constants.binding.application);
        }
    }
    return Commons
}, true)