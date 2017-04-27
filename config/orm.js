var connection = require("./connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

function objToSql(ob){
  var arr=[];
  for(var key in ob){
    if(Object.hasOwnProperty.call(ob,key)){
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

// object for all sql statement functions
var orm = {
  selectAll: function(table, cb){
    var queryString = "SELECT * FROM "+table;
    connection.query(queryString, function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, colName, val, cb){
    // insert into burgers (burgers) values (val)
    var queryString = "INSERT INTO "+table+" ("+colName.toString()+") VALUES ("+printQuestionMarks(val.length)+") ";
    connection.query(queryString, val, function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  },
  // change col values
  updateOne: function(table, colName, condition, cb){
    //update burgers set devour = true where id = ?
    var queryString = "UPDATE "+table+" SET "+objToSql(colName)+" WHERE "+ condition;
    connection.query(queryString, function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  }
};

// UPDATE table SET objColVals = ? WHERE id = ?
// export for model burger.js
module.exports = orm;
