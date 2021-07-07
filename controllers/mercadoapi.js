const api = require("../services/api");
const Item = require("../models/Item");

const mercadopago = require("mercadopago");
mercadopago.configure({
  access_token: process.env.ACCESS_TOKEN,
});

module.exports = {
  async pay(req, res) {
    let reqItems = req.body.items;
    for (var item of reqItems) {
      const itemdb = await Item.getItemById(item.id);
      item.unit_price = itemdb.price;
      item.currency_id = "BRL";
    }

    let preferences = { items: [...reqItems] };
    console.log(preferences);

    mercadopago.preferences
      .create(preferences)
      .then(function (response) {
        // Este valor substituirá a string "<%= global.id %>" no seu HTML
        global.id = response.body.id;
        res.send(response.body.init_point);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
