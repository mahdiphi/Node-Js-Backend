const express = require("express");
require("dotenv").config();
const usersRoute = require("./routes/users-route.js");
const todosRoute = require("./routes/todos-route.js");
const sessionsRoute = require("./routes/sessions-route.js");
const logger = require("./middlewares/logger.js");
const errorHandler = require("./middlewares/errorHandler.js");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/users", usersRoute);
app.use("/api/todos", todosRoute);
app.use("/api/sessions", sessionsRoute);


app.get("/", (req, res) => {
  res.send("Hello there");
});


app.use(logger);
app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
