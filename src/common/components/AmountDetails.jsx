import { useContext } from "react";
import { Store } from "@utils/store";
import { Paper, Box, Typography, Divider } from "@mui/material";
import { styled } from "@mui/system";

const BillItemBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 8,
  fontSize: 14,
});

const BillTitle = styled(Typography)({
  fontSize: 14,
});
const BillAmount = styled(Typography)({
  fontSize: 18,
  fontWeight: 600,
});

export default function AmountDetails({ children }) {
  const { state, dispatch } = useContext(Store);
  const { cartItems } = state.cart;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxt = subtotal * 0.1;
  const shipping = 0;
  const discount = 0;
  const total = subtotal + taxt + shipping - discount;

  return (
    <Paper sx={{ p: 4 }}>
      <Box>
        <Box>
          <BillItemBox>
            <BillTitle variant="subtitle1">Subtotal:</BillTitle>
            <BillAmount variant="subtitle1">${`${subtotal}`}</BillAmount>
          </BillItemBox>
        </Box>
        <Box>
          <BillItemBox>
            <BillTitle variant="subtitle1">Shipping:</BillTitle>
            <BillAmount variant="subtitle1">-</BillAmount>
          </BillItemBox>
        </Box>
        <Box>
          <BillItemBox>
            <BillTitle variant="subtitle1">Taxt:</BillTitle>
            <BillAmount variant="subtitle1">${`${taxt}`}</BillAmount>
          </BillItemBox>
        </Box>
        <Box>
          <BillItemBox>
            <BillTitle variant="subtitle1">Discount:</BillTitle>
            <BillAmount variant="subtitle1">-</BillAmount>
          </BillItemBox>
        </Box>
      </Box>
      <Divider />
      <BillAmount
        align="right"
        sx={{ mb: 2, fontSize: 25 }}
        variant="subtitle1"
      >
        ${`${total}`}
      </BillAmount>
      {children}
    </Paper>
  );
}
