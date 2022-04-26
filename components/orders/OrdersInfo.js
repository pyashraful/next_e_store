import { Box, Paper, Stack, Pagination } from "@mui/material";
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
  marginRight: "6px",
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
      <Stack sx={{ paddingLeft: "18px" }} direction={"row"}>
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
      <Box sx={{ mt: "40px", display: "flex", justifyContent: "center" }}>
        <Pagination
          count={10}
          variant="outlined"
          sx={{
            color: "rgb(210, 63, 87)",
            background: "rgba(210, 63, 87, 0.12)",
          }}
        />
      </Box>
    </>
  );
}
