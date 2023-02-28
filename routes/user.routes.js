const express = require("express");
const route = express();

const dbSale = require("../controller/seller");
const dbBuyer = require("../controller/buyer");
const dbShop = require("../controller/shop");
const dbBook = require("../controller/book");
const dbOrder = require("../controller/order");

route.post("/seller/add", dbSale.createSeller);
route.get("/seller/view", dbSale.getSeller);
route.post("/buyer/add", dbBuyer.createBuyer);
route.get("/buyer/view", dbBuyer.getBuyer);

route.post("/shop/add", dbShop.createShop);
route.get("/shop/view", dbShop.getShop);

route.post("/book/add", dbBook.createBook);
route.get("/book/view", dbBook.getBook);

route.post("/order/add", dbOrder.createOrder);
route.get("/order/view", dbOrder.getOrder);

module.exports = route;
