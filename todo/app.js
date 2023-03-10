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

const methodOverride = require("method-override");
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// Let the App Listen at Port 8000
app.listen(port, () => console.log(`Express Server Connected`));
// Connect the Mongoose
// Then Console log to Confirm
// or Catch the Err and Log it

// set EJS library into the Express and name it "View Engine"
app.set("view engine", "ejs");

/**
 * @this (app) is an instant for Express
 * @this (use) a method used to set the Middleware function
 * @this (express.urlencoded) is the middleware function that will handle the data were passing through the request and make it available in Req.body object (The Obj made by urlencoded itself)
 * @this (extended) is set as True, in order to parse more complex data structure
 */
app.use(express.urlencoded({ extended: true }));

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

// Set post() method to define a route that listen for "/create" path
// Add callback function that gets executed when the server receives a the request

app.post("/create", (req, res) => {
  // Making new data that takes its (model) and (schema) from {Task} | Then call the .save method to Pass the data | and Catch any errs
  const firstTask = new Task({ title: req.body.title });
  firstTask
    .save()
    .then(() => console.log(`new record inserted!`))
    .then(() => res.redirect("/"))
    .catch((err) => console.log(`This is your Err msg: ${err}`));
});

// find/show
app.get("/", (req, res) => {
  Task.find({})
    .exec()
    .then((tasks) => {
      res.render("todo.ejs", { todotasks: tasks });
    })
    .catch((err) => console.log(err));
});

// Delete
app.delete("/delete/:id", (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then(res.redirect("/"))
    .catch((err) => console.log(`You have Error from Delete method ${err}`));
});

// Update
app.get("/update/:id", (req, res) => {
  const id = req.params.id;
  Task.find({})
    .exec()
    .then((tasks) => {
      res.render("todoEdit.ejs", { todotasks: tasks, idTask: id });
    })
    .catch((err) => {
      console.log(`Error from Update: ${err}`);
    });
});

app.put("/update/:id", (req, res) => {
  const id = req.params.id;
  Task.findByIdAndUpdate(id, { title: req.body.title })
    .then(res.redirect("/"))
    .catch((err) => {
      console.log(`You have an Error from put: ${err}`);
    });
});
