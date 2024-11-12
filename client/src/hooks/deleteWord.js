import axios from "axios";

export default async function deleteWord(lemma) {
  await axios
    .delete(
      `http://localhost:3333/words/${lemma}/delete`,
      {
        lemma: lemma,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
