define([  
	"text!mvc/demo.html"
], function(demoTemplate) {

	var $ = jQuery;
	var view = Backbone.View.extend({ 
		initialize: function(){ 
			this.undelegateEvents();
			this.$el.removeData().unbind().empty(); 
			this.listenTo(this.model,'change', this.render); 
			this.model.fetch({ 
				error: function(){ 
					console.log(arguments); 
				}
			});
		}, 
		render: function(){ 
			var self = this;
			// var template = _.template(templateText);
			var template = Handlebars.compile(demoTemplate);
			self.$el.html( template(this.model.toJSON()) );			
		}, 
		events:{ 
			"click input[type=button]": "doSearch" 
		}, 
		doSearch: function(event){
			// Button clicked, you can access the element that was clicked with event.currentTarget 
			alert( "Search for " + $(event.currentTarget).attr("value") ); 
		} 
	}); 

	return view;
});