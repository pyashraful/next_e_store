import { Grid, Box, Chip } from "@mui/material";
import React from "react";

export default function ProgressBar() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={8} lg={8}>
        <Box>
          <Chip clickable component={"button"}>
            button
          </Chip>
        </Box>
      </Grid>
    </Grid>
  );
}
