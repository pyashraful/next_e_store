import React, { useState } from "react";
import {
  FormControlLabel,
  Paper,
  Stack,
  Radio,
  Divider,
  TextField,
  Box,
  Grid,
  Button,
} from "@mui/material";

export default function Paymentcard() {
  const [value, setValue] = useState("CARD");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Paper sx={{ px: 3, py: 3, mb: 3 }}>
        <FormControlLabel
          control={<Radio />}
          checked={value === "CARD"}
          value="CARD"
          onChange={handleChange}
          label="Pay with credit card"
        />
        <Divider sx={{ mb: 3 }} />
        <form>
          <Box sx={{ mb: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth size="small" label="Cart Number" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth size="small" label="Exp Date" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth size="small" label="Name on Card" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField fullWidth size="small" label="Name on Card" />
              </Grid>
            </Grid>
          </Box>
          <Button variant="outlined">submit</Button>
        </form>
        <Divider sx={{ mt: 3 }} />
        <FormControlLabel
          checked={value === "COD"}
          control={<Radio />}
          value="COD"
          onChange={handleChange}
          label="Cash On Delivery"
        />
      </Paper>
      <Stack direction="row" spacing={2}>
        <Button fullWidth variant="outlined" color="primary">
          back to Cart
        </Button>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Pyament
        </Button>
      </Stack>
    </>
  );
}
