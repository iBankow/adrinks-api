const express = require("express");
const item = require("./controllers/item");
const cate = require("./controllers/category");
const payment = require("./controllers/mercadoapi");

const routes = express.Router();

routes.get("/", (req, res) => {
  return res.send("Hello World!");
});

routes.post("/process_payment", payment.pay);
routes.get("/items/:id", item.show);
routes.get("/cat", cate.index);

module.exports = routes;
