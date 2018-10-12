const express = require("express");
const app = express();
const port = 5000;

const bears = require("./data/DataOfBears.json");

app.get("/api/bears", (req, res) => {
  res.json(bears);
});

app.listen(port, () => console.log(`Server started, port ${port}`));
