import axios from "axios";

export default async function postWord({ lemma, head, pos_id, def, img }) {
  await axios
    .post(
      "http://localhost:3333/words",
      {
        lemma: lemma,
        head: head,
        pos_id: pos_id,
        def: def,
        img: img,
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
