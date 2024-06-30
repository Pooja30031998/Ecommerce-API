# Ecommerce-API
An API for an ecommerce platform admin to manage product inventory

# Environment Variables
To run the application, set up the following environment variables in a ```.env``` file at the root of your project:

```
PORT=3000
DB_URL=mongodb://localhost:27017/mydatabase
```

# Installation
To run this project locally, follow these steps:
1. Clone the repository to your local machine
2. Navigate to the project directory
3. Install dependencies
   ```
   npm install
   ```
4. Start the server
   ```
   node index.js
   ```
5. Open web browser and visit ```http://localhost:3000``` to access the site.

# API Documentation
## Routes

### Post a Product
- URL [POST]: ``` /products/create ```
- Method: ```POST```
- status:201
- response: product: {name: laptop, quantity: 10}
- Description: Post a new product

### Get all Products
- URL [GET]: ``` /products ```
- Method: ```GET```
- status:200
- response: products: [{name: laptop, quantity: 10}]
- Description: Get all products

### Delete a Product based on id
- URL [DELETE]: ``` /products/:id ```
- Method: ```DELETE```
- status:200
- response: message: {“product deleted”}
- status:401
- response: message: {“product not found”}
- Description: delete a product

### Delete a Product quantity based on id
- URL [POST]: ``` /products/:id/update_quantity/?number=10 ```
- Method: ```POST```
- status:200
- response: {product:{name: laptop, quantity: 20}, message:{“product not found”}}
- status:401
- response:  message:{“product not found”}
- Description: update a product quantity

# Technologies Used
- Express.js
- Node.js
- MongoDB

# Contributing
Contributions are welcome! Please create a new branch for your changes and submit a pull request for review.

