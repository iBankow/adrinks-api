const cate = require('../models/Category');

module.exports = {
    index(req, res) {
        cate.show((result) => {
            if (!result) res.send('Items not found');
            return res.send(result)
        })
    }
}