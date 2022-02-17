import CartBadge from "./CartBadge";
import Search from "./Search";

export default function Nav() {
  return (
    <div className="header pr-6 pl-6">
      <header className="max-w-screen-xl mx-auto my-0">
        <nav>
          <ul className=" h-20 flex flex-row flex-wrap justify-end justify-items-center items-center">
            <li className="">E-SHOP</li>
            <li className="basis-auto mx-auto my-0">
              <Search />
            </li>
            <li className="">Profile</li>
            <li className="">
              <CartBadge />
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
