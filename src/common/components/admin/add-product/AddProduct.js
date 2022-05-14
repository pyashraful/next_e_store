import OutlinedButton from "@components/OutlinedButton";

import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material";
import React from "react";
import FileInput from "./FileInput";

const StyledInput = styled(TextField)({
  // "& MuiFormLabel-root": {
  //   fontSize: "14px",
  // },
  // "& label": { fontSize: "14px" },
});

export default function AddProduct() {
  return (
    <Paper sx={{ p: "30px" }}>
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <StyledInput label="E" name="name" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              select
              label="Category"
              fullWidth
              size="small"
              name=""
              value="Electronics"
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </StyledInput>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FileInput />
          </Grid>
          <Grid item xs={12} lg={12}>
            <StyledInput
              label="Price"
              fullWidth
              name="name"
              multiline
              rows={4}
              size="small"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Stock"
              type="text"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Tag"
              type="text"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Regular Price"
              type="number"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Seles Price"
              type="number"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
        </Grid>
        <Button sx={{ mt: 4 }} variant="contained">
          Save Product
        </Button>
      </form>
    </Paper>
  );
}
