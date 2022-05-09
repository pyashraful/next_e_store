import nc from "next-connect";
import Product from "../../../model/productSchema";
import connectDB from "../../"@utils/db.mjs"";

const handler = nc();
handler.get(async (req, res) => {
  await connectDB();
  const products = await Product.find({});
  // console.log(products);
  res.send(products);
});

export default handler;
