import { useRouter } from "next/router";

export default function Details() {
  const route = useRouter();
  const { id } = route.query;
  console.log(id);

  return <h1>Details</h1>;
}
