var express = require("express");
var router = express.Router();
// import model to use its database functions
var burger = require("../models/burger.js");
//routes
router.get("/", function(req, res){
// orm.selectAll("burger_name", "burgers");
  burger.selectAll(function(data){
    var object = {
      burgers: data
    };
    res.render("index", object);
  });
});

router.post("/", function(req, res){
  burger.insertOne("burger_name",req.body.burger_name, function(){
    res.redirect("/");
  });  
});

router.put("/:id", function(req,res){
  var condition = "id = " + req.params.id;
  burger.updateOne({devoured: req.body.devour},condition, function(){
    res.redirect("/");
  });
});

// export for server.js to use
module.exports = router;
