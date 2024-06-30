import ProductModel from "./product-schema.js";

export default class ProductRepository {
  //adding new product to database
  async addProduct(productData) {
    try {
      const newProduct = new ProductModel({
        name: productData.name,
        quantity: productData.quantity,
      });
      const savedProduct = await newProduct.save();
      return savedProduct;
    } catch (err) {
      throw err;
    }
  }

  //get all product from database
  async getAll() {
    try {
      const allProducts = await ProductModel.find();
      return allProducts;
    } catch (err) {
      throw err;
    }
  }

  //deleting a product from database
  async delete(id) {
    try {
      const deletedProduct = await ProductModel.findByIdAndDelete(id);
      return deletedProduct;
    } catch (err) {
      throw err;
    }
  }

  //updating a product quantity in database
  async update(id, number) {
    try {
      const updatedProduct = await ProductModel.findByIdAndUpdate(
        id,
        {
          $inc: { quantity: number },
        },
        { returnOriginal: false }
      );
      return updatedProduct;
    } catch (err) {
      throw err;
    }
  }
}
