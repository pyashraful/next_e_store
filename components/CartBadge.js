import Bag from "../public/Bag.svg";

export default function CartBadge() {
  return (
    <div className="cart-wrapper inline-block relative">
      <div className="cart rounded-full bg-orange-600 m-auto p-1 ">
        <Bag className="fill-blue-600 stroke-2 w-7 h-7 font-bold text-lg" />
      </div>
      <div className="cart-badge absolute top-0 right-0">
        <span className="cart-badge-count">0</span>
      </div>
    </div>
  );
}
