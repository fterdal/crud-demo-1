const express = require("express");
const router = express.Router();
const { Forecast } = require("../database");

// GET /api/forecasts -> Returns all forecasts
router.get("/", async (req, res) => {
  try {
    const forecasts = await Forecast.findAll();
    console.log("forecasts", forecasts);
    res.send(forecasts);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports = router;
