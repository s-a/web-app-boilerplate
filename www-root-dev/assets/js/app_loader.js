define("app_loader",[ 
  "jquery",
	"underscore",
  "backbone",
  "handlebars",
	"assets/js/app_routes.js"
], function(jQuery, underscore, Backbone, Handlebars, router){ 
  
  console.log("Backbone", Backbone);
  console.log("Handlebars", Handlebars);
 

  return {
    $: jQuery.noConflict(  ),
    _: underscore,
    Backbone: Backbone,
    router: router,
    Handlebars: Handlebars
  };
  
});