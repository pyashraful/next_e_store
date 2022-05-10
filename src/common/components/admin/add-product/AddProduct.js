import { Grid, TextField, MenuItem } from "@mui/material";
import { styled } from "@mui/material";
import React from "react";

const StyledInput = styled(TextField)({
  // "& MuiFormLabel-root": {
  //   fontSize: "14px",
  // },
  "& label": { fontSize: "14px" },
});

export default function AddProduct() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={6}>
        <StyledInput label="Name" fullWidth size="small" name="name" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <StyledInput
          select
          label="Category"
          fullWidth
          size="small"
          name="name"
        ></StyledInput>
      </Grid>
    </Grid>
  );
}
