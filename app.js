const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbSale = require("./seller/seller");
const dbBuyer = require("./buyer/buyer");
const dbShop = require("./shop/shop");
const dbBook = require("./book/book");
const dbOrder = require("./order/order");

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

const PORT = 9000;

dotenv.config();

app.use(express.json());

app.post("/seller/add", dbSale.createSeller);
app.get("/seller/view", dbSale.getSeller);

app.post("/buyer/add", dbBuyer.createBuyer);
app.get("/buyer/view", dbBuyer.getBuyer);

app.post("/shop/add", dbShop.createShop);
app.get("/shop/view", dbShop.getShop);

app.post("/book/add", dbBook.createBook);
app.get("/book/view", dbBook.getBook);

app.post("/order/add", dbOrder.createOrder);
app.get("/order/view", dbOrder.getOrder);

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
