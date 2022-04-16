import { useState } from "react";
import Link from "next/link";
import { Container, Box, Stack } from "@mui/material";
import { useContext } from "react";
import CartBadge from "./CartBadge";
import Search from "./Search";
import UserProfile from "./UserProfile";
import { Store } from "../utils/store";
import { styled } from "@mui/system";
import LogSignupModal from "./user/LogSignupModal";

const FixDiv = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 1500,
  boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
});

export default function Nav({ showModal, setShowModal }) {
  const [state, dispatch] = useContext(Store);

  const { cartOpen, cart } = state;
  const cartItems = cart.cartItems;

  function toggleDrawer() {
    if (cartOpen === true) {
      dispatch({ type: "CLOSE_CART" });
    }
    if (cartOpen === false) {
      dispatch({ type: "OPEN_CART" });
    }
  }

  return (
    <FixDiv>
      <Box sx={{ background: "#fff" }}>
        <Container>
          <header>
            <nav>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                sx={{ height: "80px", width: "100%" }}
              >
                <Box
                  sx={{
                    display: { md: "flex", xs: "none" },
                    minWidth: "170px",
                  }}
                >
                  <Link href={"/"}>E-SHOP</Link>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flex: "1 1 0",
                    justifyContent: "center",
                  }}
                >
                  <Search />
                </Box>
                <Stack
                  direction="row"
                  spacing={2}
                  sx={{ display: { xs: "none", md: "flex" } }}
                >
                  <Box className="">
                    <UserProfile onClick={() => setShowModal(!showModal)} />
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
    </FixDiv>
  );
}
