import CartBadge from "./CartBadge";

export default function Nav() {
  return (
    <div className="header">
      <header className="max-w-screen-xl mx-auto my-0 h-20 content-center">
        <nav>
          <ul className="flex flex-row flex-wrap justify-end justify-items-center items-center">
            <li className="">E-SHOP</li>
            <li className="basis-auto mx-auto my-0">Search</li>
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
