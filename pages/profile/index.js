import { Container, Grid } from "@mui/material";

export default function Profile() {
  return (
    <Container>
      <Grid Container spacing={3}>
        <Grid item xs={12} lg="3"></Grid>
        <Grid item xs={12} lg="9"></Grid>
      </Grid>
    </Container>
  );
}
