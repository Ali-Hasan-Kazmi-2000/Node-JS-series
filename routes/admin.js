const express = require("express");
const router = express.Router();
const path = require("path");

//  admin/add-product => post
router.post("/add-product", (req, res, next) => {
  const { title } = req.body;
  console.log(title);
  res.redirect("/");
});
//  admin/add-product => get
router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "views", "add-product.html"));
});

module.exports = router;
