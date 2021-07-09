/* register route  */
const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const Tech = require("../models/Tech");

// Same thing as mern stack course

// @route       GET api/techs
// @desc        Get all techs
// @access      Public
router.get("/", [], async (req, res) => {
  try {
    let allTechs = await Tech.find({});
    console.log(allTechs);
    res.send(allTechs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/techs
// @desc        Add a new tech
// @access      Public
router.post("/", [], async (req, res) => {
  const { firstName, lastName } = req.body;
  let userName = firstName + lastName;
  let tech = await Tech.findOne({
    userName,
  });
  let endsWith = 2;
  while (tech) {
    userName = firstName + lastName + endsWith;
    tech = await Tech.findOne({
      userName,
    });
    endsWith += 1;
  }
  tech = new Tech({
    firstName,
    lastName,
    userName,
  });
  res.send(tech);

  try {
    await tech.save();
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
