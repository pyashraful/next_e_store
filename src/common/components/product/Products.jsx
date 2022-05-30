import { Grid, Container } from "@mui/material";
import Cookies from "js-cookie";
import ProductCart from "./ProductCart";
export default function Products({ products }) {
  // const existingCartItems = Cookies.get("cartItems")
  //   ? JSON.parse(Cookies.get("cartItems"))
  //   : [];
  // console.log(
  //   "🚀 ~ file: Products.jsx ~ line 6 ~ Products ~ existingCartItem",
  //   existingCartItems
  // );

  // if (existingCartItems.length > 0) {
  //   products = products.map((product) => {
  //     const existingCartItem = existingCartItems.find(
  //       (item) => item._id === product._id
  //     );
  //     if (existingCartItem) {
  //       product.quantity = existingCartItem.quantity;
  //     }
  //     return product;
  //   });
  // }
  // console.log(
  //   "🚀 ~ file: Products.js ~ line 21 ~ Products ~ products",
  //   products
  // );

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
