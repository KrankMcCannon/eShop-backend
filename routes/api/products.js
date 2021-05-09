const express = require("express");
const router = express.Router();
const products = require("../../Products");
const categories = require("../../Categories");
const { customAlphabet } = require("nanoid");

//Products
router.get("/", (req, res) => {
  res.json(products);
});

//Dynamic ID
router.get("/:id", (req, res) => {
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found) {
    const result = products.filter(
      (product) => product.id === parseInt(req.params.id)
    );
    res.json(result[0]);
  } else {
    res
      .status(404)
      .json({ message: `No Product with the id of ${req.params.id}` });
  }
});

// Create Product
router.post("/", (req, res) => {
  const category = categories.filter((c) => c.id === req.body.categoryId)[0];
  // const nanoid = customAlphabet("0123456789", 3);
  const newProduct = {
    id: Date.now(),
    name: req.body.name,
    category,
    price: req.body.price + " €",
    stock: req.body.stock,
  };
  products.push(newProduct);
  res.json(products);
});

//Update Product
router.put("/:id", (req, res) => {
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found) {
    const updateProduct = req.body;
    products.forEach((product) => {
      if (product.id === parseInt(req.params.id)) {
        product.name = updateProduct.name ? updateProduct.name : product.name;
        product.category.id = updateProduct.category.id
          ? updateProduct.category.id
          : product.category.id;
        product.category.name = updateProduct.category.name
          ? updateProduct.category.name
          : product.category.name;
        product.price = updateProduct.price
          ? updateProduct.price
          : product.price;
        product.stock = updateProduct.stock
          ? updateProduct.stock
          : product.stock;

        res.json({ message: "Product updated", product });
      }
    });
  } else {
    res
      .status(404)
      .json({ message: `No Product with the id of ${req.params.id}` });
  }
});

//Delete Product
router.delete("/:id", (req, res) => {
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found) {
    res.json({
      message: "Product Deleted",
      products: products.filter(
        (product) => product.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res
      .status(404)
      .json({ message: `No Product with the id of ${req.params.id}` });
  }
});

module.exports = router;
