import { Box, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function ProfileMainHader({ icon, title, logout, edit }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {icon}
        <Typography
          variant="h2"
          sx={{ fontSize: "25px", fontWeight: 700, ml: 1.2 }}
        >
          {title}
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", lg: "block" } }}>
        <Stack direction="row" spacing={2}>
          {logout}
          {edit}
          {/* <LogoutButton /> */}
          {/* <OutlinedButton href="/">Edit Profile</OutlinedButton> */}
        </Stack>
      </Box>
      <Box sx={{ display: { lg: "none", xs: "block" } }}>
        <MenuIcon />
      </Box>
    </Box>
  );
}
