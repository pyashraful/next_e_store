import fatcher from "./fatcher";

export const authRequest = (mode, body) => {
  return fatcher(`/${mode}`, body);
};
