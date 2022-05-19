import { Container, Grid } from "@mui/material";
import ProgressBar from "../ProgressBar";
import AmountDetails from "../AmountDetails";
import Paymentcard from "./Paymentcard";

export default function PaymentDetails() {
  return (
    <Container>
      <ProgressBar />
      <Grid container spacing={2}>
        <Grid item xs={12} md={8} lg={8}>
          <Paymentcard />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <AmountDetails />
        </Grid>
      </Grid>
    </Container>
  );
}
