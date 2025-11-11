import mongoose from "mongoose";

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

export default mongoose.models.ukdata || mongoose.model("ukdata", ukdataSchema);
