 var eatz =  eatz || {};

eatz.Dishes = Backbone.Collection.extend({
	model: eatz.Dish,

    url: "/dishes",

	initialize: function(){
		console.log("Collection initialized");
	}
});

