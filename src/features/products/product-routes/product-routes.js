import express from "express";
import ProductController from "../product-controller/product-controller.js";

//creating product router
const productRouter = express.Router();

//creating instance of productController
const productController = new ProductController();

//handling product routes
//route to handle create product post request
productRouter.post("/create", (req, res, next) => {
  productController.createProduct(req, res, next);
});

//route to handle get request to get all products
productRouter.get("/", (req, res, next) => {
  productController.getProducts(req, res, next);
});

//route to handle delete request to delete a product based on id
productRouter.delete("/:id", (req, res, next) => {
  productController.deleteProduct(req, res, next);
});

//route to handle post request to update a product quantity based on id
productRouter.post("/:id/update_quantity", (req, res, next) => {
  productController.updateProduct(req, res, next);
});

//exporting productRouter
export default productRouter;
