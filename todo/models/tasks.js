/**
 * @summary Import Mongoose
 * @this {mongoose} used to import the Mongoose library.
 */
const mongoose = require("mongoose");

/**
 * @summary Create New Mongoose Schema {Record structure contains the default key and value type}
 * @this {schema} is used to Create New Mongoose Schema
 */
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});

/**
 * @summary Export the  Model {Collection} that takes {"its Name", and its Data Schema structure}
 * @this {module.export} is used to Create New Model
 */
module.exports = mongoose.model("Task", schema);
