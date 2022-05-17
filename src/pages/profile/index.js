import { useState, useEffect, useContext } from "react";
import UserLayout from "@components/UserLayout";
import ProfileMain from "@components/profile/ProfileMain";
import { Store } from "@utils/store";
import { useUser } from "@utils/hooks";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import LoadingCircle from "@components/LoadingCircle";

export default function Profile() {
  const { user, isLoading } = useUser();
  console.log("🚀 ~ file: index.js ~ line 12 ~ Profile ~ user", user);
  const router = useRouter();
  const { state } = useContext(Store);

  useEffect(() => {
    if (!user) {
      router.push("/");
    }
  }, [router, state.userInfo]);

  return (
    <>
      {isLoading ? (
        <LoadingCircle />
      ) : (
        <UserLayout>
          <ProfileMain />
        </UserLayout>
      )}
    </>
  );
}
