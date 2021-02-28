var connection = require("../config/connection.js");

// Setting up orm
var orm = {

    selectAll: function () {
      return new Promise (function(resolve, reject){
        connection.query(`SELECT * FROM burgers;`, (err, result) => {
          if(err){
            return (reject(err));

          }
          return(resolve(result))

        })
      })
    },
    insertOne: function (name) {
      return new Promise (function(resolve, reject){
        connection.query(`INSERT into burgers VALUES (default, ?, false)`, name, (err, result) => {
          if(err){
            return (reject(err));

          }
          return(resolve(result))

        })
      })
    },
    updateOne: function (id) {
      
        console.log(id)
        return new Promise (function(resolve, reject){
        connection.query(`UPDATE burgers SET devoured = true WHERE id = ?`, id, (err, result) => {
          if(err){
            return (reject(err));

          }
          return(resolve(result))

        })
      })
    }


}




module.exports = orm;