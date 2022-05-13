import Product from "../../../model/productSchema";
import connectDB from "@utils/db.mjs";

export default async (req, res) => {
  await connectDB();
  const products = await Product.find({});
  res.send(products);
};
