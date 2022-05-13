import mongoose from "mongoose";

const order = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  cart: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      quantity: { type: Number, required: true },
    },
  ],
  address: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    address: { type: String, required: true },
  },
});
