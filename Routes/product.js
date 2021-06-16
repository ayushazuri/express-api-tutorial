const express = require("express");
const router = express.Router();

const { getProduct, getProducts, addQuery } = require("../controller/product"); //Controller which contains all the functions for the http methods

router.get("/", getProducts);

router.get("/query", addQuery);

router.get("/:id", getProduct);

module.exports = router;
