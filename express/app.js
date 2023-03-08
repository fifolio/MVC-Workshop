const express = require("express");
const app = express();
const port = 8000;
app.listen(port, () => console.log(`Express started`));

app.get("/", (req, res) => {
  res.send("<h1>My Express App</h1>");
});
