const Task = require("../models/tasks");

module.exports = {
  index: (req, res) => {
    Task.find({})
      .exec()
      .then((tasks) => {
        res.render("todo.ejs", { todotasks: tasks });
      })
      .catch((err) => console.log(err));
  },
  create: (req, res) => {
    // Making new data that takes its (model) and (schema) from {Task} | Then call the .save method to Pass the data | and Catch any errs
    const firstTask = new Task({ title: req.body.title });
    firstTask
      .save()
      .then(() => console.log(`new record inserted!`))
      .then(() => res.redirect("/"))
      .catch((err) => console.log(`This is your Err msg: ${err}`));
  },
  edit: (req, res) => {
    const id = req.params.id;
    Task.find({})
      .exec()
      .then((tasks) => {
        res.render("todoEdit.ejs", { todotasks: tasks, idTask: id });
      })
      .catch((err) => {
        console.log(`Error from Update: ${err}`);
      });
  },
  update: (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { title: req.body.title })
      .then(res.redirect("/"))
      .catch((err) => {
        console.log(`You have an Error from put: ${err}`);
      });
  },
  delete: (req, res) => {
    Task.deleteOne({ _id: req.params.id })
      .then(res.redirect("/"))
      .catch((err) => console.log(`You have Error from Delete method ${err}`));
  },
};
