var eatz =  eatz || {};

// note View-name (HomeView) matches name of template HomeView.html
eatz.HomeView = Backbone.View.extend({

    events:{
        'click #browsebtn' : "browse",
        'click #addbtn' : "add"
    },

    initialize: function () {
	    this.render();
    },


    browse:function(){
    	console.log("browse");
    	app.navigate("browse",true);
    },
    add:function(){
    	console.log("add");
    	app.navigate("dishes/add",true);
    },
    render: function () {
	    this.$el.html(this.template());  // create DOM content for HomeView
	    return this;    // support chaining
    }

});
