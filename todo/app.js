/**
 * @summary Import Express
 * @this {express} used to import the Express framework.
 */
const express = require("express");
/**
 * @summary Import Mongoose from Models
 * @this {mongoose} used to import the Mongoose library.
 */
const Task = require("./models/tasks");
/**
 * @summary Pass Express() to App, and set the Server Port to 8000
 * @this {app} is an instant for Express framework.
 */
const app = express();
const port = 8000;

const methodOverride = require("method-override");
const { default: mongoose } = require("mongoose");
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

// Create
// app.post("/create");

// find/show
// app.get("/");

// Delete
// app.delete("/delete/:id");

// Edit
// app.get("/update/:id");

// Update
// app.put("/update/:id");
