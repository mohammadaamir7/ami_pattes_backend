const router = require("express").Router();

const { addProduct, getProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/productController");
const protect = require("../middlewares/authMiddleware");
const upload = require("../utils/upload");

router.route("/addProduct").post(upload.single("image"), addProduct);
router.route("/updateProduct/:id").put(upload.single("image"), updateProduct);
router.route("/deleteProduct/:id").delete(deleteProduct);
router.route("/getProduct/:id").get(getProduct);
router.route("/getProducts").get(getProducts);


module.exports = router;
