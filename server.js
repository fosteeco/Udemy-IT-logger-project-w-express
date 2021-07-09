const { Router } = require("express");
const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
// Init middleware
app.use(express.json({ extended: false }));
// Connect DB
connectDB();

// app.get("/", (req, res) => res.json({ msg: "Welcome to api" }));
app.use("/api/techs", require("./routes/techs"));
app.use("/api/logs", require("./routes/logs"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
