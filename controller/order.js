const pool = require("../connection/db.connection");

const createOrder = (req, res) => {
  const { count, name, address, book_id, buyer_id, shop_id } = req.body;

  pool.query(
    "INSERT INTO ordertbl (count, name, address, book_id, buyer_id ,shop_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING * ",
    [count, name, address, book_id, buyer_id, shop_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json({
        msg: "order data created succesfully",
        data: result.rows[0],
      });
    }
  );
};

const getOrder = (req, res) => {
  pool.query("SELECT * FROM ordertbl", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

module.exports = {
  createOrder,
  getOrder,
};
