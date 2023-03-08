const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 8000;
app.listen(port, () => console.log(`Express started`));
mongoose.connect("mongodb://localhost:27017/ToDo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
