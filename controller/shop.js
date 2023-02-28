const pool = require("../connection/db.connection");

const createShop = (req, res) => {
  const { shop_name, seller_id } = req.body;

  pool.query(
    "INSERT INTO shop (shop_name,seller_id) VALUES ($1,$2) RETURNING * ",
    [shop_name, seller_id],
    (err, result) => {
      if (err) {
        throw err;
      }
      res.status(200).json({
        msg: "shop data created succesfully",
        data: result.rows[0],
      });
    }
  );
};

const getShop = (req, res) => {
  pool.query("SELECT * FROM shop", (err, result) => {
    if (err) {
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

module.exports = {
  createShop,
  getShop,
};
