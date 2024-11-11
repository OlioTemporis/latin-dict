import axios from "axios";

export default async function createWord() {
  try {
    const response = await axios.post(`http://localhost:3333/words`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching word data for lemma:`, error);
    throw error;
  }
}
