import Link from "next/link";
import { useContext } from "react";
import Image from "next/image";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CricleButton from "./CricleButton";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Button from "@mui/material/Button";

import Divider from "@mui/material/Divider";
import { Store } from "../utils/store";
import { Typography } from "@mui/material";

export default function CartDrawer() {
  const [state, dispatch] = useContext(Store);

  const { cartOpen } = state;
  const cartItems = state.cart.cartItems;

  function removeItem(id) {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  function incriseQuantity(item, quantity) {
    let newQuntity = quantity + 1;

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: newQuntity },
    });
  }

  function decreaseQuantity(item, quantity) {
    let newQuntity = quantity - 1;

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: newQuntity },
    });
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
            height: "calc((100vh - 70px) - 3.25rem)",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            sx={{ height: 74, mx: 2.5 }}
          >
            <ShoppingBagOutlinedIcon />
            <Box>{`${cartItems.length}`} Item</Box>
          </Stack>
          <Divider />
          <Box>
            {cartItems.map((item) => (
              <>
                <Box sx={{ p: 1.2 }} key={item._id}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Stack direction="column" alignItems="center">
                      <CricleButton
                        onClick={() => incriseQuantity(item, item.quantity)}
                      >
                        <AddIcon />
                      </CricleButton>
                      <Box>{item.quantity}</Box>
                      <CricleButton
                        onClick={() => decreaseQuantity(item, item.quantity)}
                      >
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
                      <small>{`${item.price} * ${item.quantity}`}</small>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: "primary.main",
                        }}
                        variant="subtitle1"
                      >{`$${item.price * item.quantity}`}</Typography>
                    </Box>
                    <CricleButton onClick={() => removeItem(item._id)}>
                      <CloseIcon />
                    </CricleButton>
                  </Box>
                </Box>
                <Divider />
              </>
            ))}
          </Box>
        </Box>

        <Box sx={{ p: 2.5 }}>
          <Button sx={{ mb: 1 }} variant="contained" fullWidth>
            Checkout
          </Button>
          <Button variant="outlined" fullWidth>
            View cart
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
