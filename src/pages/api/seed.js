import nc from "next-connect";
import Product from "../../model/product";
import connectDB from "@utils/db.js";
import data from "@utils/data";
const handler = nc();

handler.get(async (req, res) => {
  await connectDB();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  res.send({ massage: "seed successfully" });
});

export default handler;
