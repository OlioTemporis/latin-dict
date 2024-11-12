import { useLoaderData, Form, redirect } from "react-router-dom";
import getWord from "../hooks/getWord";
import updateWord from "../hooks/updateWord";

export async function loader({ params }) {
  const word = await getWord(params.lemma);
  return { word };
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await updateWord(postData);
  return redirect(`/`);
}

export default function EditWord() {
  const { word } = useLoaderData();
  console.log(word);

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
            defaultValue={word[0].lemma}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
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
            defaultValue={word[0].def}
            rows={5}
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
