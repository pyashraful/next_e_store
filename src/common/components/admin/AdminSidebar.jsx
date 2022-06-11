import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import CustomList from "../CustomList";
import Paper from "@mui/material/Paper";

export const adminSidebarData = [
  { link: "/admin/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { link: "/admin/products", label: "Products", icon: <AssignmentIcon /> },
  {
    link: "/admin/add-product",
    label: "Add New Product",
    icon: <NoteAddIcon />,
  },
  { link: "/admin/orders", label: "Orders", icon: <ShoppingCartIcon /> },
  {
    link: "/admin/account-setting",
    label: "Account Setting",
    icon: <SettingsIcon />,
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
