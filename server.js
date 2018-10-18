const Joi = require("joi");
const express = require("express");
const bears = require("./data/DataOfBears.json");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

// GET-requests

app.get("/api/bears", (req, res) => {
  res.json(bears);
});

app.get("/api/bears/:id", (req, res) => {
  const bear = bears.find(b => b.id === parseInt(req.params.id));
  if (!bear) res.status(404).send("Id not found");
  res.send(bear);
});

// POST-requests

app.post("/api/bears", (req, res) => {
  const schema = {
    name: Joi.string().required(),
    nameLatin: Joi.string().required(),
    description: Joi.string().required(),
    kingdom: Joi.string().required(),
    image: Joi.string().required()
  };

  const result = Joi.validate(req.body, schema);

  if (result.error) {
    res.status(400).send(result.error.details);
    return;
  }

  const bear = {
    id: bears.length + 1,
    name: req.body.name,
    nameLatin: req.body.nameLatin,
    description: req.body.description,
    kingdom: req.body.kingdom,
    image: req.body.image
  };
  bears.push(bear);
  res.send(bear);
});

app.listen(port, () => console.log(`Server started, port ${port}`));
