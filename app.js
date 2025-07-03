const express = require("express");
const morgan = require("morgan");
const { db } = require("./database/index");
const apiRouter = require("./api");
const cors = require("cors");

const app = express();

app.use(morgan("dev"));

// Allows requests from all hostname
app.use(cors());
app.use(
  cors({
    origin: "https://crud-demo-frontend.vercel.app",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

// mount the api router at /api
app.use("/api", apiRouter);

const PORT = 8080;
const runApp = async () => {
  try {
    await db.sync();
    console.log("🐘 Connected to Postgres database");
    app.listen(PORT, () => {
      console.log(`🤘 Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to connect to the database");
    console.error(err);
  }
};
runApp();
