const express = require('express');

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", async function(req, res) {
   try {
     var data = await burger.selectAll()
     res.render("index", {burgers: data})
   } catch (error) {
     res.status(500).send(error)
   }
  });
  
  router.post("/api/burgers", async function(req, res) {
  try {
    await burger.insertOne(req.body.name)
    res.send("Success")
  } catch (error) {
    res.status(500).send(error)
  }
  });
  
  router.put("/api/burgers/:id", async function(req, res) {
    console.log(req.params.id)
    try {
      await burger.updateOne(req.params.id)
      res.send("Success")
    } catch (error) {
      res.status(500).send(error)
      console.log(error)
    }
  });




module.exports = router;