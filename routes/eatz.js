//set up mongoose
"use strict;"


var mongoose = require("mongoose");

var config = require(__dirname + '/../config.js');


//mongoose.connect(config.db);

mongoose.connect('mongodb://localhost:27017/dishes');


db = new Db('dishes', server, {safe:true});

db.open(function(err,db){
   if(!err){
       console.log("Connected to dishes database on 27017");
       db.collection('dishes',{safe:true},function(err,collection){
           if(err){
               console.log("Populating the empty database");
               populateSample();
           }
       })
   }
});

//set up schema
var Dish = new mongoose.Schema({
    name: {type: String, required: true},
    venue: {type: String, required:true},
    info: {type: String},
    url: {type: String},
    numbr: {type:String, required:true},
    street: {type:String, required:true},
    city: {type:String, required:true},
    province: {type:String, required:true},
    image:{type:String, required:true}
});
//for removing duplicate dishes in the same venue
Dish.index();

var DishModel = mongoose.model('Dish',Dish);



exports.api = function(req,res){
  res.send("hello");
  res.end();
};

exports.getDishes = function(req,res){
  res.send("sending all dishes");
  res.end();
};

//
//name: {type: String, required: true},
//venue: {type: String, required:true},
//info: {type: String},
//url: {type: String},
//numbr: {type:String, required:true},
//street: {type:String, required:true},
//city: {type:String, required:true},
//province: {type:String, required:true},
//image:{type:String, required:true}



var populateSample = function(){
    var dishes = [
        {
            name:"Triple Chocolate Meltdown",
            venue:"AppleBees",
            info:"Dessert with chocolate and Vanilla Icecream",
            url:"www.applebees.ca",
            numbr:"130",
            street:"Applebees Road",
            city:"Toronto",
            province:"ON",
            image:"/dessert1.jpg"
        },
        {
            name:"Roasted Veggie Wrap",
            venue:"Berries and Blooms's",
            info:"Roasted veggies with yummy pesto sauce",
            url:"",
            numbr:"1324",
            street:"YorkLanes Mall",
            city:"Toronto",
            province:"ON",
            image:"/food1.jpg"
        }
    ];
    db.collection('dishes',function(err,collection){
       collection.insert('dishes',{safe:true}, function(err,result){});
    });
}