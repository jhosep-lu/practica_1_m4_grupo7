const express = require("express");
const productRouter = express.Router();
const { getAllProducts,addProduct,getProductId,updateProductId,deleteProductId } = require("../controllers/Product");

productRouter
    .route("/")
    .get(getAllProducts)
    .post(addProduct);

productRouter
    .route("/:id")
    .get(getProductId)
    .put(updateProductId)
    .delete(deleteProductId);


module.exports = productRouter;