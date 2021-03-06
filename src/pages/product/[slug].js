import { useContext } from "react";
import useSWR from "swr";
import Image from "next/image";
import dbConnect from "@utils/dbConnect.js";
import Product from "../../model/product";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Container, Stack, Typography } from "@mui/material";
import { Store } from "@utils/store";
import fetcher from "@utils/fetcher";

export default function Details({ product }) {
  const { dispatch } = useContext(Store);
  // const { data, error } = useSWR(`/products/${product._id}`, fetcher);
  // console.log(data);
  // console.log(error);

  const addToCartHandler = async () => {
    dispatch({ type: "ADD_TO_CART", payload: { ...product, quantity: 1 } });
  };

  return (
    <Grid container>
      <Grid item xs={6} sx={{ width: "100%" }}>
        <Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Image
              className="p-8 rounded-t-lg"
              src={`${product.image}`}
              alt="product image"
              width={300}
              height={300}
              // layout="responsive"
            />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box>
          <Stack>
            <Typography
              variant="h4"
              sx={{ fontWeight: 700, marginBottom: "1rem" }}
            >
              {product.title}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: "1rem" }}>
              Brand: {product.brand}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: "1rem" }}>
              Rated: {product.rating}
            </Typography>

            <Stack sx={{ marginBottom: "1.5rem" }}>
              <Typography
                sx={{
                  marginBottom: ".25rem",
                  fontWeight: 700,
                  color: "primary.main",
                  fontSize: "1.5rem",
                }}
              >
                ${product.price}
              </Typography>
              <Typography variant="body1">
                {product.countInStock ? "Stock Available" : "Stock out"}
              </Typography>
            </Stack>
            <Box>
              <Button
                variant="contained"
                sx={{ background: "primary.main" }}
                onClick={addToCartHandler}
              >
                Add To Cart
              </Button>
            </Box>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await dbConnect();
  const data = await Product.findById(slug);

  const product = JSON.parse(JSON.stringify(data));

  return {
    props: {
      product,
    },
  };
}
