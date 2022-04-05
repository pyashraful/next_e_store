import { Container, Box, Stack } from "@mui/material";
import { useContext } from "react";
import CartBadge from "./CartBadge";
import Search from "./Search";
import UserProfile from "./UserProfile";
import { Store } from "../utils/store";

export default function Nav() {
  const [state, dispatch] = useContext(Store);
  const { cartOpen } = state;

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
                <Box onClick={() => toggleDrawer()} className="">
                  <CartBadge />
                </Box>
              </Stack>
            </Stack>
          </nav>
        </header>
      </Container>
    </Box>
  );
}
