import { useEffect, useContext } from "react";
import UserLayout from "../../components/UserLayout";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import ProfileMain from "../../components/profile/ProfileMain";
import { Store } from "../../utils/store";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const [state] = useContext(Store);

  useEffect(() => {
    if (!state.userInfo) {
      router.push("/");
    }
  }, [router, state.userInfo]);

  return <UserLayout sideber={<ProfileSidebar />} main={<ProfileMain />} />;
}
