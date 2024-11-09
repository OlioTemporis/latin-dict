const pg = require("pg");
const Pool = pg.Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "latin_dict",
  password: "postgres",
  port: 5432,
});

module.exports = pool;
