import axios from "axios";
import { Form, redirect } from "react-router-dom";

async function postWord({ lemma, head, pos_id, def, img }) {
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

export async function action({ request }) {
  const formData = await request.formData();
  const { lemma, head, pos_id, def, img } = Object.fromEntries(formData);
  console.log(lemma, head, pos_id, def, img);
  await postWord({ lemma, head, pos_id, def, img });
  console.log("word succesfully added");
  return redirect(`/`);
}

export default function NewWord() {
  return (
    <>
      <Form method="post" className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="lemma"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Lemma
          </label>
          <input
            type="text"
            placeholder="lemma"
            name="lemma"
            defaultValue={""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="head"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Head
          </label>
          <input
            type="text"
            placeholder="head"
            name="head"
            defaultValue={""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="pos_id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select a part of speech:
          </label>
          <select
            id="pos_id"
            name="pos_id"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option defaultValue>Select a part of speech</option>
            <option value={1}>1 | Nōmen</option>
            <option value={2}>2 | Prōnōmen</option>
            <option value={3}>3 | Adjectīvum</option>
            <option value={4}>4 | Verbum</option>
            <option value={5}>5 | Adverbum</option>
            <option value={6}>6 | Conjūnctiō</option>
            <option value={7}>7 | Praepositiō</option>
            <option value={8}>8 | Interjectiō</option>
          </select>
        </div>
        <div className="mb-5">
          <label
            htmlFor="lemma"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Definition
          </label>
          <textarea
            type="text"
            placeholder="definition"
            name="def"
            defaultValue={""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="img"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Image link
          </label>
          <input
            type="text"
            placeholder="img"
            name="img"
            defaultValue={""}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
        <div className="mb-5">
          <button
            type="submit"
            className="focus:outline-none text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-200 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-700"
          >
            Adde
          </button>
        </div>
      </Form>
    </>
  );
}
