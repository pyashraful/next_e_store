import OrdersInfo from "../../components/orders/OrdersInfo";
import UserLayout from "../../components/profile/UserLayout";

export default function index() {
  return (
    <UserLayout>
      <OrdersInfo />
    </UserLayout>
  );
}
