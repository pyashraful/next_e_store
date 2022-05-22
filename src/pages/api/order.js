import Order from "@model/order";
export default async (req, res) => {
  let data = req.body;
  console.log("🚀 ~ file: order.js ~ line 5 ~ order", data);

  try {
    const order = await new Order({ ...data });
    console.log("🚀 ~ file: order.js ~ line 8 ~ order", order);
    res.json({ order });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
