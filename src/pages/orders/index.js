import OrdersInfo from "@components/orders/OrdersInfo";
import UserLayout from "@components/profile/UserLayout";

export default function Index() {
  return (
    <>
      <UserLayout>
        <OrdersInfo />
      </UserLayout>
    </>
  );
}
