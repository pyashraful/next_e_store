import React from "react";
import UserLayout from "@components/UserLayout";
import AdminSidebar from "@components/admin/AdminSidebar";
import DashBoard from "@components/admin/Dashboard";

export default function index() {
  return <UserLayout sideber={<AdminSidebar />} main={<DashBoard />} />;
}
