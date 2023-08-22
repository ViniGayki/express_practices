const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World GET!");
});
app.post("/", (req, res) => {
  res.send("Hello World POST!");
});
app.put("/", (req, res) => {
  res.send("Hello World PUT!");
});
app.delete("/", (req, res) => {
  res.send("Hello World DELETE!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
