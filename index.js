const express = require("express");
const app = express();
const port = 3001;
const path = require("path");

// myapp.get(path,arrowFun)

app.get("/", (req, res) => {
  res.send("Hello express!");
});
app.get("/mohit", (req, res) => {
  res.send("he is smart!");
});
app.get("/nikhil", (req, res) => {
  res.send("he is mad!");
});
app.get("/bigfile", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
