import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from "@mui/material";
import { NextLinkComposed } from "../Link";
import { useRouter } from "next/router";
import { styled } from "@mui/system";

const VendorSidebarData = [
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

const SidebarButton = styled(ListItemButton)({
  color: "rgb(43, 52, 69)",
  textDecoration: "none",
  alignItems: "center",

  padding: " 0 1.5rem",
  marginBottom: "1.25rem",
});

const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    borderLeft: "4px solid ",
    borderColor: "transparent",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: "1.25rem",
    "&:hover ": {
      color: "rgb(210, 63, 87)",
      borderColor: "rgb(210, 63, 87)",

      ".MuiSvgIcon-root": {
        color: "rgb(210, 63, 87)",
      },
    },
    "&.Mui-selected": {
      color: "rgb(210, 63, 87)",
      borderColor: "rgb(210, 63, 87)",
      ".MuiSvgIcon-root": {
        color: "rgb(210, 63, 87)",
      },
    },
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
    "&:hover": {
      color: "rgb(43, 52, 69)",
    },
  },
});

export default function VendorSidebar() {
  const router = useRouter();

  return (
    <Paper sx={{ pt: 3 }}>
      <FireNav>
        {VendorSidebarData.map((item) => (
          // <SidebarLink href={item.link} key={item.label} passHref>
          <ListItemButton
            key={item.label}
            component={NextLinkComposed}
            to={{ pathname: item.link }}
            selected={router.pathname === item.link}
          >
            <ListItemIcon sx={{ fontSize: 20 }}>{item.icon}</ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 14 }}
            >
              {item.label}
            </ListItemText>
          </ListItemButton>
          // </SidebarLink>
        ))}
      </FireNav>
    </Paper>
  );
}
