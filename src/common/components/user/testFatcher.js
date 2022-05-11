import fetcher from "@utils/fetcher";

export const auth = (url, data) => {
  return fetcher(`/${url}`, data);
};
