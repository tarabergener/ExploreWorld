const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

export async function getData(endpoint = "flights") {
  const url = `${baseURL}/${endpoint}?access_key=${apiKey}`;
  console.log("Fetching from:", url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
