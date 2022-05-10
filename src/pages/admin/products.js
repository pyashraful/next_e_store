import React from "react";
import UserLayout from "@components/UserLayout";
import VendorSidebar from "@components/admin/AdminSidebar";

export default function products() {
  return <UserLayout sideber={<VendorSidebar />} />;
}
