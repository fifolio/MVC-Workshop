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
const schema = new mongoose.Schema({ title: String, data: new Date() });

// Create New Model {Collection} that takes {"its Name", and its Data Schema structure}
const Task = mongoose.model("Task", schema);

// Set get() method to define a route that listen for "/create" path
// Add callback function that gets executed when the server receives a the request
app.get("/create", (req, res) => {
  // insert Data to Database then confirm it with via console
  // Catch the Errs if any
  const firstTask = new Task({ title: "Send from express!" });
  firstTask
    .save()
    .then(() => console.log(`new record inserted!`))
    .catch((err) => console.log(`This is your Err msg: ${err}`));

  // Send confirmation response to client
  res.send("Data Added to Database");
});
