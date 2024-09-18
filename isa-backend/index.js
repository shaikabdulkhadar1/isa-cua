const express = require("express");
const studenthandbook = require("./studenthandbook.json");
const prearrival = require("./prearrival.json");
const postarrival = require("./postarrival.json");
const travel = require("./travel.json");
const housing = require("./housing.json");
const banking = require("./banking.json");
const faqs = require("./faqs.json");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/studenthandbook", (req, res) => {
  res.json(studenthandbook);
});

app.get("/prearrival", (req, res) => {
  res.json(prearrival);
});

app.get("/postarrival", (req, res) => {
  res.json(postarrival);
});

app.get("/travel", (req, res) => {
  res.json(travel);
});

app.get("/housing", (req, res) => {
  res.json(housing);
});

app.get("/banking", (req, res) => {
  res.json(banking);
});

app.get("/faqs", (req, res) => {
  res.json(faqs);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
