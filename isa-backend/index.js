const express = require("express");
const banking = require("./banking.json");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/banking", (req, res) => {
  res.json(banking);
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
