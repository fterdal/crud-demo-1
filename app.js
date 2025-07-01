const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`🤘 Server is listening on port ${PORT}`);
});
