import React, { useState } from "react";
import {
  FormControlLabel,
  Paper,
  Radio,
  Divider,
  TextField,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { NextLinkComposed } from "@components/Link";

export default function Paymentcard() {
  const [value, setValue] = useState("CARD");
  console.log(
    "🚀 ~ file: Paymentcard.jsx ~ line 16 ~ Paymentcard ~ value",
    value
  );

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <Paper sx={{ px: 3, py: 3, mb: 3 }}>
        <FormControlLabel
          sx={{ mb: 2, mr: 2 }}
          control={<Radio />}
          checked={value === "CARD"}
          value="CARD"
          onChange={handleChange}
          label={"Pay with credit card"}
        />
        <Divider sx={{ mb: 3 }} />
        {value === "CARD" && (
          <form>
            <Box sx={{ mb: 3 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField label="Cart Number" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Exp Date" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Name on Card" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField label="Name on Card" />
                </Grid>
              </Grid>
            </Box>
            <Button sx={{ mb: 3 }} variant="outlined">
              submit
            </Button>
            <Divider sx={{ mb: 3 }} />
          </form>
        )}
        <FormControlLabel
          checked={value === "COD"}
          control={<Radio />}
          value="COD"
          onChange={handleChange}
          label="Cash On Delivery"
        />
      </Paper>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Button
            LinkComponent={NextLinkComposed}
            to="/checkout"
            fullWidth
            variant="outlined"
            color="primary"
          >
            Back to checkout details
          </Button>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Button
            LinkComponent={NextLinkComposed}
            to="#"
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Review Order
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
