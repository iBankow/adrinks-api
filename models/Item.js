const db = require('../config/db')

module.exports = {
    itemFilter(id, res) {
        db.query(`SELECT item.*, files.path AS file_path
        FROM item
        RIGHT JOIN files ON (files.product_id = item.id)
        WHERE item.category_id = $1`, [id], (err, results) => {
            if (err) {
                return `Database Error! ${err}`
            }
            res(results.rows)
        }
        )
    }
}