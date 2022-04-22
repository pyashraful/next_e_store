import PersonIcon from "@mui/icons-material/Person";
import { Box, Button, Typography } from "@mui/material";
import HeaderButton from "./HeaderButton";
export default function ProfileMainHader() {
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
      <HeaderButton />
    </Box>
  );
}
