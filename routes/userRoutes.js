const router = require('express').Router()
const { register, registerAdmin, login, update, getUserById, getUserProfile } = require('../controllers/userController')
const protect = require('../middlewares/authMiddleware')

router.route('/register').post(register)
router.route('/registerAdmin').post(registerAdmin)
router.route('/login').post(login)
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, update)
// router
//   .route('/:id')
//   .get(protect, getUserById)
module.exports = router