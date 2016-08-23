Ext.Loader.setConfig({
    enabled: true,
    paths: {
        'Common': '../../app/common',
        'Ext': '../../js/extjs'
    }
});
Ext.require([
    'Common.util.TipsUtil',
    'Common.util.DoActionUtil',
    'Ext.ux.ProgressBarPager',
    'Common.ux.PagingToolbarCustom',
    'Common.overrides.Button',
    'Common.overrides.Splitter',
    'Common.overrides.PagingToolbarCustom',
    'Common.overrides.GridHeaderContainer',
    'Common.overrides.JsonWrite'
]);

Ext.application({
    models: [
        'MainViewportGridModel'
    ],
    stores: [
        'MainViewportGridStore',
        'MarketInfoMgmt.store.CategoryComboboxStore'
    ],
    views: [
        'MainViewport'
    ],
    name: 'MarketInfoMgmt',
    appFolder: '../../app/marketInfoMgmt',

    init: function (app) {

    },

    launch: function () {
        Ext.create('MarketInfoMgmt.view.MainViewport');
    }

});