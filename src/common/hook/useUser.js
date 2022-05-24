import useSWR from "swr";
// import fetcher from "../utils/fetcher";

// const fetcher = (url) =>
// fetch(`${window.location.origin}/api${url}`, {
//   method: "GET",
//   credentials: "include",
// }).then((res) => {
//   if (res.status > 399 && res.status < 200) {
//     throw new Error();
//   } else {
//     console.log(res);
//     return res.json();
//   }
// });

const fetcher = async (url) => {
  const res = await fetch(`${window.location.origin}/api${url}`);
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export function useUser() {
  const { data, error, mutate } = useSWR("/user", fetcher, {
    revalidateOnFocus: false,
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
