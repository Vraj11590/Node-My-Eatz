var eatz =  eatz || {};

// note View-name (HomeView) matches name of template HomeView.html
eatz.AboutView = Backbone.View.extend({
	initialize: function () {
	this.render();
    },

    render: function () {
	this.$el.html(this.template());  // create DOM content for HomeView
	return this;    // support chaining
    }
});
