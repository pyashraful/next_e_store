import OrdersInfo from "@components/orders/OrdersInfo";
import UserLayout from "@components/UserLayout";
import ProfileSidebar from "@components/profile/ProfileSidebar";
// import OrdersInfo from "@components/orders/OrdersInfo";

export default function index() {
  return <UserLayout sideber={<ProfileSidebar />} main={<OrdersInfo />} />;
}
