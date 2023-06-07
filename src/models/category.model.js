import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      minLength: 2,
    },
    products: [
      {
        type: mongoose.Types.ObjectId,
        ref: "products",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);
export default mongoose.model("Category", categorySchema);
