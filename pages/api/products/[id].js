import nc from "next-connect";
import connectDB from "../../../utils/db.mjs";
import ProductModel from "../../../model/productSchema";

const handler = nc();

handler.get(async (req, res) => {
  await connectDB();
  const product = await ProductModel.findById(req.query.id);
  console.log("🚀 ~ file: [id].js ~ line 11 ~ handler.get ~ product", product);
  res.send(product);
});

export default handler;
