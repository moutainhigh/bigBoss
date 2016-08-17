/*
 * File: app/store/CategoryMgmtBranchComboStore.js
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

Ext.define('CategoryMgmt.store.CategoryComboboxStore', {
  extend: 'Ext.data.ArrayStore',
  alias: 'store.categorycomboboxstore',

  requires: [
    'Ext.data.proxy.Ajax',
    'Ext.data.reader.Json',
    'CategoryMgmt.model.CategoryComboboxModel'
  ],

  constructor: function (cfg) {
    var me = this;
    cfg = cfg || {};
    me.callParent([Ext.apply({
      storeId:'CategoryComboboxStore',
      //model: 'CategoryMgmt.model.CategoryComboboxModel',

      fields:['key','value'],
      proxy: {
        url: FACADE_URL+'/category/list',
        type: 'ajax',
        reader: {
          type: 'json',
          rootProperty: 'data'
        }
      }
      /*proxy: {
        type: 'ajax',
        url: '/api/general/category/related/filter',
        extraParams: {
          //type: cfg.comboxType
        },
        api: {
          create  : "/api/general/category/related/add",
          read    : "/api/general/category/related/filter",
          update  : "/api/general/category/related/update",
          destroy : "/api/general/category/related/delete"
        },
        reader: {
          type: 'json',
          rootProperty: 'data'
        },
        headers: {
          "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
        },
        writer: {
          type: 'json',
          transform: {
            fn: function(data, request) {
              return Ext.Object.toQueryString(data);
            },
            scope: this
          }
        }
      }*/
    }, cfg)]);
  }
});