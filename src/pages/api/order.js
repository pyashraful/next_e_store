import Order from "@model/order";

export default async (req, res) => {
  let data = req.body;
  try {
    await Order.deleteMany({});
    const order = await new Order({
      ...data,
    });
    const newOrder = await order.save();
    res.json({ newOrder });
  } catch (err) {
    console.log("🚀 ~ file: order.js ~ line 19 ~ err", err);
    res.send("error");
  }
};
