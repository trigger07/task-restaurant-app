const { Schema, model } = require("mongoose");

const staffSchema = new Schema(
  {
    role: String,
    data: JSON
  }
);

module.exports = model("Staff", staffSchema);