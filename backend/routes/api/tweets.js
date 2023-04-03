const express = require("express");
const { asyncHandler } = require("../../utils");

const router = express.Router();
const db = require("../../db/models");

const { Tweet } = db;

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const tweets = await Tweet.findAll();
    res.json(tweets);
  })
);

router.post(
  "/2",
  asyncHandler(async (req, res) => {
    res.json({ message: "hit 2" });
  })
);

module.exports = router;
