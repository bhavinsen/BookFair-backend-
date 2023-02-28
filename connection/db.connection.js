const Pool = require("pg").Pool;
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sallerbuyer",
  password: "test123",
  port: 5432,
});

module.exports = pool;
