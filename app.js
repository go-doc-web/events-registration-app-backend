const express = require("express");
const app = express();

const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const eventsRouter = require("./routes/api/events");
const PORT = process.env.PORT || 5001;

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/events", eventsRouter);

app.use((err, req, res, next) => {
  const { status = 500, message = "Server found" } = err;
  res.status(status).json({ message });
});

// app.listen(PORT, () => {
//   console.log(`Server listen on the port ${PORT}`);
// });

module.exports = app;
