const express = require("express");
const router = express.Router();

const {
  getEventsAll,
  createParticipant,
  getParticipants,
} = require("../../controllers/eventControllers");

const eventsData = require("../../data/eventsDB");
const Event = require("../../models/events");

router.get("/", async (req, res) => {
  const { page, pageSize } = req.query;

  try {
    if (!page || !pageSize) {
      return res.status(400).json({
        message: "Page and pageSize query parameters are required!!!!",
      });
    }
    const data = await getEventsAll(page, pageSize);

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/:eventId/register", async (req, res) => {
  const { eventId } = req.params;
  const { fullName, email, birthDate, source } = req.body;

  try {
    const participant = await createParticipant(eventId, {
      fullName,
      email,
      birthDate,
      source,
    });

    await participant.save();
    res.status(201).send(participant);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

router.get("/:eventId/participants", async (req, res) => {
  const { eventId } = req.params;

  try {
    // const event = await Event.findById({ eventId });
    // if (!event) {
    //   return res.status(404).send({ message: "Событие не найдено" });
    // }

    const participants = await getParticipants(eventId);
    res.status(200).send(participants);
  } catch (error) {
    res.status(400).send(error.message);
  }
});
// router.get("/", async (req, res) => {
//   try {
//     const data = await Event.find({});

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

module.exports = router;

// router.post("/", async (req, res) => {
//   const body = req.body;
//   try {
//     const newEvent = await Event.create(body);
//     res.status(201).json(newEvent);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });
