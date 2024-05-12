const express = require("express");
const app = express();
const eventsRouter = require("./routes/api/events");

const PORT = 5000;

app.use(express.json());
app.use("/api/events", eventsRouter);

app.listen(PORT, () => {
  console.log(`Server listen on the port ${PORT}`);
});
