/*
 * File: app/view/MainViewportViewModel.js
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

Ext.define('CompanyMgmt.view.MainViewportViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.mainviewport',

  data: {
    searchData: { // 查询条件
      text: ""
    },
    addFlag: true,  // 添加/修改窗口标志位
    mainViewportController: {} // 窗口保存回调
  },

  stores: {
    gridstore: {
      type: 'mainviewportgridstore',
      autoLoad: true,
      proxy: {
        type: 'ajax',
        actionMethods: {
          read   : 'POST'
        },
        api: {
          read  : FACADE_URL+'/company/filter'
        },
        //url: FACADE_URL+'/company/filter',
        extraParams: {
          text: '{searchData.text}'
        },
        reader: {
          type: 'json',
          rootProperty: 'data.pageData',
          totalProperty: 'data.totalCount'
        }
      }
    }
  }
});