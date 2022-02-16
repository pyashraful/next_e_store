import Head from "next/head";
import Search from "./Seach";
import CardBadge from "./CardBadge";
import ProfileIcon from "./PorfileIcon";
import Logo from "../public/Logo.svg";
import { Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

const boxStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "10px 20px",
  backgroundColor: "#c39e6b",
  height: "80px",
};

export default function Layout({ children }) {
  return (
    <div className="container">
      <Head>
        <title>My page</title>
      </Head>
      <Box sx={boxStyle}>
        {/* <Typography>My page</Typography> */}
        <Logo width="99px" height="28px" />
        <Search />
        <div>
          <CardBadge />
          <ProfileIcon />
        </div>
      </Box>
      <Container maxWidth="lg">{children}</Container>
    </div>
  );
}
