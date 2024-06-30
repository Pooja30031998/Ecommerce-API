import { customErrorHandler } from "../../../middlewares/errorHandler-middleware.js";
import ProductRepository from "../product-model/product-repository.js";

export default class ProductController {
  constructor() {
    this.repository = new ProductRepository();
  }

  //controller logic to create new product
  async createProduct(req, res, next) {
    try {
      const productDetails = req.body;
      const addedProduct = await this.repository.addProduct(productDetails);
      return res.status(201).send({ product: addedProduct });
    } catch (error) {
      next(new customErrorHandler(400, error));
    }
  }

  //controller logic to get all product
  async getProducts(req, res, next) {
    try {
      const allProducts = await this.repository.getAll();
      return res.status(200).send({ products: allProducts });
    } catch (error) {
      next(new customErrorHandler(400, error));
    }
  }

  //controller logic to delete a product
  async deleteProduct(req, res, next) {
    try {
      const id = req.params.id;
      const deletedProduct = await this.repository.delete(id);
      if (deletedProduct) {
        return res.status(200).send({ message: "product deleted" });
      } else {
        return res.status(401).send({ message: "product not found" });
      }
    } catch (error) {
      next(new customErrorHandler(400, error));
    }
  }

  //controller logic to update a product quantity
  async updateProduct(req, res, next) {
    try {
      const id = req.params.id;
      const { number } = req.query;
      const updatedProduct = await this.repository.update(id, number);
      if (updatedProduct) {
        return res
          .status(200)
          .send({ product: updatedProduct, message: "updated successfully" });
      } else {
        return res.status(401).send({ message: "product not found" });
      }
    } catch (error) {
      next(new customErrorHandler(400, error));
    }
  }
}
