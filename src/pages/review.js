import {
  Grid,
  Container,
  Box,
  Stack,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { BillInfo } from "@components/AmountDetails";
import { useContext } from "react";
import { Store } from "@utils/store";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";

export default function Review() {
  const { state } = useContext(Store);
  const { cartItems } = state.cart;
  const { shippingAddress } = state.cart;
  console.log(
    "🚀 ~ file: Review.js ~ line 19 ~ Review ~ shippingAddress",
    shippingAddress
  );
  console.log("🚀 ~ file: Review.js ~ line 9 ~ Review ~ cartItem", cartItems);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper sx={{ px: 3.5, py: 3, display: "flex" }}>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <LocationOnSharpIcon fontSize="medium" color="primary" />
                <Box sx={{ fontSize: "20px" }}> Delivery Address</Box>
              </Box>
              <Box sx={{ px: 2.5, py: 1.5 }}>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {shippingAddress.name}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {shippingAddress.email}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {shippingAddress.address}
                </Typography>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  {shippingAddress.zip}
                </Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <LocationOnSharpIcon fontSize="medium" color="primary" />
                <Box sx={{ fontSize: "20px" }}> Delivery Address</Box>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Paper sx={{ px: 2.5, py: 1.5 }}>
            <Box>
              <Box component={"h3"}>Your Order</Box>
              {cartItems.map((item) => (
                <Stack
                  key={item._id}
                  justifyContent="space-between"
                  direction="row"
                  sx={{ mb: 2.75 }}
                >
                  <Box
                    component={"div"}
                  >{`${item.quantity} * ${item.name}`}</Box>
                  <Box component={"div"}>{`${item.quantity * item.price}`}</Box>
                </Stack>
              ))}
            </Box>
            <Divider sx={{ mb: 3 }} />
            <BillInfo />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
