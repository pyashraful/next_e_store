import useSWR from "swr";
import fatcher from "./fatcher";

export function useUser() {
  const { data, error } = useSWR("/user", fatcher);
  console.log("🚀 ~ file: hook.js ~ line 6 ~ useUser ~ error", error);
  console.log("🚀 ~ file: hook.js ~ line 6 ~ useUser ~ data", data);
  return { user: data, isLoading: !data && !error, isErrror: error };
}
