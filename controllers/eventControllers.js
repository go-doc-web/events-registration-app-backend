const Event = require("../models/events");

const getEventsAll = async (page, pageSize) => {
  try {
    const pageNumber = parseInt(page, 10);
    const size = parseInt(pageSize, 10);
    if (isNaN(pageNumber) || isNaN(size)) {
      throw new Error("Invalid page or pageSize");
    }

    const skip = (pageNumber - 1) * size;
    const data = await Event.find({}).skip(skip).limit(size);
    const total = await Event.countDocuments();

    const response = {
      pageNumber,
      size,
      data,
      total,
    };

    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getEventsAll,
};
