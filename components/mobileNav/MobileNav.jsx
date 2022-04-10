import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
export default function MobileNav() {
  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <Box>
        <HomeIcon />
      </Box>
      <Box>
        <LocalMallOutlinedIcon />
      </Box>
      <Box>
        <PermIdentityOutlinedIcon />
      </Box>
    </Box>
  );
}
