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
  color: "#D23F57",
  backgroundColor: "#FCE9EC",
  padding: "8px 16px",
  boxShadow: "none",
  "&:hover": {
    color: "#fff",
    backgroundColor: "rgb(210, 63, 87)",
  },
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomChip label={"2.Details"} clickable component={"button"} />
              <ChipBar></ChipBar>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomChip label={"3.Payment"} clickable component={"button"} />
              <ChipBar></ChipBar>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CustomChip label={"4.Review"} clickable component={"button"} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
