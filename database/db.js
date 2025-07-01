const { Sequelize } = require("sequelize");
const pg = require("pg");

const dbConnectionString =
  process.env.DATABASE_URL || "postgres://localhost:5432/weather_app";

const db = new Sequelize(dbConnectionString, {
  logging: false,
});

module.exports = db;
