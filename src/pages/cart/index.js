import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "../@components/Layout";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { Store } from "@utils/store";
import { styled } from "@mui/system";
import CartButton from "@components/cart/CartButton";
import CricleButton from "@components/CricleButton";
import CloseIcon from "@mui/icons-material/Close";
import ProgressBar from "@components/ProgressBar";
import Staper from "@components/Staper";

const CartPaper = styled(Paper)({
  boxShadow: "rgba(43, 52, 69, 0.1) 0px 4px 16px",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  marginBottom: "1.5rem",
  display: "flex",
});

export default function Cart() {
  const [state, dispatch] = useContext(Store);
  const { cart } = state;
  console.log("🚀 ~ file: index.js ~ line 22 ~ Cart ~ cart", cart);

  function removeItem(id) {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  return (
    <Layout>
      <Container>
        <ProgressBar ok={true} em={true} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8}>
            {cart.cartItems?.map((item) => (
              <Box key={item._id} sx={{ position: "relative" }}>
                <CartPaper>
                  <Image
                    src={`${item.image}`}
                    height="140px"
                    width="140px"
                    alt={item.title}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      width: "100%",
                      p: 2,
                    }}
                  >
                    <Link href={`/product/${item._id}`} passHref>
                      <Typography
                        sx={{ fontSize: 14, fontWeight: 600 }}
                        variant="h5"
                      >
                        {item.title}
                      </Typography>
                    </Link>
                    <Box
                      sx={{ position: "absolute", top: "1rem", right: "1rem" }}
                    >
                      <CricleButton
                        iconsize="smallCricle"
                        onClick={() => removeItem(item._id)}
                      >
                        <CloseIcon fontSize="small" />
                      </CricleButton>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <small>{`${item.price} * ${item.quantity}`}</small>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "primary.main",
                            mx: 1,
                          }}
                          variant="subtitle1"
                        >{`$${item.price * item.quantity}`}</Typography>
                      </Box>
                      <Box>
                        <CartButton
                          item={item}
                          flow={`row-reverse`}
                          iconsize="outlineSquare"
                          disabled={item.quantity === 1 ? true : false}
                        />
                      </Box>
                    </Box>
                  </Box>
                </CartPaper>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
