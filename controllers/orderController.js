const Order = require("../models/orderModel");
const asyncHandler = require("express-async-handler");
const { response } = require("express");

const addOrder = asyncHandler(async (req) => {
  try {
    const order = await Order.create({ ...req });
    if (order) {
      return {
        ...order,
        success: true,
      };
    } else {
      return { message: "Invalid order data", success: false };
    }
  } catch (error) {
    return { message: "Error while adding order", error, success: false };
  }
});

const fetchOrders = asyncHandler(async () => {
  try {
    const orders = await Order.find({});
    if (orders) {
      return {
        orders,
        success: true,
      };
    } else {
      return { message: "Cannot fetch orders data", success: false };
    }
  } catch (error) {
    return { message: "Error while fetching orders data", error, success: false };
  }
});

const getOrders = asyncHandler(async (req, res) => {
  try {
    const orders = await Order.find({});
    if (orders) {
      res.status(200).json({
        orders,
        success: true,
      });
    } else {
      res.status(404).json({ message: "Cannot fetch orders data", success: false });
    }
  } catch (error) {
    res.status(404).json({ message: "Error while fetching orders data", error, success: false });
  }
});

module.exports = { addOrder, fetchOrders, getOrders };
