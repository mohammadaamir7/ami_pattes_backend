const connectDB = require("./config/db");
const userRouter = require("./routes/userRoutes");
const orderRouter = require("./routes/orderRoutes");
const productRouter = require("./routes/productRoutes");
const cors = require("cors");
const express = require("express");

const app = express();
app.use(cors());

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/product", productRouter);

connectDB();

app.listen(5000, console.log("app listening on 5000"));
