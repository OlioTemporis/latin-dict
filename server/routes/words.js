const express = require("express");
const router = express.Router();

const wordController = require("../controllers/word-controller");

router.get("/", wordController.getHome);

module.exports = router;
