const baseURL = import.meta.env.VITE_BASE_URL;
const apiKey = import.meta.env.VITE_API_KEY;

// export async function getData(endpoint = "flights") {
//   const url = `${baseURL}/${endpoint}?access_key=${apiKey}`;
//   console.log("Fetching from:", url);

//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`API error: ${response.status}`);
//   }

//   return response.json();
// }

export async function getData(endpoint) {
  // DEVELOPMENT MODE
  if (import.meta.env.DEV) {
    const response = await fetch(`/src/public/json/${endpoint}.json`);
    return response.json();
  }

  // PRODUCTION API
  const response = await fetch(
    `https://api.aviationstack.com/v1/${endpoint}?access_key=YOUR_KEY`
  );

  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }

  return response.json();
}
