import { useEffect, useContext } from "react";
import UserLayout from "@components/UserLayout";
import ProfileSidebar from "@components/profile/ProfileSidebar";
import ProfileMain from "@components/profile/ProfileMain";
import { Store } from "@utils/store";
import { useRouter } from "next/router";
import { useUser } from "@utils/hook";

export default function Profile() {
  const { user, isLoading } = useUser();
  const router = useRouter();
  const { state } = useContext(Store);
  if (!user) {
    if (isLoading) {
      return <h1>Loading</h1>;
    } else {
      router.push("/");
    }
  } else {
  }

  // useEffect(() => {
  //   if (!state.userInfo) {
  //     router.push("/");
  //   }
  // }, [router, state.userInfo]);

  return <UserLayout sideber={<ProfileSidebar />} main={<ProfileMain />} />;
}
