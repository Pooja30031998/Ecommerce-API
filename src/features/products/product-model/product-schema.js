import mongoose from "mongoose";

//defining product schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

//creating product collection using mongoose model and defined product schema
const ProductModel = mongoose.model("product", productSchema);

//exporting product model
export default ProductModel;
