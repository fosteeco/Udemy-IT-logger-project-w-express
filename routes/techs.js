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
    res.json(allTechs);
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

// @route       DELETE api/techs/:username
// @desc        delete a tech
// @access      Public
router.delete("/:username", [], async (req, res) => {
  try {
    let tech = await Tech.find({
      userName: req.params.username,
    });
    if (tech.length === 0) {
      return res.status(404).json({ msg: "Tech not found" });
    }
    await Tech.findByIdAndRemove(tech[0]._id);

    res.json({ msg: "Tech removed " });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
