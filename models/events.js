const mongoose = require("mongoose");

// Определение схемы события
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
    default: Date.now, // Установка текущей даты и времени по умолчанию
  },
  organizer: {
    type: String,
    required: true,
  },
});

// Создание модели события на основе схемы
const Event = mongoose.model("event", eventSchema);

module.exports = Event;
