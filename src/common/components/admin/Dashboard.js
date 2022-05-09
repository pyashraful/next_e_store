import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AdminHeader from "./AdminHeader";

export default function DashBoard() {
  return (
    <>
      <AdminHeader />
      <Grid container spacing={3}>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ pt: 3, pb: 3 }}>
            <Box
              component="h5"
              sx={{
                m: 0,
                mb: 1,
                fontSize: 16,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Earnings (before taxes)
            </Box>
            <Box
              component="h1"
              sx={{
                m: 0,
                mb: 0.5,
                fontSize: 30,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              $30450.00
            </Box>
            <Box
              component="p"
              sx={{ m: 0, fontSize: 16, fontWeight: 600, textAlign: "center" }}
            >
              Earnings (before taxes)
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ pt: 3, pb: 3 }}>
            <Box
              component="h5"
              sx={{
                m: 0,
                mb: 1,
                fontSize: 16,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Earnings (before taxes)
            </Box>
            <Box
              component="h1"
              sx={{
                m: 0,
                mb: 0.5,
                fontSize: 30,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              $30450.00
            </Box>
            <Box
              component="p"
              sx={{ m: 0, fontSize: 16, fontWeight: 600, textAlign: "center" }}
            >
              Earnings (before taxes)
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} lg={4}>
          <Paper sx={{ pt: 3, pb: 3 }}>
            <Box
              component="h5"
              sx={{
                m: 0,
                mb: 1,
                fontSize: 16,
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Earnings (before taxes)
            </Box>
            <Box
              component="h1"
              sx={{
                m: 0,
                mb: 0.5,
                fontSize: 30,
                fontWeight: 700,
                textAlign: "center",
              }}
            >
              $30450.00
            </Box>
            <Box
              component="p"
              sx={{ m: 0, fontSize: 16, fontWeight: 600, textAlign: "center" }}
            >
              Earnings (before taxes)
            </Box>
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
