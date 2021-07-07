const db = require("../config/db");

module.exports = {
  itemFilter(id, res) {
    db.query(
      `SELECT items.*, files.path AS image
        FROM items
        RIGHT JOIN files ON (files.item_id = items.id)
        WHERE items.category_id = $1`,
      [id],
      (err, results) => {
        if (err) {
          console.log(err);
          res(`Database Error! ${err}`);
          return;
        }
        res(results.rows);
      }
    );
  },
  async getItemById(id) {
    const item = await db.query(
      `SELECT * FROM items
      WHERE id = $1`,
      [id]
    );
    return item.rows[0];
  },
};
