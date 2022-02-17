import Head from "next/head";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>E-Shop</title>
      </Head>
      <Nav />
      <main className="max-w-screen-xl mx-auto my-0  px-6">{children}</main>
    </div>
  );
}
