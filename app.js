const express = require("express");
const morgan = require("morgan");
const { db } = require("./database/index");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

const PORT = 8080;
const runApp = async () => {
  await db.sync();
  console.log("🐘 Connected to Postgres database");
  app.listen(PORT, () => {
    console.log(`🤘 Server is listening on port ${PORT}`);
  });
};
runApp();
