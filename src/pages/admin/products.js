import React from "react";
import UserLayout from "@components/UserLayout";
import VendorSidebar from "@components/vendor/VendorSidebar";

export default function products() {
  return <UserLayout sideber={<VendorSidebar />} />;
}
