var eatz =  eatz || {};

eatz.Dish = Backbone.Model.extend({

    idAttribute: "_id",
    urlRoot:"/wines",
    defaults: {
      // ADD YOUR CODE HERE
      name: "",
      venue:"",
      info:"",
      numbr:"1265",
      street:"Military Trail",
      city:"Scarborough",
      province:"ON",
      url:"",
      image:"img/placeholder" //image url
    },
    toggle: function() {
    	console.log("toggle?");
    },
    validate: function(attr){

//        var errors = [];
//        //name regex
//
////      var nameRegEx = /[^A-Z]a-z0-9 ]/ ; //Check for any other characters except A-Z, a-z and 0-9
//
//        var nameRegEx = /^[\w\-\s]+$/; //word, - and spaces
//
//        if(nameRegEx.test(attr.name) == false){ //string failed validation!
//            errors.push({field:'name', message:"Please Enter a proper name."});
//        }
//
//        //return the errors array if the size is >= 1.
//        return errors.length > 0 ? errors : false;
    }
});