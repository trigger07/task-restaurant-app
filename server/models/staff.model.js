const { Schema, model } = require("mongoose");

//Payload schema
const staffSchema = new Schema(
  {
    role: String,
    data: JSON
  }
);

module.exports = model("Staff", staffSchema);