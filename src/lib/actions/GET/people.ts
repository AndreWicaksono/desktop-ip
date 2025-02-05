export default async function getPeople() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/people/1/");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
