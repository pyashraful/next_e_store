import { Paper, Grid, TextField, MenuItem, Button } from "@mui/material";
import React from "react";
import FileInput from "./FileInput";

export default function AddProduct() {
  return (
    <Paper sx={{ p: "30px" }}>
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TextField label="E" name="name" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField select label="Category" name="" value="Electronics">
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FileInput />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField label="Price" name="name" multiline rows={4} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField label="Stock" type="text"></TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField label="Tag" type="text"></TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField label="Regular Price" type="number"></TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField label="Seles Price" type="number"></TextField>
          </Grid>
        </Grid>
        <Button sx={{ mt: 4 }} variant="contained">
          Save Product
        </Button>
      </form>
    </Paper>
  );
}
