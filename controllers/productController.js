const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const fs = require("fs");
const path = require("path");

const addProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, image: req.fileName });
    res.status(200).json({ message: "Product added successfully", product });
  } catch (err) {
    console.log(err);
  }
});

const updateProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, { ...req.body, image: req.fileName });
    res.status(200).json({ message: "Product updated successfully", product });
  } catch (err) {
    console.log(err);
  }
});

const deleteProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted successfully", product });
  } catch (err) {
    console.log(err);
  }
});

const getProduct = expressAsyncHandler(async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    res.status(200).send(product);
  } catch (err) {
    console.log(err);
  }
});

const getProducts = expressAsyncHandler(async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
  }
});

module.exports = { addProduct, getProduct, getProducts, updateProduct, deleteProduct };
