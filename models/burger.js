// import orm to create functions that will interact with database
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb){
    orm.selectAll(function(res){
      cb(res);
    });
  },
  insertOne: function(val, cb){
    orm.insertOne(val, function(res){
      cb(res);
    });
  },
  updateOne: function(colName, condition, cb){
    orm.updateOne("burgers", colName, condition, function(res){
      cb(res);
    });
  }
};

// export for burgers controller
module.exports = burger;
