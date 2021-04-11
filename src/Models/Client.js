const { Schema, model } = require("mongoose");

const ClientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Clients", ClientSchema);
