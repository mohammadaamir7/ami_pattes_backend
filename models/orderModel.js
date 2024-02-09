const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  pickupUsername: {
    type: String,
    required: true
  },
  pickupEmail: {
    type: String,
    required: true
  },
  pickupAddress: {
    type: String,
    required: true
  },
  pickupCountry: {
    type: String,
    required: true
  },
  pickupCity: {
    type: String,
    required: true
  },
  pickupPostalCode: {
    type: String,
    required: true
  },
  pickupCountryCode: {
    type: String,
    required: true
  },
  pickupPhoneNumber: {
    type: String,
    required: true
  },
  deliveryUsername: {
    type: String,
    required: true
  },
  deliveryEmail: {
    type: String,
    required: true
  },
  deliveryAddress: {
    type: String,
    required: true
  },
  deliveryCountry: {
    type: String,
    required: true
  },
  deliveryCity: {
    type: String,
    required: true
  },
  deliveryPostalCode: {
    type: String,
    required: true
  },
  deliveryCountryCode: {
    type: String,
    required: true
  },
  deliveryPhoneNumber: {
    type: String,
    required: true
  },
  contentDetails: {
    type: String,
    required: true
  },
  packageDescription: {
    type: String,
    required: true
  },
  packageWeight: {
    type: String,
    required: true
  },
  packageWidth: {
    type: String,
    required: true
  },
  pacakageLength: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "pending"
  }
},
{
  timestamps: true
})

const Order = mongoose.model('orders', orderSchema)
module.exports = Order