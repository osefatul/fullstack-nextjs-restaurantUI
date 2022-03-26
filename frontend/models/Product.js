import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      maxLength: 60,
    },

    desc: {
      type: String,
      required: true,
      maxLength: 200,
    },

    img: {
      type: String,
      required: true,
    },

    prices: {
      type: [Number],
      required: true,
    },

    // This is when we choose those different options for pizza it will bring changes to the prices as well.
    extraOptions: {
      type: [
        {
          text: { type: String, required: true },
          price: { type: Number, required: true },
        },
      ],
    },
  },

  { timestamps: true }
);

// This look in to the database if there is already a model for product created. yes, then don't create another one, if no, then create a new one.
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
