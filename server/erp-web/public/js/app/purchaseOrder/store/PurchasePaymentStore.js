/*
 * File: app/store/PurchasePaymentStore.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 6.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 6.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('PurchaseOrder.store.PurchasePaymentStore', {
    extend: 'Ext.data.Store',
    alias: 'store.purchasepaymentstore',
    requires: [
        'PurchaseOrder.model.PaymentDetialModel'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'PurchasePaymentStore',
            model: 'PurchaseOrder.model.PaymentDetialModel',
            proxy: {
                type: 'ajax',
                url: '/api/purchase/order/payment',
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'data'
                }
            }
        }, cfg)]);
    }
});