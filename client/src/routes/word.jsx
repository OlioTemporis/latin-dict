import { useLoaderData } from "react-router-dom";
import getWord from "../hooks/getWord";
import Card from "../components/card";

export async function loader({ params }) {
  const word = await getWord(params.lemma);
  return { word };
}

export default function Word() {
  const { word } = useLoaderData();
  console.log(word);
  return (
    <>
      {word.length ? (
        <Card
          key={word[0].id}
          head={word[0].head}
          pos_name={word[0].pos_name}
          def={word[0].def}
          img={word[0].img}
        />
      ) : (
        <p>word not found</p>
      )}
    </>
  );
}
