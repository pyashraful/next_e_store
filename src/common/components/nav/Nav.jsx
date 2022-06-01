import Link from "../Link";
import { Container, Box, Stack } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import CartBadge from "../cart/CartBadge";
import Search from "./Search";
import UserProfile from "../UserProfile";
import { Store } from "@utils/store";
import { styled } from "@mui/system";
import { useUser } from "src/common/hook/useUser";
import dynamic from "next/dynamic";
import AccountMenu from "@components/AccountMenu";
import Image from "next/image";
import classes from "@styles/Nav.module.css";

function loadcartDrawer() {
  return import("@components/cart/CartDrawer");
}

const CartDrawer = dynamic(() => loadcartDrawer());

export default function Nav() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { state, dispatch } = useContext(Store);
  const [show, setShow] = useState(false);
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
  const handleScroll = () => {
    setShow(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={show ? `${classes.fixed_top}` : `${classes.hold}`}
      // sx={
      //   show
      //     ? {
      //         position: "fixed",
      //         top: 0,
      //         left: 0,
      //         right: 0,
      //         zIndex: 999,
      //         boxShadow: "rgb(43 52 69 / 10%) 0px 4px 16px",
      //         animation:
      //           "400ms cubic-bezier(0.4, 0, 0.2, 1) 1s 1 normal none running animation-1lit4vl",
      //         transition: "all 350ms ease-in-out 0s",
      //       }
      //     : { position: "relative" }
      // }
    >
      <Box
        sx={{
          background: "#fff",
          transition: "height 250ms ease-in-out",
        }}
      >
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
    </div>
  );
}
