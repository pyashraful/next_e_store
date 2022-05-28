import Link from "../Link";
import { Container, Box, Stack } from "@mui/material";
import { useContext, useState } from "react";
import CartBadge from "../cart/CartBadge";
import Search from "./Search";
import UserProfile from "../UserProfile";
import { Store } from "@utils/store";
import { styled } from "@mui/system";
import { useUser } from "src/common/hook/useUser";
import dynamic from "next/dynamic";
import AccountMenu from "@components/AccountMenu";
import Image from "next/image";

function loadcartDrawer() {
  return import("@components/cart/CartDrawer");
}

const CartDrawer = dynamic(() => loadcartDrawer());

const FixDiv = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
});

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, dispatch } = useContext(Store);
  const open = Boolean(anchorEl);
  // const { user } = useUser();
  const { user, cartOpen, cart } = state;
  const cartItems = cart.cartItems;

  function toggleDrawer() {
    if (cartOpen === true) {
      dispatch({ type: "CLOSE_CART" });
    }
    if (cartOpen === false) {
      dispatch({ type: "OPEN_CART" });
    }
  }
  function showLoingForm(event) {
    if (user) {
      setAnchorEl(event.currentTarget);
    } else {
      dispatch({ type: "TOGGLE_SIGNIN_DIALOG" });
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
                  <Link href={"/"}>
                    <Image
                      src="/Estore.svg"
                      height={34}
                      width={100}
                      alt="logo"
                    />
                  </Link>
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
                    <UserProfile onClick={showLoingForm} />
                  </Box>
                  <AccountMenu
                    open={open}
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    userRole={user?.role}
                  />
                  <CartBadge
                    onClick={() => toggleDrawer()}
                    cartItems={cartItems}
                  />
                  <CartDrawer />
                </Stack>
              </Stack>
            </nav>
          </header>
        </Container>
      </Box>
    </FixDiv>
  );
}
