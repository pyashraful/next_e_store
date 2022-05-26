import fetcher from "./fetcher";

export const authRequest = (mode, body) => {
  return fetcher(`/${mode}`, body);
};

authRequest.logout = () => {
  return fetcher("/logout", "logout");
};
