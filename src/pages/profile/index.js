import { useState, useEffect, useContext } from "react";
import UserLayout from "@components/UserLayout";
import ProfileMain from "@components/profile/ProfileMain";
import { Store } from "@utils/store";
import { useUser } from "@utils/hooks";
import { useRouter } from "next/router";

export default function Profile() {
  const [loading, setLoading] = useState(false);
  const { user, mutate, isLoading } = useUser();
  const router = useRouter();
  const { state } = useContext(Store);
  console.log("🚀 ~ file: index.js ~ line 10 ~ Profile ~ isLoading", isLoading);
  console.log("🚀 ~ file: index.js ~ line 10 ~ Profile ~ user", user);
  console.log("🚀 ~ file: index.js ~ line 12 ~ Profile ~ isLoading", isLoading);

  if (loading) return <h1>loading</h1>;

  useEffect(() => {
    if (isLoading) {
      setLoading(true);
    }
    if (!user) {
      setLoading(false);
      router.push("/");
    }
  }, [router, state.userInfo]);

  return (
    <UserLayout>
      <ProfileMain />
    </UserLayout>
  );
}

// export async function getServerSideProps(ctx) {

// }
