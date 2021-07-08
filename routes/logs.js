/* register route  */
const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const log = require("../models/log");

// Same thing as mern stack course

// @route       POST api/logs
// @desc        register a user
// @access      Public
router.post("/");

module.exports = router;
