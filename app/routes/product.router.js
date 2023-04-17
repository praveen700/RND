module.exports = app => {
    var router = require("express").Router();
    const product = require("../controllers/product.controller");
    router.post("/", product.fetchProduct);
    app.use('/api/products', router);
  };