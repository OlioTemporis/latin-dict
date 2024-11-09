const pool = require("../data/database");

function getHome(req, res) {
  res.send("Welcome to the Home page!");
}

module.exports = {
  getHome: getHome,
};
