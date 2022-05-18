import { useContext } from "react";
import OutlinedButton from "@components/OutlinedButton";
import { Store } from "@utils/store";
import Cookies from "js-cookie";
import React from "react";
import { useUser } from "src/common/hook/useUser";
import { authRequest } from "@utils/mutations";
import { useRouter } from "next/router";

export default function LogoutButton() {
  const { dispatch } = useContext(Store);
  const { mutate } = useUser();
  const router = useRouter();

  async function userLogout() {
    dispatch({ type: "USER_LOGOUT" });
    await authRequest.logout();
    mutate(null);
    router.push("/");
    Cookies.remove("cartItems");
  }

  return <OutlinedButton onClick={userLogout}>Logout</OutlinedButton>;
}
