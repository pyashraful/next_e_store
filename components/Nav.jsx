import { Container, Box, Stack } from "@mui/material";
import { useContext } from "react";
import CartBadge from "./CartBadge";
import Search from "./Search";
import UserProfile from "./UserProfile";
import { Store } from "../utils/store";

export default function Nav() {
  const [state, dispatch] = useContext(Store);
  const { cartOpen, cart } = state;
  // console.log("🚀 ~ file: Nav.jsx ~ line 11 ~ Nav ~ cart", cart);
  const cartItems = cart.cartItems;
  // console.log(
  //   "🚀 ~ file: Nav.jsx ~ line 13 ~ Nav ~ cartItems",
  //   cartItems.length
  // );

  // console.log("🚀 ~ file: Nav.jsx ~ line 13 ~ Nav ~ cartItems", cartItems);
  function toggleDrawer() {
    if (cartOpen === true) {
      dispatch({ type: "CLOSE_CART" });
    }
    if (cartOpen === false) {
      dispatch({ type: "OPEN_CART" });
    }
  }

  return (
    <Box sx={{ background: "#fff" }}>
      <Container>
        <header className="max-w-screen-xl mx-auto my-0">
          <nav>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
              sx={{ height: "80px" }}
            >
              <Box className="">E-SHOP</Box>
              <Box className="basis-auto mx-auto my-0">
                <Search />
              </Box>
              <Stack direction="row" spacing={2}>
                <Box className="">
                  <UserProfile />
                </Box>
                <Box onClick={() => toggleDrawer()}>
                  <CartBadge cartItems={cartItems} />
                </Box>
              </Stack>
            </Stack>
          </nav>
        </header>
      </Container>
    </Box>
  );
}
