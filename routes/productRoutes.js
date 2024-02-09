const router = require("express").Router();

const { addProduct, getProduct } = require("../controllers/productController");
const protect = require("../middlewares/authMiddleware");
const upload = require("../utils/upload");

router.route("/addProduct").post(upload.single("image"), addProduct);
router.route("/getProduct").get(getProduct);

module.exports = router;
