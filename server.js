const { Router } = require("express");
const express = require("express");
const { connect } = require("mongoose");
// const connectDB = require("./config/db");
const path = require("path");

const app = express();

app.get("/", (req, res) => res.json({ msg: "Welcome to api" }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
