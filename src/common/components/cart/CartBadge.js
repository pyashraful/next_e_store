import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -8,
    top: -4,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges({ cartItems, ...props }) {
  const [numItems, setNumItems] = React.useState(0);

  React.useEffect(() => {
    setNumItems(cartItems.length);
  }, [cartItems]);
  return (
    <IconButton
      aria-label="cart"
      sx={{ backgroundColor: "action.hover" }}
      size="large"
      {...props}
    >
      <StyledBadge badgeContent={numItems} color="primary">
        <ShoppingBagOutlinedIcon />
      </StyledBadge>
    </IconButton>
  );
}
