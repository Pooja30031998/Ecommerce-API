//importing environment variables
import dotenv from "dotenv";
dotenv.config();

//importing modules
import express from "express";
import { appLevelErrorHandlerMiddleware } from "./src/middlewares/errorHandler-middleware.js";
import productRouter from "./src/features/products/product-routes/product-routes.js";
import { connectToDb } from "./config/db.js";

//setting up server
const server = express();

//middleware to parse json data
server.use(express.json());

//handling all routes
server.use("/products", productRouter);

//app level middleware to handle error
server.use(appLevelErrorHandlerMiddleware);

//server connecting to port and to database
server.listen(process.env.PORT, () => {
  connectToDb();
  console.log(`server listening to port ${process.env.PORT}`);
});
