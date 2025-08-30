const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose")
const usersRoute = require("./routes/users-route.js");
const todosRoute = require("./routes/todos-route.js");
const authRoute = require("./routes/auth-route.js")
const logger = require("./middlewares/logger.js");
const errorHandler = require("./middlewares/errorHandler.js");

const app = express();
const PORT = process.env.PORT || 3000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


mongoose.connect(`mongodb+srv://${username}:${password}@testbackend.oedpvy9.mongodb.net/myApp?retryWrites=true&w=majority&appName=testBackEnd`)
.then(()=>{
  console.log("Connected to database")
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch((err) =>{
  console.log("Connection faild!", err.message)
})
app.use(logger);

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute);
app.use("/api/todos", todosRoute);


app.get("/", (req, res) => {
  res.send("Hello there");
});


app.use(errorHandler);

app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

