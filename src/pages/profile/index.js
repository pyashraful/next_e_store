import { useEffect, useContext } from "react";
import UserLayout from "@components/UserLayout";
import ProfileMain from "@components/profile/ProfileMain";
import { Store } from "@utils/store";
import { useRouter } from "next/router";
import { useUser } from "@utils/hooks";

export default function Profile() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { state } = useContext(Store);
  console.log("🚀 ~ file: index.js ~ line 10 ~ Profile ~ isLoading", isLoading);
  console.log("🚀 ~ file: index.js ~ line 10 ~ Profile ~ user", user);
  console.log("🚀 ~ file: index.js ~ line 12 ~ Profile ~ isLoading", isLoading);

  // if (isLoading) return <h1>loading....</h1>;

  // useEffect(() => {
  //   if (!state.userInfo) {
  //     router.push("/");
  //   }
  // }, [router, state.userInfo]);

  return (
    <UserLayout>
      <ProfileMain />
    </UserLayout>
  );
}

// export async function getServerSideProps(ctx) {

// }
