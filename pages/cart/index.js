import { useContext } from "react";

import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import { Store } from "../../utils/store";
import { styled } from "@mui/system";
import CartButton from "../../components/cart/CartButton";

const CartPaper = styled(Paper)({
  boxShadow: "rgba(43, 52, 69, 0.1) 0px 4px 16px",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  marginBottom: "1.5rem",
  display: "flex",
});

export default function Cart() {
  const [state, dispatch] = useContext(Store);
  const { cart } = state;
  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={8}>
            {cart.cartItems.map((item) => (
              <Box key={item._id}>
                <CartPaper>
                  <Image
                    src={item.image}
                    height="140px"
                    width="140px"
                    alt={item.title}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
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
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <small>{`${item.price} * ${item.quantity}`}</small>
                      <Box>
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "primary.main",
                            mx: 1,
                          }}
                          variant="subtitle1"
                        >{`$${item.price * item.quantity}`}</Typography>
                        <CartButton item={item} />
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
