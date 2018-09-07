'use strict';

var util = require('util'); // Import util module to consume the things that it exports
var isDoorOpen = false; // Initial state of the door
var doorOpeningTimeMinimum = 3000; // Minimum 3 seconds until the door state switches from true to false
var doorOpeningTimeMaximum = 300000; // Maximum 3 seconds until the door state switches from true to false

module.exports = {
  status: status,
  open: open
};

function status(req, res) {
  res.json(util.format('%s', isDoorOpen));
}

function open(req, res) {
  isDoorOpen = true;
  res.json(util.format('%s', isDoorOpen));

  setTimeout(close, Math.random() * (doorOpeningTimeMaximum - doorOpeningTimeMinimum) + doorOpeningTimeMinimum);
}

function close() {
  isDoorOpen = false;
}
