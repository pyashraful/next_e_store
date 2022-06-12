// export default function fetcher(url, data = undefined) {
//   return fetch(`${window.location.origin}/api${url}`, {
//     method: data ? "POST" : "GET",
//     credentials: "include",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   }).then((res) => {
//     if (!res.ok) {
//       throw new Error();
//     }
//     return res.json();
//   });
// }

export default async function fetcher(url, data = undefined) {
  const res = await fetch(`${window.location.origin}/api${url}`, {
    method: data ? "POST" : "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  console.log("🚀 ~ file: fetcher.js ~ line 26 ~ fetcher ~ res", res);
  if (!res.ok) {
    const error = new Error();
    console.log("🚀 ~ file: fetcher.js ~ line 30 ~ fetcher ~ error", error);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
}
