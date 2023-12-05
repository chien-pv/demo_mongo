var express = require("express");
var router = express.Router();
let connect = require("../connect_db");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let db = await connect();
  let data1 = await db
    .collection("users")
    .insertOne({ name: "abc", email: "abc@gmail.com" });

  let data = await db.collection("users").find().toArray();
  console.log(data);
  res.render("index", { title: "Express" });
});

module.exports = router;
