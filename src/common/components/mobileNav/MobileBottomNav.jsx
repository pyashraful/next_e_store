import React, { useContext, useState } from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { Box } from "@mui/system";
import { Store } from "@utils/store";
import AccountMenu from "@components/AccountMenu";
import Link, { NextLinkComposed } from "@components/Link";

export default function MobileBottomNav() {
  const { state, dispatch } = useContext(Store);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [value, setValue] = useState(0);

  function showLoingForm(event) {
    if (state.user) {
      setAnchorEl(event.currentTarget);
      // router.push("/profile");
    } else {
      dispatch({ type: "TOGGLE_SIGNIN_DIALOG" });
    }
  }

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
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{ width: "100%", justifyContent: "space-around" }}
        >
          <BottomNavigationAction
            sx={{ maxWidth: "100%", "&:hover": { color: "rgb(210, 63, 87)" } }}
            label="Home"
            icon={<HomeIcon />}
            component={NextLinkComposed}
            to="/"
          />

          <BottomNavigationAction
            sx={{
              maxWidth: "100%",
              "&:hover": { color: "rgb(210, 63, 87)" },
            }}
            label="Cart"
            icon={<LocalMallOutlinedIcon />}
            component={NextLinkComposed}
            to="/cart"
          />

          <BottomNavigationAction
            onClick={showLoingForm}
            sx={{
              maxWidth: "100%",
              height: "100%",
              "&:hover": { color: "rgb(210, 63, 87)" },
            }}
            label="Profile"
            icon={<PermIdentityOutlinedIcon />}
          />
        </BottomNavigation>
      </Paper>
      <AccountMenu
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        userRole={state.user?.role}
        position="bottom"
      />
    </Box>
  );
}
