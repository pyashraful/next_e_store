import { Box, Stack, Typography } from "@mui/material";

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
      <Stack direction="row" spacing={2}>
        {logout}
        {edit}
        {/* <LogoutButton /> */}
        {/* <OutlinedButton href="/">Edit Profile</OutlinedButton> */}
      </Stack>
    </Box>
  );
}
