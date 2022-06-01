import { useState } from "react";
import Head from "next/head";
import Nav from "./nav/Nav";
import MobileNav from "./mobileNav/MobileNav";
import LoginModal from "./user/LoginModal";
import Footer from "./footer/Footer";
import dynamic from "next/dynamic";
import { Container } from "@mui/material";

// const LoginModal = dynamic(() => import("./user/LoginModal"));

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Head>
        <title>E-Shop</title>
      </Head>
      <Nav showModal={showModal} setShowModal={setShowModal} />
      <LoginModal showModal={showModal} setShowModal={setShowModal} />
      {children.type.withOutContainer ? (
        <main>{children}</main>
      ) : (
        <main>
          <Container maxWidth="lg" sx={{ m: "2rem auto" }}>
            {children}
          </Container>
        </main>
      )}

      <MobileNav showModal={showModal} setShowModal={setShowModal} />
      <Footer />
    </div>
  );
}
