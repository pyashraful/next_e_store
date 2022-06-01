import Products from "@components/product/Products";
import dbConnect from "@utils/dbConnect.js";
import ProductModel from "../model/product";
export default function Home({ products }) {
  return <Products products={products} />;
}

Home.withOutContainer = true;

export async function getServerSideProps() {
  await dbConnect();
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
