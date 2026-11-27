import { notFound } from "next/navigation";

// any other path shows the 404 page in its language, inside the site layout
export default function CatchAll() {
  notFound();
}
