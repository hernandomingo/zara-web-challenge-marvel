import { redirect } from "next/navigation";

export default function Home() {
  redirect("/characters");

  return <div>Home Page</div>;
}
