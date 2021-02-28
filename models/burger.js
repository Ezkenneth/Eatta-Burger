var orm = require("../config/orm.js");

var burger = {
    selectAll: function() {
     return orm.selectAll()
    },
    // The variables cols and vals are arrays.
    insertOne: function(name) {
      return orm.insertOne(name)
    },
    updateOne: function(id) {
      return orm.updateOne(id)
  }
}
  

  module.exports = burger;