import Image from "next/image";
import connectDB from "../../utils/db.mjs";
import ProductModel from "../../model/productSchema";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";

export default function Details({ product }) {
  console.log("🚀 ~ file: [slug].js ~ line 5 ~ Details ~ product", product);

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
                layout="responsive"
              />
            </Box>
            <Box></Box>
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
  console.log(context);
  const { params } = context;
  console.log(
    "🚀 ~ file: [slug].js ~ line 14 ~ getServerSideProps ~ params",
    params
  );
  const { slug } = params;
  console.log(
    "🚀 ~ file: [slug].js ~ line 16 ~ getServerSideProps ~ slug",
    slug
  );

  await connectDB();
  const data = await ProductModel.findOne({ slug }).lean();
  const product = JSON.parse(JSON.stringify(data));

  // console.log(
  //   "🚀 ~ file: index.js ~ line 19 ~ getServerSideProps ~ products",
  //   products
  // );

  return {
    props: {
      product,
    },
  };
}
