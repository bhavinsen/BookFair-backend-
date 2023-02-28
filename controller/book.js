const pool = require("../connection/db.connection");

const createBook = (req, res) => {
  const { name, stock_count, shop_id } = req.body;

  pool.query(
    "INSERT INTO book (name,stock_count,shop_id) VALUES ($1,$2,$3) RETURNING * ",
    [name, stock_count, shop_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json({
        msg: "book data created succesfully",
        data: result.rows[0],
      });
    }
  );
};

const getBook = (req, res) => {
  pool.query("SELECT * FROM book", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

module.exports = {
  createBook,
  getBook,
};
