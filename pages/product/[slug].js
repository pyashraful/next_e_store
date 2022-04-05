import Image from "next/image";
import connectDB from "../../utils/db.mjs";
import ProductModel from "../../model/productSchema";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Button, Container, Stack, Typography } from "@mui/material";
import Layout from "../../components/Layout.js";

export default function Details({ product }) {
  return (
    <Layout>
      <Container>
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
                <Typography variant="h4">{product.title}</Typography>
                <Typography variant="body1">Brand: {product.brand}</Typography>
                <Typography variant="body2">Rated: {product.rating}</Typography>

                <Stack>
                  <Typography variant="body1">${product.price}</Typography>
                  <Typography variant="body1">
                    {product.countInStock ? "Stock Available" : "Stock out"}
                  </Typography>
                </Stack>
                <Box>
                  <Button variant="contained" sx={{ background: "red" }}>
                    adds
                  </Button>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  await connectDB();
  const data = await ProductModel.findOne({ slug }).lean();
  const product = JSON.parse(JSON.stringify(data));

  return {
    props: {
      product,
    },
  };
}
