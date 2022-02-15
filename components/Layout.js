import Head from "next/head";
import Search from "./Seach";
import CardBadge from "./CardBadge";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { theme } from "../components/Theme";

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>My page</title>
      </Head>
      <AppBar position="static">
        <Toolbar>
          <Typography>My page</Typography>
          <Search />
          <CardBadge />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
}
