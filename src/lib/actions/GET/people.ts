export default async function getPeople() {
  // This url should be stored within .env file
  const res = await fetch("https://swapi.dev/api/people/1/");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
