import OrdersInfo from "@components/orders/OrdersInfo";
import UserLayout from "@components/UserLayout";

export default function index() {
  return (
    <UserLayout>
      <OrdersInfo />
    </UserLayout>
  );
}
