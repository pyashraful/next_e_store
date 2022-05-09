import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import UserSidebarList from "../CustomList";
import Paper from "@mui/material/Paper";

const vendorSidebarData = [
  { link: "/vendor/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { link: "/vendor/products", label: "Products", icon: <DashboardIcon /> },
  {
    link: "/vendor/add-product",
    label: "Add New Product",
    icon: <DashboardIcon />,
  },
  { link: "/vendor/orders", label: "Orders", icon: <DashboardIcon /> },
  {
    link: "/vendor/account-setting",
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
