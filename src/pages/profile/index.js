// import { useState, useEffect, useContext } from "react";
import UserLayout from "@components/profile/UserLayout";
import ProfileMain from "@components/profile/ProfileMain";
// import { Store } from "@utils/store";
// import { useUser } from "src/common/hook/useUser";
// import Router, { useRouter } from "next/router";
// import CircularProgress from "@mui/material/CircularProgress";
// import Box from "@mui/material/Box";
// import LoadingCircle from "@components/LoadingCircle";
import { validateToken } from "@utils/auth";

export default function Profile({ user }) {
  // console.log("🚀 ~ file: index.js ~ line 13 ~ Profile ~ user", user);
  // const { user, isLoading, error, loggedOut } = useUser();
  // console.log("🚀 ~ file: index.js ~ line 13 ~ Profile ~ error", error);
  // console.log("🚀 ~ file: index.js ~ line 13 ~ Profile ~ isLoading", isLoading);
  // console.log("🚀 ~ file: index.js ~ line 13 ~ Profile ~ user", user);
  // const router = useRouter();
  // const { state } = useContext(Store);

  // useEffect(() => {
  //   if (loggedOut) {
  //     Router.replace("/");
  //   }
  // }, [loggedOut]);

  return (
    <>
      {/* {isLoading ? (
        <LoadingCircle />
      ) : (
        <UserLayout>
          <ProfileMain />
        </UserLayout>
      )} */}
      <UserLayout>
        <ProfileMain />
      </UserLayout>
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  let user;

  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
    return {
      props: user,
    };
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
};
