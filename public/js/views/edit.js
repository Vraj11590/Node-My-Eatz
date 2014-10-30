var eatz =  eatz || {};

// note View-name (HomeView) matches name of template HomeView.html
eatz.DishEditView = Backbone.View.extend({

    el: this.el,


	initialize: function() {
		console.log(this.model);
		this.render();


    },

    events:{
    	'click #create' : "saveDish",
    	'click #cancel' : "redirect",
        'change input' : "updateModel"
    },

    saveDish:function(e){
        console.log("Saving final dish");
        console.log("final Error checking before saving");
        console.log("save the model");






    },
    updateModel:function(event){
        console.log("Update '" + event.target.id + "' to " + event.target.value);
        //update Model
        var att = event.target.id;
        var val = event.target.value;
        console.log(att + " = " + val);
        var options = {
           success: function() {
               eatz.utils.passValidation(att)
           },
           error: function(model,error){
               eatz.utils.failValidation(att,error);
           }
        };
        switch(att){
            case "name":
                console.log("Name Attribute");
                this.model.set({name:val},{validate:true},options);
                break;
            case "served":
                console.log("served attr");
                this.model.set({venue:val});
                break;
            case "dish_Info":
                console.log("dish_Info");
                this.model.set({info:val});
                break;
            case "url":
                console.log("url");
                this.model.set({url:val});
                break;
            case "numbr":
                console.log("numbr");
                this.model.set({numbr:val});
                break;
            case "street":
                console.log("street");
                this.model.set({street:val});
                break;
            case "city":
                console.log("city");
                this.model.set({city:val});
                break;
            default:
                console.log("default");
                break;

        }


        console.log(this.model.toJSON());
    },
    redirect:function(){
        this.model.destroy();
    	app.navigate('#browse',true);
    },
    //render the empty fields with the data from a sample dish model
    render: function() {
//		console.log(m.toJSON());
		this.$el.html(this.template(this.model.toJSON()));  // create DOM content for HomeView
		return this;    // support chaining
    }
});
