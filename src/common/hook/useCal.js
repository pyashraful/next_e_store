import { Store } from "@utils/store";
import { useContext } from "react";

export default function useCal() {
  const { state } = useContext(Store);
  const { cartItems } = state.cart;

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const taxt = subtotal * 0.1;
  const shipping = 0;
  const discount = 0;
  const total = subtotal + taxt + shipping - discount;

  return {
    subtotal,
    taxt,
    shipping,
    discount,
    total,
  };
}
