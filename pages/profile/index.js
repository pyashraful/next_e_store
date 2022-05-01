import { useEffect, useContext } from "react";
import UserLayout from "../../components/profile/UserLayout";
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

  return (
    <UserLayout>
      <ProfileMain />
    </UserLayout>
  );
}
