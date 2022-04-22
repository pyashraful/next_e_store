import Link from "next/link";
import { Paper, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";

const MyLink = styled("a")({
  position: "relative",
  color: "rgb(210, 63, 87)",
  transition: "color 150ms ease-in-out 0s",
  display: "flex",
  // -webkit-box-pack: "justify",
  justifyContent: "space-between",
  // -webkit-box-align: "center",
  alignItems: "center",
  borderLeft: "4px solid rgb(210, 63, 87)",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  borderTopColor: "rgb(210, 63, 87)",
  borderRightColor: "rgb(210, 63, 87)",
  borderBottomColor: "rgb(210, 63, 87)",
});

export default function ProfileSidebar() {
  return (
    <Paper>
      <Typography
        variant="body1"
        component="p"
        sx={{ px: 3.5, pb: 2, pt: 3, fontSize: "12px" }}
      >
        DASHBOARD
      </Typography>

      <Link href="/">
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Order
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/">
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Order
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/">
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Order
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Typography
        variant="body1"
        component="p"
        sx={{ px: 3.5, pb: 2, pt: 3, fontSize: "12px" }}
      >
        ACCOUNT SETTINGS
      </Typography>

      <Link href="/">
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Order
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/">
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Order
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/">
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Order
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
    </Paper>
  );
}
