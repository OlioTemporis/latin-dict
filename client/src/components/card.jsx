import { Link, Form, redirect } from "react-router-dom";
import deleteWord from "../hooks/deleteWord";

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  const { lemma } = postData;
  await deleteWord(lemma);
  return redirect(`/`);
}

export default function Card({ id, lemma, head, pos_name, def, img }) {
  return (
    <div
      key={id}
      className="flex flex-col justify-center max-w-sm mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <h5 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        {head}
      </h5>
      <h6 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
        {pos_name}
      </h6>
      <img className="mb-3 rounded-lg" src={img} alt="" />
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-300">{def}</p>
      <div className="flex justify-end items-center gap-4">
        <Link
          to={`/edit/${lemma}`}
          relative="path"
          className="inline-flex self-end px-3 py-2 text-sm font-medium text-center text-slate-900 bg-yellow-200 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-400 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800 dark:text-slate-700"
        >
          Polī
        </Link>
        <Form method="delete">
          <input
            type="text"
            name="lemma"
            defaultValue={lemma}
            className="invisible"
          />
          <button
            type="submit"
            className="inline-flex self-end px-3 py-2 text-sm font-medium text-center text-slate-900 bg-red-200 rounded-lg hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-400 dark:hover:bg-red-700 dark:focus:ring-red-800 dark:text-slate-700"
          >
            Ēverte
          </button>
        </Form>
      </div>
    </div>
  );
}
