const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    type: { type: String, default: "" },
    gender: { type: String, default: "" },
    material: { type: Array, default: [] },
    brandName: { type: String, default: "" },
    name: { type: String, default: "" },
    size: { type: Number, default: 0 },
    image: { type: String, default: "" },
    description: { type: String, default: "" },
    fullDescription: { type: String, default: "" },
    price: { type: Number, default: 0 },
    availability: { type: Number, default: 0 },
    popular: { type: Boolean, default: false },
    description: { type: String, default: "" },
    purchases: { type: Number, default: 0 },
    category: { type: String, default: "" },
    categories: { type: Array, default: [] },
    color: { type: Array, default: [] },
  },
  { versionKey: false }
);
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
