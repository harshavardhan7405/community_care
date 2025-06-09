const { model } = require("mongoose");

const { PositionsSchema } = require("../Schema/PositionsSchema");

const PositionsModel = new model("position", PositionsSchema);

module.exports = { PositionsModel };