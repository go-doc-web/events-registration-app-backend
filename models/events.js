const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    default: Date.now,
  },
  organizer: {
    type: String,
    required: true,
  },
});

const Event = mongoose.model("event", eventSchema);

module.exports = Event;
