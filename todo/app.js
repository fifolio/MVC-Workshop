/**
 * @summary Import Express
 * @this {express} used to import the Express framework.
 */
const express = require("express");
/**
 * @summary Import Mongoose
 * @this {mongoose} used to import the Mongoose library.
 */
const mongoose = require("mongoose");
/**
 * @summary Pass Express() to App, and set the Server Port to 8000
 * @this {app} is an instant for Express framework.
 */
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

/**
 * @summary Create New Mongoose Schema {Record structure contains the default key and value type}
 * @this {schema} is used to Create New Mongoose Schema
 */
const schema = new mongoose.Schema({ title: String });

/**
 * @summary Create New Model {Collection} that takes {"its Name", and its Data Schema structure}
 * @this {Task} is used to Create New Model
 */
const Task = mongoose.model("Task", schema);

// Set get() method to define a route that listen for "/create" path
// Add callback function that gets executed when the server receives a the request

app.get("/create", (req, res) => {
  // Making new data that takes its (model) and (schema) from {Task} | Then call the .save method to Pass the data | and Catch any errs
  const firstTask = new Task({ title: "Send from express!" });
  firstTask
    .save()
    .then(() => console.log(`new record inserted!`))
    .catch((err) => console.log(`This is your Err msg: ${err}`));

  // Send confirmation response to client
  res.send("Data Added to Database");
});
