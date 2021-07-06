const axios = require("axios");

const api = axios.create({
  baseURL: `https://api.mercadopago.com/checkout/preferences?access_token=${process.env.ACCESS_TOKEN}`,
});

module.exports = {
  async pay(req, res) {
    console.log(process.env.ACCESS_TOKEN);
    const response = await api.post("", req.body);
    res.send(response.data.init_point);
  },
};

//const mercadopago = require("mercadopago");
//mercadopago.configurations.setAccessToken(process.env.ACCESS_TOKEN);
//https://api.mercadopago.com/checkout/preferences?access_token=TEST-13070538375753-070112-76183b453f9c0639634acd1ed83d58cc-289115739";
