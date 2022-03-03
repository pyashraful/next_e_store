import nc from "next-connect";
import Product from "../../model/productSchema";
import db from "../../utils/db.mjs";
import data from "../../utils/data";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.product);
  await db.disconnect();
  res.send({ massage: "seed successfully" });
});

export default handler;
