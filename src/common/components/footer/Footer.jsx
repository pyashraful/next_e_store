import { Box, Container, Grid } from "@mui/material";
import { NextLinkComposed } from "../Link";
import { styled } from "@mui/system";
import React from "react";

const StyledLink = styled(Box)({
  color: "#AEB4BE",
  textDecoration: "none",
  display: "block",
  padding: "0.3rem 0",
  fontSize: "0.875rem",
  "&:hover": {
    color: "#F6F9FC",
  },
});

const aboutData = [
  { label: "Careers", link: "#" },
  { label: "Our Stores", link: "#" },
  { label: "Our Cares", link: "#" },
  { label: "Contact Us", link: "#" },
  { label: "Terms & Conditions", link: "#" },
  { label: "Privacy Policy", link: "#" },
];

const customerCareData = [
  { label: "Help Center", link: "#" },
  { label: "How to Buy", link: "#" },
  { label: "Our Cares", link: "#" },
  { label: "Track Your Order", link: "#" },
  { label: "Corporate & Bulk Purchasing", link: "#" },
  { label: "Returns & Refunds", link: "#" },
];

const ContactData = [
  {
    label: "70 Washington Square South, New York, NY 10012, United States",
    link: "#",
  },
  { label: "Email: test@test.com", link: "#" },
  { label: "Phone: +1 1123 456 780", link: "#" },
];

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0c0e30", color: "#fff", py: 10 }}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={4}>
            <Box
              sx={{ mb: 2.5, display: "block" }}
              component={NextLinkComposed}
              to={"/#"}
            >
              <img src="/footerLogo.svg" alt="logo" />
            </Box>
            <Box component={"p"} sx={{ fontSize: 14 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
              libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat
              et lectus vel ut sollicitudin elit at amet.
            </Box>
          </Grid>
          <Grid item xs={12} lg={2}>
            <Box component={"h5"} sx={{ mt: 0, mb: 2.5, fontSize: 25 }}>
              About us
            </Box>
            <Box>
              {aboutData.map((item) => (
                <StyledLink
                  key={item.label}
                  component={NextLinkComposed}
                  to={item.link}
                >
                  {item.label}
                </StyledLink>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box component={"h5"} sx={{ mt: 0, mb: 2.5, fontSize: 25 }}>
              Customer Care
            </Box>
            <Box>
              {customerCareData.map((item) => (
                <StyledLink
                  key={item.label}
                  component={NextLinkComposed}
                  to={item.link}
                >
                  {item.label}
                </StyledLink>
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} lg={3}>
            <Box component={"h5"} sx={{ mt: 0, mb: 2.5, fontSize: 25 }}>
              Contact Us
            </Box>
            <Box>
              {ContactData.map((item) => (
                <StyledLink key={item.label}>{item.label}</StyledLink>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
