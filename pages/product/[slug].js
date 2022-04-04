import connectDB from "../../utils/db.mjs";
import ProductModel from "../../model/productSchema";

export default function Details({ product }) {
  return <h1>Details</h1>;
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
