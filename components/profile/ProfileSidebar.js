import Link from "next/link";
import { Paper, Typography, Box } from "@mui/material";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

const MyLink = styled("a")(({ active }) => ({
  position: "relative",

  color: "rgb(43, 52, 69)",
  transition: "color 150ms ease-in-out 0s",
  display: "flex",

  justifyContent: "space-between",

  textDecoration: "none",
  alignItems: "center",
  borderLeft: "4px solid ",
  paddingLeft: "1.5rem",
  paddingRight: "1.5rem",
  marginBottom: "1.25rem",
  borderColor: "transparent",
  " &:hover": {
    color: "rgb(210, 63, 87)",
    borderColor: "rgb(210, 63, 87)",
  },
  ...(active && { borderColor: "rgb(210, 63, 87)", color: "rgb(210, 63, 87)" }),
}));

export default function ProfileSidebar() {
  const router = useRouter();
  return (
    <Paper sx={{ pb: 2.75 }}>
      <Typography
        variant="body1"
        component="p"
        sx={{ px: 3.5, pb: 2, pt: 3, fontSize: "12px" }}
      >
        DASHBOARD
      </Typography>

      <Link href="/Order" passHref>
        <MyLink active={router.pathname === "/order" ? true : false}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ShoppingBagOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Order
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/" passHref>
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <FavoriteBorderOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Wishlist
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/" passHref>
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <SupportAgentOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Support
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

      <Link href="/" passHref>
        <MyLink active={router.pathname === "/profile" ? true : false}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PermIdentityOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Profile
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/" passHref>
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Addresses
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
      <Link href="/" passHref>
        <MyLink>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <PaymentOutlinedIcon fontSize="small" sx={{ mr: "10px" }} />
            <Box sx={{ fontSize: "14px" }} component="span">
              Payment Methods
            </Box>
          </Box>
          <Box>5</Box>
        </MyLink>
      </Link>
    </Paper>
  );
}
