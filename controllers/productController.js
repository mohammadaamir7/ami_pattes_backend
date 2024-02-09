const expressAsyncHandler = require("express-async-handler");
const Product = require("../models/productModel");
const fs = require('fs')
const path = require('path');

const addProduct = expressAsyncHandler(async (req, res) => {
  try{
    const product = await Product.create({ ...req.body, image: req.fileName });
    res.status(200).json({message: 'Product added successfully', product})
  }catch(err){
    console.log(err)
  }

});

const getProduct = expressAsyncHandler(async (req, res) => {
  try{
    const product = await Product.findOne({ _id: '65c3dc184f7cf596301f3cab' });
    const readStream = fs.createReadStream(`${path.join(__dirname, '../uploads')}/${product.image}`)
    readStream.pipe(res)
  }catch(err){
    console.log(err)
  }
});

module.exports = { addProduct, getProduct };
