const express = require("express");
const router = express.Router();
const forecastsRouter = require("./forecasts");

// Mount the forecastsRouter with /forecasts
router.use("/forecasts", forecastsRouter);

module.exports = router;
