const express = require("express");
const compileCode = require("../controllers/compileCode");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("welcome to approach junction");
});

router.post("/compile", compileCode)

module.exports = router;
