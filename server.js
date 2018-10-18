const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bears = require("./data/DataOfBears.json");

app.get("/api/bears", (req, res) => {
  res.json(bears);
});

app.get("/api/bears/:id", (req, res) => {
  const bear = bears.find(c => c.id === parseInt(req.params.id));
  if (!bear) res.status(404).send("Id not found");
  res.send(bear);
});

app.listen(port, () => console.log(`Server started, port ${port}`));
