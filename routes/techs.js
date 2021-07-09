/* register route  */
const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const Tech = require("../models/Tech");

// Same thing as mern stack course

// @route       POST api/techs
// @desc        Add a new tech
// @access      Public
router.post("/", [], async (req, res) => {
  const { firstName, lastName } = req.body;
  res.send(req.body);
  let tech = new Tech({
    firstName,
    lastName,
  });

  try {
    await tech.save();
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
