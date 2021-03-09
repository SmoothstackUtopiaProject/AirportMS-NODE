const express = require("express");
const router = express.route();

const { airportController } = require("./AirportController");
router.route("airports")
  .post(airportController.create);

module.exports = router;