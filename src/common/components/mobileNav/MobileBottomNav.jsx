import React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Box } from "@mui/system";

export default function MobileBottomNav() {
  return (
    <Box>
      <Paper
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          // value={value}
          // onChange={(event, newValue) => {
          //   setValue(newValue);
          // }}
        >
          <BottomNavigationAction label="Recents" icon={<HomeIcon />} />
          <BottomNavigationAction
            label="Favorites"
            icon={<LocalMallOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Archive"
            icon={<PermIdentityOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}
