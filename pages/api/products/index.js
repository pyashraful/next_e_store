import nc from "next-connect";
import Product from "../../../model/productSchema";
import db from "../../../utils/db.mjs";

const handler = nc();
handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  console.log(
    "🚀 ~ file: index.js ~ line 9 ~ handler.get ~ products",
    products
  );
  await db.disconnect();
  res.send(products);
});

export default handler;
