import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CustomList from "../CustomList";
import Paper from "@mui/material/Paper";

export const adminSidebarData = [
  { link: "/admin/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { link: "/admin/products", label: "Products", icon: <DashboardIcon /> },
  {
    link: "/admin/add-product",
    label: "Add New Product",
    icon: <DashboardIcon />,
  },
  { link: "/admin/orders", label: "Orders", icon: <DashboardIcon /> },
  {
    link: "/admin/account-setting",
    label: "Account Setting",
    icon: <DashboardIcon />,
  },
];

export function AdminSidebarList() {
  return <CustomList data={adminSidebarData} />;
}

export default function VendorSidebar() {
  return (
    <Paper sx={{ pt: 3 }}>
      <AdminSidebarList />
    </Paper>
  );
}
