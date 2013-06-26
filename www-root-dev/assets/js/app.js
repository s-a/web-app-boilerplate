/*! sa main app script */
define('app',[
	"app_loader"
],  
function(loader){
	var $ = loader.$;
	var Backbone = loader.Backbone;  
 
	debugger;
	function initializeApp () {
				
		$(function () {
			new loader.router();	
			Backbone.history.start(); 
		});

	}
	 
	return {initialize : initializeApp};
});