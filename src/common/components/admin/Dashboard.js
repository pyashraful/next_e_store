import { Grid, Paper, Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import AdminHeader from "./AdminHeader";

const StyledH3 = styled(Box)(({ theme }) => ({
  marginTop: 0,
  marginBottom: 8,
  color: theme.palette.text.light,
  fontSize: "30px",
  fontWeight: 700,
  textAlign: "center",
}));

const StyledP = styled(Box)(({ theme }) => ({
  marginTop: 0,
  marginBottom: 4,
  color: theme.palette.text.disabled,
  fontSize: 16,
  fontWeight: 600,
  textAlign: "center",
}));

const StyledP2 = styled(Box)(({ theme }) => ({
  margin: 0,
  color: theme.palette.text.disabled,
  fontSize: "16px",
  fontWeight: 600,
  textAlign: "center",
}));

const Title3 = ({ children }) => {
  return <StyledH3 component={"h3"}>{children}</StyledH3>;
};

const Body1 = ({ children }) => {
  return <StyledP component={"p"}>{children}</StyledP>;
};

const Body2 = ({ children }) => {
  return <StyledP2 component={"p"}>{children}</StyledP2>;
};

export default function DashBoard() {
  return (
    <>
      <AdminHeader />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ pt: 3, pb: 3 }}>
            <Body1>Earnings (before taxes)</Body1>
            <Title3>$30450.00</Title3>
            <Body2>Earnings (before taxes)</Body2>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ pt: 3, pb: 3 }}>
            <Body1>Earnings (before taxes)</Body1>
            <Title3>$30450.00</Title3>
            <Body2>Earnings (before taxes)</Body2>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ pt: 3, pb: 3 }}>
            <Body1>Earnings (before taxes)</Body1>
            <Title3>$30450.00</Title3>
            <Body2>Earnings (before taxes)</Body2>
          </Paper>
        </Grid>

        <Grid item xs={12} lg={8}>
          <Paper sx={{ px: 3.75, py: 2.5 }}>
            <Box component={"h5"} sx={{ mb: 3, mt: 0, fontSize: 16 }}>
              Seles
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
