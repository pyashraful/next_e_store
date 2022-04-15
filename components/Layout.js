import Head from "next/head";
import Nav from "./Nav";
import CartDrawer from "./CartDrawer";
import MobileNav from "./mobileNav/MobileNav";
import LogSignupModal from "./user/LogSignupModal";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>E-Shop</title>
      </Head>
      <Nav />
      <LogSignupModal />
      <CartDrawer />
      {/* <SearchInput /> */}
      <main style={{ marginTop: "120px" }}>{children}</main>
      <MobileNav />
    </div>
  );
}
