import Layout from "../components/Layout";
import Product from "../components/Product";

import connectDB from "../utils/db.mjs";
import ProductModel from "../model/productSchema";

export default function Home() {
  return (
    <Layout>
      <Product />
    </Layout>
  );
}

export async function getServerSideProps() {
  await connectDB();
  const product = await ProductModel.find().lean();
  const products = JSON.stringify(product);
  console.log(
    "🚀 ~ file: index.js ~ line 19 ~ getServerSideProps ~ products",
    products
  );

  return {
    props: {
      products,
    },
  };
}
