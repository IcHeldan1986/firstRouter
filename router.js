const express = require("express");
const router = express.Router();

router.post("/welcome", (req, res) => {
  const { firstname, lastname, pseudo, password } = req.body;
  res.render("welcome", { firstname, lastname, pseudo, password });
  console.log(firstname, lastname, pseudo, password);
});

module.exports = router;
