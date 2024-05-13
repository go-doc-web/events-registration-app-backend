const express = require("express");
const router = express.Router();
const Event = require("../../models/events");
const { getEventsAll } = require("../../controllers/eventControllers");

const eventsData = require("../../data/eventsDB");

router.get("/", async (req, res) => {
  const { page, pageSize } = req.query;

  try {
    const data = await getEventsAll(page, pageSize);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.get("/:eventId", (req, res) => {});

router.post("/", async (req, res) => {
  const body = req.body;
  try {
    const newEvent = await Event.create(body);
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
