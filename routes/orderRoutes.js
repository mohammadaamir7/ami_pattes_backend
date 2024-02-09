const router = require('express').Router()
const { getOrders } = require('../controllers/orderController')
const protect = require('../middlewares/authMiddleware')

router.route('/getOrders').get(protect, getOrders)

module.exports = router