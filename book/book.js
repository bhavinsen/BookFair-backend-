const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sallerbuyer",
  password: "test123",
  port: 5432,
});

const createBook = (req, res) => {
  const { name, stock_count, shop_id } = req.body;

  pool.query(
    "INSERT INTO book (name,stock_count,shop_id) VALUES ($1,$2,$3) RETURNING * ",
    [name, stock_count, shop_id],
    (err, result) => {
      if (err) {
        console.log(err);
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
      console.log(err);
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
