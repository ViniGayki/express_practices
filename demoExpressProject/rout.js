const express = require("express");
const app = express();
const port = 3000;

// built in middleware

app.get("/", (req, res) => {
  //   res.send("Hello World GET!");

  res.json([
    {
      id: 1,
      bookname: "Horror",
    },
    {
      id: 2,
      bookname: "History",
    },
    {
      id: 3,
      bookname: "Mistry",
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
