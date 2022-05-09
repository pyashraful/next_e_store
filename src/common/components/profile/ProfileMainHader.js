import { useContext } from "react";
import { Store } from "@utils/store";
import Cookies from "js-cookie";
import PersonIcon from "@mui/icons-material/Person";
import { Box, Stack, Typography } from "@mui/material";
import HeaderButton from "./HeaderButton";

export default function ProfileMainHader() {
  const [state, dispatch] = useContext(Store);

  function userLogout() {
    dispatch({ type: "USER_LOGOUT" });
    console.log(
      "🚀 ~ file: ProfileMainHader.js ~ line 8 ~ ProfileMainHader ~ state",
      state
    );
    Cookies.remove("userInfo");
    Cookies.remove("cartItems");
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <PersonIcon fontSize="medium" color="primary" />
        <Typography
          variant="h2"
          sx={{ fontSize: "25px", fontWeight: 700, ml: 1.2 }}
        >
          My Profile
        </Typography>
      </Box>
      <Stack direction="row" spacing={2}>
        <HeaderButton onClick={userLogout}>Log out</HeaderButton>
        <HeaderButton link="/">Edit Profile</HeaderButton>
      </Stack>
    </Box>
  );
}
