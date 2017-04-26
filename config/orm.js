var connection = require("./connection.js");

var orm = {
  selectAll: function(whatToSelect,table){
    var queryString = "SELECT ? FROM ??";
    connection.query(queryString, [whatToSelect, table], function(err, result){
      console.log(result);
      return result;
    });
  },
  insertOne: function(table, colName, input){
    var queryString = "INSERT INTO ?? (?) VALUES (?)";
    connection.query(queryString, [table, colName, input], function(err, result){
      console.log(result);
      return result;
    });
  },
  updateOne: function(table, colName, input, id){
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(queryString, [table, colName, input, id], function(err, result){
      console.log(result);
      return result;
    });
  }
};

module.exports = orm;
