import Link from "next/link";
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import {
  ShoppingBagOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  SupportAgentSharpIcon,
} from "@mui/icons-material";

import People from "@mui/icons-material/People";
import PermMedia from "@mui/icons-material/PermMedia";
import Dns from "@mui/icons-material/Dns";
import Public from "@mui/icons-material/Public";

const dashNav = [
  {
    name: "Orders",
    icon: <People />,
    link: "/orders",
  },
  {
    name: "Wishlist",
    icon: <PermMedia />,
    link: "/wishlist",
  },
  {
    name: "support",
    icon: <SupportAgentSharpIcon />,
    link: "/support",
  },
];
export default function ProfileSidebar() {
  return (
    <Paper>
      <Typography>DASHBOARD</Typography>

      <List>
        {dashNav.map((item) => (
          <ListItem button key={item.name}>
            {"debug"}
            <ListItemIcon>{item.icon}</ListItemIcon>

            <Link key={item.name} href={item.link} passHref>
              <h1>Hi</h1>
            </Link>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
