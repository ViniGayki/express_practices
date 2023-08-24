const express = require("express");
const app = express();
const port = 3000;

// console.log(path.join(__dirname, '../public'))
const staticPath = path.join(__dirname, "../public");

// built in middleware
app.use(express.static(staticPath));

app.get("/", (req, res) => {
  res.send("Hello World GET!");
});
app.post("/add", (req, res) => {
  res.send("Hello World POST!");
});
app.put("/edit", (req, res) => {
  res.send("Hello World PUT!");
});
app.delete("/delete", (req, res) => {
  res.send("Hello World DELETE!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
