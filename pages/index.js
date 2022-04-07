import Layout from "../components/Layout";
// import Product from "../components/Product";
import ProductsItems from "../components/product/ProductsItems";

import connectDB from "../utils/db.mjs";
import ProductModel from "../model/productSchema";

export default function Home({ products }) {
  // console.log("🚀 ~ file: index.js ~ line 8 ~ Home ~ products", products);
  return (
    <Layout>
      {/* <Product products={products} /> */}
      <ProductsItems products={products} />
    </Layout>
  );
}

export async function getServerSideProps() {
  await connectDB();
  const product = await ProductModel.find({}).lean();
  const products = JSON.parse(JSON.stringify(product));

  // console.log(
  //   "🚀 ~ file: index.js ~ line 19 ~ getServerSideProps ~ products",
  //   products
  // );

  return {
    props: {
      products,
    },
  };
}
