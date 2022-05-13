import connectDB from "@utils/db.mjs";
import ProductModel from "../../../model/productSchema";

export default async (req, res) => {
  await connectDB();
  const product = await ProductModel.findById(req.query.id);
  res.send(product);
};
