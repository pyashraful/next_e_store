import Head from "next/head";
import Nav from "./Nav";
import Cart from "./Cart";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>E-Shop</title>
      </Head>
      <Nav />
      <Cart />
      {/* <SearchInput /> */}
      <main style={{ marginTop: "120px" }}>{children}</main>
    </div>
  );
}
