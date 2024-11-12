import axios from "axios";
export default async function updateWord({ lemma, def }) {
  await axios
    .post(
      `http://localhost:3333/words/${lemma}/edit`,
      {
        lemma: lemma,
        def: def,
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
