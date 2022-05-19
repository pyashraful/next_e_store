import ProductsItems from "@components/product/ProductsItems";
import connectDB from "@utils/db.mjs";
import ProductModel from "../model/productSchema";
export default function Home({ products }) {
  return <ProductsItems products={products} />;
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
