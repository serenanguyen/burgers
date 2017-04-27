var connection = require("./connection.js");

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
  selectAll: function(cb){
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result){
      if(err){
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(val, cb){
    // insert into burgers (burgers) values (val)
    var queryString = "INSERT INTO burgers (burger_name) VALUES ('" + val.toString() + "')";
    connection.query(queryString, function(err, result){
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
