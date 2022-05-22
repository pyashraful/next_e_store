import Order from "@model/order";
import User from "@model/user";
export default async (req, res) => {
  let data = req.body;
  console.log("🚀 ~ file: order.js ~ line 5 ~ order", data);

  try {
    const user = await User.findById({ _id: data.user });
    const newOrder = await new Order({ ...data, user: user._id });
    const order = await newOrder.save();
    console.log("🚀 ~ file: order.js ~ line 9 ~ order2", newOrder);
    console.log("🚀 ~ file: order.js ~ line 8 ~ order", order);
    res.json({ order });
  } catch (err) {
    console.log(err);
    res.send("error");
  }
};
