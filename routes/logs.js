/* register route  */
const express = require("express");
const router = express.Router();
const config = require("config");
const { check, validationResult } = require("express-validator");
const Log = require("../models/Log");

const Tech = require("../models/Tech");

// @route       GET api/logs
// @desc        Get all techs
// @access      Public
router.get("/", [], async (req, res) => {
  try {
    let allLogs = await Log.find({});
    res.json(allLogs);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route       POST api/logs
// @desc        Add a new log
// @access      Public
router.post("/", [], async (req, res) => {
  let { message, attention, techUserName } = req.body;
  let date = new Date();
  try {
    let tech = await Tech.findOne({
      userName: techUserName,
    });

    let log = new Log({
      message,
      attention,
      tech: tech._id,
      date,
    });
    await log.save();
    res.send(log);
  } catch (error) {
    console.error(error);
  }
});

// @route       POST api/logs
// @desc        Edit Log
// @access      Public
router.put("/:id", [], async (req, res) => {
  let { message, attention, techUserName } = req.body;
  let date = new Date();
  let logFields = {};
  if (message) logFields.message = message;
  if (attention) logFields.attention = attention;
  logFields.date = date;
  try {
    let log = await Log.findById(req.params.id);
    if (!log) {
      return res.status(404).json({ msg: "Log not Found" });
    }
    let tech = await Tech.findOne({
      userName: techUserName,
    });
    if (!tech) {
      return res.status(404).json({ msg: "Tech doesn't exist" });
    }
    if (tech) logFields.tech = tech._id;
    log = await Log.findByIdAndUpdate(
      req.params.id,
      { $set: logFields },
      { new: true }
    );

    res.json(log);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// @route       POST api/logs
// @desc        Edit Log
// @access      Public
router.delete("/:id", [], async (req, res) => {
  try {
    let log = await Log.findById(req.params.id);
    if (!log) {
      return res.status(404).json({ msg: "Log not found" });
    }
    await Log.findByIdAndRemove(req.params.id);

    res.json({ msg: "Log removed " });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
