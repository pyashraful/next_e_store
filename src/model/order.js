import mongoose from "mongoose";

const order = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    orderItems: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    shippingAddress: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      zipcode: { type: String, required: true },
      country: { type: String },
      address: { type: String, required: true },
    },

    paymentMethod: {
      type: String,
      required: true,
    },

    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    tax: {
      type: Number,
      required: true,
      default: 0,
    },
    shippingCost: {
      type: Number,
      required: true,
      default: 0,
    },
    discount: {
      type: Number,
      default: 0,
      required: true,
    },
    status: {
      type: String,
      default: "pending",
      enum: ["pending", "processing", "delivered", "canceled"],
    },
    createdAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.models.Order || mongoose.model("Order", order);
export default Order;
