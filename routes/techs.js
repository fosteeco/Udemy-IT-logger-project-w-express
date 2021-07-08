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
router.post("/", async (req, res) => {
  const { firstName, lastName } = req.body;
  tech = new Tech({
    firstName,
    lastName,
  });
});

module.exports = router;
