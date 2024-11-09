import { useLoaderData } from "react-router-dom";
import getWord from "../hooks/getWord";

export async function loader({ params }) {
  const word = await getWord(params.lemma);
  return { word };
}

export default function Word() {
  const { word } = useLoaderData();
  return (
    <>
      <h1>Word page</h1>

      {word.length ? (
        <ul>
          {word.map((w) => (
            <li key={w.id}>
              <p>{w.head}</p>
              <p>{w.pos_name}</p>
              <p>{w.def}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>word not found</p>
      )}
    </>
  );
}
