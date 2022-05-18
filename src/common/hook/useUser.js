import useSWR from "swr";
import fetcher from "../utils/fetcher";

export function useUser() {
  const { data, error, mutate } = useSWR(`/user`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
}
