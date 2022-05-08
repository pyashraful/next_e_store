import React from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NextLinkComposed } from "./Link";
import { useRouter } from "next/router";
import { styled } from "@mui/system";

const SidebarList = styled(List)({
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

export default function CustomList({ data }) {
  const router = useRouter();

  return (
    <SidebarList>
      {data.map((item) => (
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
          />

          <ListItemText
            primary={5}
            primaryTypographyProps={{ fontSize: 14, textAlign: "right" }}
          />
        </ListItemButton>
      ))}
    </SidebarList>
  );
}
