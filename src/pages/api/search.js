import Product from "@model/product";

export default async (req, res) => {
  const query = req.query.q;
  console.log("🚀 ~ file: search.js ~ line 5 ~ query", query);
  const products = await Product.find({
    $or: [
      {
        title: {
          $regex: `${query}`,
          $options: "i",
        },
      },
      {
        brand: {
          $regex: `${query}`,
          $options: "i",
        },
      },
    ],
  }).limit(4);
  res.json(products);
};
