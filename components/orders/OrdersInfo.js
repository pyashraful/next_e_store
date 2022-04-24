import { Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/system";

const StyledPaper = styled(Paper)({
  padding: "6px 18px",
  marginTop: "1rem",
  marginBottom: "1rem",
});

const TableHead = styled(Box)({
  fontSize: "16px",
  fontWeight: 600,
  margin: 0,
  color: "rgb(125, 135, 156)",
  textAlign: "left",
  flex: "1 1 0",
});
const OrdersInfoBox = styled(Box)({
  margin: "6px",
  textAlign: "left",
  flex: "1 1 0",
});

export default function OrdersInfo() {
  return (
    <>
      <Stack direction={"row"}>
        <TableHead component={"h5"}>Order #</TableHead>
        <TableHead component={"h5"}>Status</TableHead>
        <TableHead component={"h5"}>Date purchased</TableHead>
        <TableHead component={"h5"}>Total</TableHead>
      </Stack>
      <StyledPaper>
        <Stack direction={"row"}>
          <OrdersInfoBox
            sx={{ fontSize: "16px", fontWeight: 600 }}
            component={"h5"}
          >
            Order #
          </OrdersInfoBox>
          <OrdersInfoBox>pandig</OrdersInfoBox>
          <OrdersInfoBox>24 Apr, 2022</OrdersInfoBox>
          <OrdersInfoBox>$350</OrdersInfoBox>
        </Stack>
      </StyledPaper>
    </>
  );
}
