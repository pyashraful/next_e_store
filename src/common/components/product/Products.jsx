import { Grid, Container } from "@mui/material";
import ProductCart from "./ProductCart";
export default function Products({ products }) {
  return (
    <Container sx={{ m: "2rem auto" }}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        {products.map((product) => (
          <Grid sx={{ flex: "1 1 0" }} item lg={3} xl={3} key={product._id}>
            <ProductCart product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
