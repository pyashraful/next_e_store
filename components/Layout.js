import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>E-Shop</title>
      </Head>
      <Nav />
      <main>{children}</main>
    </div>
  );
}
