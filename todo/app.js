const express = require("express");
const { default: mongoose } = require("mongoose");
const methodOverride = require("method-override");
const Task = require("./models/tasks");
const router = require("./routes/tasks");
const app = express();
const port = 8000;
app.listen(port, () => console.log(`Express Server Connected`));

app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

// set EJS library into the Express and name it "View Engine"
app.set("view engine", "ejs");

/**
 * @this (app) is an instant for Express
 * @this (use) a method used to set the Middleware function
 * @this (express.urlencoded) is the middleware function that will handle the data were passing through the request and make it available in Req.body object (The Obj made by urlencoded itself)
 * @this (extended) is set as True, in order to parse more complex data structure
 */
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

mongoose
  .connect("mongodb://127.0.0.1:27017/Todo", {
    useNewUrlParser: true, // Check Notes.md for infos
    useUnifiedTopology: true, // Check Notes.md for infos
  })
  .then(() => console.log("MongoDB Database connected!"))
  .catch((err) =>
    console.log(`This is Err msg because of db connection: ${err}`)
  );
