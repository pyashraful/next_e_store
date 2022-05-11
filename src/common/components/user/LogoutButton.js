import { useContext } from "react";
import OutlinedButton from "@components/OutlinedButton";
import { Store } from "@utils/store";
import Cookies from "js-cookie";

import React from "react";

export default function LogoutButton() {
  const { dispatch } = useContext(Store);

  function userLogout() {
    dispatch({ type: "USER_LOGOUT" });

    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
  }

  return <OutlinedButton onClick={userLogout}>Logout</OutlinedButton>;
}
