import { Container } from "@mui/material";
import { useContext } from "react";
import CartBadge from "./CartBadge";
import Search from "./Search";
import UserProfile from "./UserProfile";
import { Store } from "../utils/store";

export default function Nav() {
  const [state, dispatch] = useContext(Store);
  const { cartOpen } = state;

  function toggleDrawer() {
    if (cartOpen === true) {
      console.log("hi");
      dispatch({ type: "CLOSE_CART" });
    }
    if (cartOpen === false) {
      console.log("by");
      dispatch({ type: "OPEN_CART" });
    }
  }

  return (
    <div className="header pr-6 pl-6 bg-white shadow-blue-50">
      <header className="max-w-screen-xl mx-auto my-0">
        <nav>
          <ul className=" h-20 flex flex-row flex-wrap justify-end justify-items-center items-center">
            <li className="">E-SHOP</li>
            <li className="basis-auto mx-auto my-0">
              <Search />
            </li>
            <li className="">
              <UserProfile />
            </li>
            <li onClick={() => toggleDrawer()} className="">
              <CartBadge />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
