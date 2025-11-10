const mongoose = require("mongoose");

const ukdataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Target: [String],
    Targetyear: [Number],
    Metric: [String],
    Baseline: {
      type: String,
    },
  },
  {
    collection: "ukdata",
  }
);

module.exports =
  mongoose.models.ukdata || mongoose.model("ukdata", ukdataSchema);
