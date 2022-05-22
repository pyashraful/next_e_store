import {
  Grid,
  Container,
  Box,
  Stack,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { BillInfo } from "@components/AmountDetails";
import { useContext } from "react";
import { Store } from "@utils/store";
import LocationOnSharpIcon from "@mui/icons-material/LocationOnSharp";
import PaymentIcon from "@mui/icons-material/Payment";
import { useUser } from "src/common/hook/useUser";
import useCal from "src/common/hook/useCal";
import axios from "axios";

export default function Review() {
  const { user } = useUser();
  const { taxt, shipping, discount, total } = useCal();
  const { state } = useContext(Store);
  const { cartItems } = state.cart;
  const { shippingAddress } = state.cart;
  console.log(
    "🚀 ~ file: Review.js ~ line 19 ~ Review ~ shippingAddress",
    shippingAddress
  );
  console.log("🚀 ~ file: Review.js ~ line 9 ~ Review ~ cartItem", cartItems);

  async function handleOrder() {
    const order = {
      user: user._id,
      orderItems: cartItems.map((item) => ({
        priductId: item._id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      shippingAddress: {
        name: shippingAddress.name,
        email: shippingAddress.email,
        phone: shippingAddress.phone,
        zipcode: shippingAddress.zipcode,
        country: shippingAddress.country,
        address: shippingAddress.address,
      },
      paymentMethod: "COD",
      totalPrice: total,
      taxt: taxt,
      shippingCost: shipping,
      discount: discount,
      status: "pending",
      crateedAt: new Date(),
    };
    console.log("🚀 ~ file: Review.js ~ line 36 ~ Review ~ order", order);

    try {
      const { data } = await axios.post("/api/order", order);
      console.log("🚀 ~ file: Review.js ~ line 61 ~ handleOrder ~ data", data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Paper sx={{ px: 3.5, py: 3, display: "flex" }}>
            <Box sx={{ flex: "1 1 0" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <LocationOnSharpIcon
                  fontSize="medium"
                  color="primary"
                  sx={{ mr: 1.5 }}
                />
                <Box sx={{ fontSize: "20px" }}> Delivery Address</Box>
              </Box>
              <Paper
                sx={{
                  px: 3,
                  py: 2,
                  display: "inline-block",
                  backgroundColor: "rgb(246, 249, 252)",
                  boxShadow: "none",
                }}
              >
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
                  Zip: {shippingAddress.zip}
                </Typography>
              </Paper>
            </Box>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ mr: 3 }}
            />
            <Box sx={{ flex: "1 1 0" }}>
              <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                <PaymentIcon
                  fontSize="medium"
                  color="primary"
                  sx={{ mr: 1.5 }}
                />
                <Box sx={{ fontSize: "20px" }}> Delivery Address</Box>
              </Box>
              <Paper
                sx={{
                  px: 3,
                  py: 2,
                  display: "inline-block",
                  backgroundColor: "rgb(246, 249, 252)",
                  boxShadow: "none",
                }}
              >
                <Typography variant="h6" sx={{ mb: 1 }}>
                  Cash On Delivery
                </Typography>
              </Paper>
            </Box>
          </Paper>
          <LoadingButton
            /*loading */
            fullWidth
            variant="contained"
            onClick={handleOrder}
          >
            Place Order
          </LoadingButton>
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
