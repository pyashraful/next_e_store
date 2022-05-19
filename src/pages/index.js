import Products from "@components/product/Products";
import connectDB from "@utils/db.js";
import ProductModel from "../model/product";
export default function Home({ products }) {
  return <Products products={products} />;
}

export async function getServerSideProps() {
  await connectDB();
  const product = await ProductModel.find({}).lean();
  // console.log(
  //   "🚀 ~ file: index.js ~ line 11 ~ getServerSideProps ~ product",
  //   product
  // );
  const products = JSON.parse(JSON.stringify(product));
  // console.log(
  //   "🚀 ~ file: index.js ~ line 13 ~ getServerSideProps ~ products",
  //   products
  // );
  return {
    props: {
      products,
    },
  };
}
