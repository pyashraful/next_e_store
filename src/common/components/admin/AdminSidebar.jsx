import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserSidebarList from "../CustomList";
import Paper from "@mui/material/Paper";

const vendorSidebarData = [
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

export default function VendorSidebar() {
  return (
    <Paper sx={{ pt: 3 }}>
      <UserSidebarList data={vendorSidebarData} />
    </Paper>
  );
}
