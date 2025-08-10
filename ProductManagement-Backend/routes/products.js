const express = require("express");
const Product = require("../models/Product");
const Category = require("../models/Category");
const { upload } = require("../config/cloudinary");

const router = express.Router();

router.post("/products", upload.single("image"), async (req, res) => {
  try {
    const { productCode, productName, category, price, description } = req.body;

    if (!productCode || !productName || !category || !price) {
      return res.status(400).json({ message: "Required fields missing" });
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ message: "Invalid category" });
    }

    const productData = {
      productCode,
      productName,
      category,
      price: parseFloat(price),
      description,
    };

    if (req.file) {
      productData.imageUrl = req.file.path;
    }

    const product = new Product(productData);
    const savedProduct = await product.save();

    const populatedProduct = await Product.findById(savedProduct._id).populate(
      "category"
    );
    res.status(201).json(populatedProduct);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Product code already exists" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find().populate("category", "categoryName");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "categoryName"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/products/:id", upload.single("image"), async (req, res) => {
  try {
    const { productCode, productName, category, price, description } = req.body;

    const updateData = {};
    if (productCode) updateData.productCode = productCode;
    if (productName) updateData.productName = productName;
    if (category) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return res.status(400).json({ message: "Invalid category" });
      }
      updateData.category = category;
    }
    if (price) updateData.price = parseFloat(price);
    if (description !== undefined) updateData.description = description;

    if (req.file) {
      updateData.imageUrl = req.file.path;
    }

    const product = await Product.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true,
    }).populate("category", "categoryName");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ message: "Product code already exists" });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
});

router.delete("/products/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
