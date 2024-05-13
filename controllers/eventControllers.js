const Event = require("../models/events");

const getEventsAll = async (page, pageSize) => {
  try {
    const pageNumber = parseInt(page, 10);
    const size = parseInt(pageSize, 10);
    if (!size) {
      throw new Error("Size not found");
    }
    if (!pageNumber) {
      throw new Error("Page not found");
    }

    const skip = (pageNumber - 1) * size;
    const data = await Event.find({}).skip(skip).limit(size);
    if (!data || data.length === 0) {
      throw new Error("No found events");
    }

    const response = {
      pageNumber,
      size,
      data,
    };

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getEventsAll,
};
