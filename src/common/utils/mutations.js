import fetcher from "./fetcher";

export const authRequest = (mode, body) => {
  console.log("🚀 ~ file: mutations.js ~ line 4 ~ authRequest ~ body", body);
  return fetcher(`/${mode}`, body);
};

authRequest.logout = () => {
  return fetcher("/logout", "logout");
};
