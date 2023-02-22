const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sallerbuyer",
  password: "test123",
  port: 5432,
});

const createBuyer = (req, res) => {
  const { buyer_name, email } = req.body;

  pool.query(
    "INSERT INTO buyer (buyer_name,email) VALUES ($1,$2) RETURNING * ",
    [buyer_name, email],
    (err, result) => {
      if (err) {
        console.log(err);
        throw err;
      }
      res.status(200).json({
        msg: "buyer data created succesfully",
        data: result.rows[0],
      });
    }
  );
};

const getBuyer = (req, res) => {
  pool.query("SELECT * FROM buyer", (err, result) => {
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
  createBuyer,
  getBuyer,
};
