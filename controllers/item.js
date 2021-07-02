const Item = require('../models/Item');

module.exports = {
    show(req, res) {
        Item.itemFilter(req.params.id, (items) => {
            if (!items) res.send('Items not found');
            return res.send(items)
        })
    }
}