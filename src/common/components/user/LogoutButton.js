import { useContext } from "react";
import OutlinedButton from "@components/OutlinedButton";
import { Store } from "@utils/store";
import Cookies from "js-cookie";
import React from "react";
import { useUser } from "@utils/hooks";
import { authRequest } from "@utils/mutations";

export default function LogoutButton() {
  const { dispatch } = useContext(Store);
  const { mutate } = useUser();

  async function userLogout() {
    dispatch({ type: "USER_LOGOUT" });
    await authRequest.logout();
    mutate(null);
    Cookies.remove("cartItems");
  }

  return <OutlinedButton onClick={userLogout}>Logout</OutlinedButton>;
}
