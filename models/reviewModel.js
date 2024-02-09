const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
  reviewAutor: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
},
{
  timestamps: true
})

const Review = mongoose.model('reviews', reviewSchema)
module.exports = Review