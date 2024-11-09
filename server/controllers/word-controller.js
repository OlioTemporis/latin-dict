const pool = require("../data/database");

function getHome(req, res) {
  res.send("Welcome to the Home page!");
}

async function getWords(req, res) {
  const query = `SELECT * FROM words;`;
  try {
    const result = await pool.query(query);
    res.status(201).json(result.rows);
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to retrieve authors" });
  }
}

async function getWord(req, res) {
  const { id } = req.params;
  const query = `
        SELECT words.id, words.lemma, words.head, pos.name AS pos_name, words.def, words.img 
        FROM words
        INNER JOIN pos ON words.pos_id = pos.id
        WHERE words.id = $1;
      `;
  const values = [id];
  try {
    const result = await pool.query(query, values);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to fetch word data" });
  }
}

async function createWord(req, res) {
  const { lemma, head, pos_id, def, img } = req.body;
  const query = `
      INSERT INTO words (lemma, head, pos_id, def, img)
      VALUES ($1, $2, $3, $4, $5);
    `;
  const values = [lemma, head, pos_id, def, img];

  try {
    await pool.query(query, values);
    res.status(201).json({ message: "Successfully added word :" + values });
  } catch (error) {
    console.error(`Error connecting to PSQL pool: `, error);
    res.status(500).json({ error: "Failed to add word" });
  }
}

async function deleteWord(req, res) {
  const { id } = req.params;
  const query = `
      DELETE FROM words
      WHERE id = $1;
    `;
  const values = [id];

  try {
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      res.status(404).json({ message: "Word not found" });
    } else {
      res.status(200).json({ message: "Successfully deleted Word" });
    }
  } catch (error) {
    console.error(`Error deleting Word: `, error);
    res.status(500).json({ error: "Failed to delete Word" });
  }
}

async function updateWord(req, res) {
  const { id } = req.params;
  const { def } = req.body;
  const query = `
      UPDATE words
      SET def = $1
      WHERE id = $2;
    `;
  const values = [def, id];
  console.log(values);
  try {
    await pool.query(query, values);
    res.status(200).json({
      message: "Successfully updated word",
    });
  } catch (error) {
    console.error(`Error updating word: `, error);
    res.status(500).json({ error: "Failed to update word data" });
  }
}

module.exports = {
  getHome: getHome,
  getWords: getWords,
  getWord: getWord,
  createWord: createWord,
  deleteWord: deleteWord,
  updateWord: updateWord,
};
