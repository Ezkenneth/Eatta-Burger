var orm = require("../config/orm.js");

var burger = {
    selectAll: function() {
     return orm.selectAll()
    },
    
    insertOne: function(name) {
      return orm.insertOne(name)
    },
    updateOne: function(id) {
      return orm.updateOne(id)
  }
}
  

  module.exports = burger;