import Image from "next/image";

async function getUsers() {
  const res = await fetch("http://localhost:3000/api", { cache: "no-cache" });
  const data = await res.json();
  console.log("data received", data);
  return data;
}

export default async function Home() {
  const users = await getUsers();
  return (
    <main className="flex flex-col border-2 border-blue-700 mb-20 p-4">
      <p>Hello world!</p>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <h1 className="text-4xl font-medium antialised">Your workouts</h1>
    </main>
  );
}
