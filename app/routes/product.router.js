module.exports = app => {
    var router = require("express").Router();
    const product = require("../controllers/product.controller");
    router.post("/", product.createProductGroup);
    router.get("/", product.fetchProductgroup);
    router.put("/:id", product.updateProductGroup);
    router.delete("/:id", product.deleteProductGroup);
    app.use('/api/products-group', router);
  };