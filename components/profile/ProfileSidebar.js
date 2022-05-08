import { Paper, Typography } from "@mui/material";
import CustomList from "../CustomList";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";

const dashboardData = [
  { link: "/orders", label: "Orders", icon: <ShoppingBagOutlinedIcon /> },
  {
    link: "/Wishlist",
    label: "Wishlist",
    icon: <FavoriteBorderOutlinedIcon />,
  },
  { link: "/support", label: "Support", icon: <SupportAgentOutlinedIcon /> },
];

const accountData = [
  { link: "/profile", label: "Profile", icon: <PermIdentityOutlinedIcon /> },
  { link: "/address", label: "Address", icon: <LocationOnOutlinedIcon /> },
  { link: "/payment", label: "Payment", icon: <PaymentOutlinedIcon /> },
];

export default function ProfileSidebar() {
  return (
    <Paper sx={{ pb: 2.75 }}>
      <Typography
        variant="body1"
        component="p"
        sx={{ px: 3.5, pb: 2, pt: 3, fontSize: "12px" }}
      >
        DASHBOARD
      </Typography>
      <CustomList data={dashboardData} />
      <Typography
        variant="body1"
        component="p"
        sx={{ px: 3.5, pb: 2, pt: 3, fontSize: "12px" }}
      >
        ACCOUNT SETTINGS
      </Typography>
      <CustomList data={accountData} />
    </Paper>
  );
}
