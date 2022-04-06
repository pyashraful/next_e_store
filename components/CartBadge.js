import * as React from "react";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const StyleedIconButton = styled(IconButton)({ backgroundColor: "red" });

export default function CustomizedBadges({ cartItems }) {
  const [numItems, setNumItems] = React.useState(0);

  React.useEffect(() => {
    setNumItems(cartItems.length);
  }, [cartItems]);
  return (
    <StyleedIconButton color="primary" aria-label="cart">
      <StyledBadge badgeContent={numItems} color="secondary">
        <ShoppingBagOutlinedIcon />
      </StyledBadge>
    </StyleedIconButton>
  );
}
