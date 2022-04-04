import Image from "next/image";
import connectDB from "../../utils/db.mjs";
import ProductModel from "../../model/productSchema";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function Details({ product }) {
  return (
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
          helloworld
        </Grid>
      </Grid>
    </Container>
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
