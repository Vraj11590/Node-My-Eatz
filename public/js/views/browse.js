var eatz =  eatz || {};

// note View-name (HomeView) matches name of template HomeView.html
eatz.BrowseView = Backbone.View.extend({
	initialize: function (e) {
	console.log(e);
	this.render();
    },

    render: function () {
	this.$el.html(this.template());  // create DOM content for HomeView
	return this;    // support chaining
    }
});
