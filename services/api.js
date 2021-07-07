const axios = require("axios");
require("dotenv").config();

const api = axios.create({
  baseURL: `https://api.mercadopago.com/checkout/preferences?access_token=${process.env.ACCESS_TOKEN}`,
});

module.exports = api;
