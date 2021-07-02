const db = require('../config/db')

module.exports = {
    show(res) {
        db.query(`SELECT * FROM categories order by id`, (err, results) => {
            if (err) {
                return `Database Error! ${err}`
            }
            res(results.rows)
        }
        )
    }
}