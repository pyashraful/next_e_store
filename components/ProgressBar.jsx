import { Grid, Box, Chip } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const ChipBar = styled(Box)({
  width: "50px",
  height: "4px",
  backgroundColor: "#FCE9EC",
});

const CustomChip = styled(Chip)({
  fontSize: "14px",
  fontWeight: "600",
  backgroundColor: "rgb(210, 63, 87)",
  padding: "8px 16px",
  "& .MuiChip-label'": {
    marginLeft: "12px",
    marginRight: "12px",
  },
});

export default function ProgressBar() {
  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CustomChip label={"1.Cart"} clickable component={"button"} />
            <ChipBar></ChipBar>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
