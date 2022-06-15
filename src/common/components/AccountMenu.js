import { useContext } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Logout from "@mui/icons-material/Logout";
import { NextLinkComposed } from "./Link";
import { authRequest } from "@utils/mutations";
// import { useUser } from "../hook/useUser";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { Store } from "@utils/store";

export default function AccountMenu({ anchorEl, setAnchorEl, open, userRole }) {
  const { dispatch } = useContext(Store);
  const router = useRouter();
  // const { mutate } = useUser();
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await authRequest.logout();
    // mutate(null);
    dispatch({ type: "USER_LOGOUT" });
    router.push("/");
    Cookies.remove("cartItems");
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        // transformOrigin={{ horizontal: "right", vertical: "top" }}
        transformOrigin={{ horizontal: "right", vertical: "bottom" }}
        anchorOrigin={{ horizontal: "right", vertical: "top" }}
      >
        <MenuItem component={NextLinkComposed} to={"/profile"}>
          <ListItemIcon>
            <PersonIcon fontSize="small" />
          </ListItemIcon>
          profile
        </MenuItem>
        <MenuItem
          component={NextLinkComposed}
          to={"/orders"}
          sx={{ display: userRole === "admin" ? "none" : "block" }}
        >
          <ListItemIcon>
            <ManageAccountsIcon fontSize="small" />
          </ListItemIcon>
          Account
        </MenuItem>
        <MenuItem component={NextLinkComposed} to={"/admin/dashboard"}>
          <ListItemIcon>
            <DashboardIcon fontSize="small" />
          </ListItemIcon>
          Admin Dashboard
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
}
