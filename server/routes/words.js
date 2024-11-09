const express = require("express");
const router = express.Router();

const wordController = require("../controllers/word-controller");

router.get("/", wordController.getHome);
router.get("/words", wordController.getWords);
router.get("/words/:lemma", wordController.getWord);
router.post("/words", wordController.createWord);
router.delete("/words/:id/delete", wordController.deleteWord);
router.post("/words/:id/edit", wordController.updateWord);

module.exports = router;
