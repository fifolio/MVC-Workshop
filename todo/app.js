// Import Express & Mongoose
const express = require("express");
const mongoose = require("mongoose");
// Pass Express() to App, and set the Server Port to 8000
const app = express();
const port = 8000;
// Let the App Listen at Port 8000
app.listen(port, () => console.log(`Express Server Connected`));
// Connect the Mongoose
// Then Console log to Confirm
// or Catch the Err and Log it
mongoose
  .connect("mongodb://127.0.0.1:27017/Todo", {
    useNewUrlParser: true, // Check Notes.md for infos
    useUnifiedTopology: true, // Check Notes.md for infos
  })
  .then(() => console.log("MongoDB Database connected!"))
  .catch((err) =>
    console.log(`This is Err msg because of db connection: ${err}`)
  );

// Create New Mongoose Schema {Record structure contains the default key and value type}
const schema = new mongoose.Schema({ title: String });

// Create New Model {Collection} that takes {"its Name", and its Data Schema structure}
const Task = mongoose.model("Task", schema);

// insert
const firstTask = new Task({ title: "My New input" });
firstTask
  .save()
  .then(() => console.log(`new record inserted!`))
  .catch((err) => console.log(`This is your Err msg: ${err}`));
