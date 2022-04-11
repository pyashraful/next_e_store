import { Box } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import { styled } from "@mui/system";

const FixDiv = styled("div")({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1500,
  boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
});

export default function MobileNav() {
  return (
    <FixDiv sx={{ display: { xs: "flex", md: "none" } }}>
      <Box>
        <HomeIcon />
      </Box>
      <Box>
        <LocalMallOutlinedIcon />
      </Box>
      <Box>
        <PermIdentityOutlinedIcon />
      </Box>
    </FixDiv>
  );
}
