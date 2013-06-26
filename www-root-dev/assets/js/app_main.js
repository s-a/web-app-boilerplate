require.config({
    baseUrl: './assets/js',
    paths: {
        mvc: '../../mvc'
    },
    shim: {
        underscore: {
            exports: '_' //the exported symbol
        },
        backbone : {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone' 
        },
        handlebars: {
            deps: ['jquery'],
            exports: 'Handlebars'
        }
    }
});

require(['app'], function(App){  
    App.initialize(); 
});