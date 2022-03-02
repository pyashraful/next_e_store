import nc from "next-connect";
import Product from "../../model/Product";
import db from "../../utils/db";
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
