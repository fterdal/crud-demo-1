const { DataTypes } = require("Sequelize");
const db = require("./db");

const Forecast = db.define("forecast", {
  temperature: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  time: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

module.exports = Forecast;
