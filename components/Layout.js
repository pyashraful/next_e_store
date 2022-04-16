import { useState } from "react";
import Head from "next/head";
import Nav from "./Nav";
import CartDrawer from "./CartDrawer";
import MobileNav from "./mobileNav/MobileNav";
import LogSignupModal from "./user/LogSignupModal";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Head>
        <title>E-Shop</title>
      </Head>
      <Nav showModal={showModal} setShowModal={setShowModal} />
      <LogSignupModal showModal={showModal} setShowModal={setShowModal} />
      <CartDrawer />
      {/* <SearchInput /> */}
      <main style={{ marginTop: "120px" }}>{children}</main>
      <MobileNav showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
