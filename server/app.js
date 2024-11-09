const express = require("express");
const cors = require("cors");
const app = express();

const wordRoutes = require("./routes/words");

app.use(cors());
app.use(express.json());

app.use(wordRoutes);

app.listen(3333, (req, res) => {
  console.log("Listening on port 3333");
});
