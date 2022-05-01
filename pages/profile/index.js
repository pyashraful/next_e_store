import { useEffect, useContext } from "react";
import UserLayout from "../../components/profile/UserLayout";
import ProfileMain from "../../components/profile/ProfileMain";
import { Store } from "../../utils/store";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const [state] = useContext(Store);

  useEffect(() => {
    if (Object.keys(state.userInfo).length === 0) {
      router.push("/");
    }
  }, [router, state.userInfo]);

  return (
    <UserLayout>
      <ProfileMain />
    </UserLayout>
  );
}
