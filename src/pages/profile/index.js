import { useState, useEffect, useContext } from "react";
import UserLayout from "@components/UserLayout";
import ProfileMain from "@components/profile/ProfileMain";
import { Store } from "@utils/store";
import { useUser } from "@utils/hooks";
import { useRouter } from "next/router";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function Profile() {
  const { user, isLoading } = useUser();
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
        <Box
          sx={{
            display: "flex",
            minHeight: "100vh",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <UserLayout>
          <ProfileMain />
        </UserLayout>
      )}
    </>
  );
}

// export async function getServerSideProps(ctx) {

// }
