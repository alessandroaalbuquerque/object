const mongoose = require("mongoose");

const Artigo = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    time: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

mongoose.model("artigo", Artigo);
