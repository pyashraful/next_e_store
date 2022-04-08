import Link from "next/link";
import { useContext, useState } from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import CricleButton from "./CricleButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Button from "@mui/material/Button";

import Divider from "@mui/material/Divider";
import { Store } from "../utils/store";
import { Typography } from "@mui/material";

export default function CartDrawer() {
  const [state, dispatch] = useContext(Store);
  const [quantity, setquantity] = useState(1);

  const { cartOpen } = state;
  const cartItems = state.cart.cartItems;

  function removeItem(id) {
    console.log("removeItem id", id);
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  function toggleDrawer() {
    if (cartOpen === true) {
      console.log("hi");
      dispatch({ type: "CLOSE_CART" });
    }
    if (cartOpen === false) {
      console.log("by");
      dispatch({ type: "OPEN_CART" });
    }
  }
  return (
    <Drawer
      anchor="right"
      sx={{ zIndex: 1999 }}
      open={cartOpen}
      onClose={toggleDrawer}
    >
      <Box sx={{ width: 350 }}>
        <Box
          sx={{
            overflow: "auto",
            height: "calc(100vh - 80px - 3.25rem)",
          }}
        >
          <Stack direction="row" spacing={2} sx={{ padding: 5 }}>
            <ShoppingBagOutlinedIcon />
            <Typography>Cart Item</Typography>
          </Stack>
          <Divider />
          <List>
            {cartItems.map((item) => (
              <ListItem key={item._id}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="column" alignItems="center">
                    <CricleButton onClick={() => setquantity(quantity + 1)}>
                      <AddIcon />
                    </CricleButton>
                    <Box>{quantity}</Box>
                    <CricleButton onClick={() => setquantity(quantity - 1)}>
                      <RemoveIcon />
                    </CricleButton>
                  </Stack>
                  <Box sx={{ width: 80, height: 80 }}>
                    <Image
                      src={`${item.image}`}
                      alt="Picture of the author"
                      width={80}
                      height={80}
                    />
                  </Box>
                  <Box>
                    <Link href={`/product/${item._id}`} passHref>
                      <Typography
                        sx={{ fontSize: 14, fontWeight: 600 }}
                        variant="h5"
                      >
                        {item.title}
                      </Typography>
                    </Link>
                    <small>{`${item.price} * ${quantity}`}</small>
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 600,
                        color: "primary.main",
                      }}
                      variant="subtitle1"
                    >{`$${item.price * quantity}`}</Typography>
                  </Box>
                  <CricleButton onClick={() => removeItem(item._id)}>
                    <CloseIcon />
                  </CricleButton>
                </Box>
              </ListItem>
            ))}
          </List>
        </Box>

        <Box sx={{ margin: 2 }}>
          <Button variant="outlined" fullWidth>
            Checkout
          </Button>
          <Button fullWidth>View cart</Button>
        </Box>
      </Box>
    </Drawer>
  );
}
