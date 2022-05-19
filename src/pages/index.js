import Products from "@components/product/Products";
import connectDB from "@utils/db.mjs";
import ProductModel from "../model/productSchema";
export default function Home({ products }) {
  return <Products products={products} />;
}

export async function getServerSideProps() {
  await connectDB();
  const product = await ProductModel.find({}).lean();
  const products = JSON.parse(JSON.stringify(product));
  return {
    props: {
      products,
    },
  };
}
