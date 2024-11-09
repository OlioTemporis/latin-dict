import axios from "axios";

export default async function getWord(lemma) {
  try {
    const response = await axios.get(`http://localhost:3333/words/${lemma}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching word data for lemma "${lemma}":`, error);
    throw error;
  }
}
