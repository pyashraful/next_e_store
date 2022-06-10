import Product from "@model/product";
import ProductCart from "@components/product/ProductCart";
import { Grid } from "@mui/material";

export default function SearchResult({ products }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={3}></Grid>
      <Grid item xs={12} lg={9}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} lg={4} key={product._id}>
              <ProductCart product={product} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const { slag } = params;

  const data = await Product.find({
    $or: [
      {
        title: {
          $regex: `${slag}`,
          $options: "i",
        },
      },
      {
        brand: {
          $regex: `${slag}`,
          $options: "i",
        },
      },
    ],
  });

  const products = JSON.parse(JSON.stringify(data));

  return {
    props: {
      products,
    },
  };
}
