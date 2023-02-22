const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sallerbuyer",
  password: "test123",
  port: 5432,
});

const createSeller = (req, res) => {
  const { seller_name, email } = req.body;

  pool.query(
    "INSERT INTO seller (seller_name,email) VALUES ($1,$2) RETURNING * ",
    [seller_name, email],
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      res.status(200).json({
        msg: "seller data created succesfully",
        data: result.rows[0],
      });
    }
  );
};

const getSeller = (req, res) => {
  pool.query("SELECT * FROM seller", (err, result) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.json({
      data: result.rows,
    });
  });
};

module.exports = {
  createSeller,
  getSeller,
};
