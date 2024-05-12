const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>Events page</h1>`);
});
router.get("/:eventId", (req, res) => {
  res.send(`<h1>Events page id:${req.params.eventId}</h1>`);
});

module.exports = router;
