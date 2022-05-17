import Layout from "@components/Layout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Button,
  MenuItem,
} from "@mui/material";

import InputFrom from "@components/InputFrom";
import { useForm } from "react-hook-form";
import ProgressBar from "@components/ProgressBar";
import AmountDetails from "@components/AmountDetails";
import VoucherField from "@components/VoucherField";
import { NextLinkComposed } from "@components/Link";

const fromFields = [
  {
    name: "name",
    label: "Full Name",
  },
  {
    name: "email",
    label: "Email Address",
  },
  {
    name: "phone",
    label: "Phone Number",
  },
  {
    name: "zip",
    label: "Zip Code",
  },

  {
    name: "country",
    label: "Country",
    selecte: true,
    countryName: [
      { code: "AF", code3: "AFG", name: "Afghanistan", number: "004" },
      { code: "AL", code3: "ALB", name: "Albania", number: "008" },
      { code: "DZ", code3: "DZA", name: "Algeria", number: "012" },
      { code: "AS", code3: "ASM", name: "American Samoa", number: "016" },
      { code: "AD", code3: "AND", name: "Andorra", number: "020" },
      { code: "AO", code3: "AGO", name: "Angola", number: "024" },
      { code: "AI", code3: "AIA", name: "Anguilla", number: "660" },
      { code: "AQ", code3: "ATA", name: "Antarctica", number: "010" },
      { code: "AG", code3: "ATG", name: "Antigua and Barbuda", number: "028" },
    ],
  },
  {
    name: "address",
    label: "Address",
  },
];

export default function Checkout() {
  const { handleSubmit, control } = useForm({});

  const onSubmit = (data) => {
    console.log("hi");
    console.log(data);
  };

  return (
    <Layout>
      <Container>
        <ProgressBar ok={true} em={true} />
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Paper sx={{ p: 4, mb: 4 }}>
                <Box>
                  <Typography
                    variant="h5"
                    fontSize={14}
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                  >
                    Shipping Address
                  </Typography>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    {fromFields.map((field) => (
                      <Grid
                        sx={{ fontSize: 14 }}
                        item
                        xs={12}
                        md={6}
                        lg={6}
                        key={field.name}
                      >
                        <InputFrom
                          label={field.label}
                          name={field.name}
                          control={control}
                          select={field.selecte === true}
                          selectValue={field.countryName}
                        >
                          {fromFields.map((field) =>
                            field.selecte
                              ? field.countryName.map((country) => (
                                  <MenuItem
                                    key={country.code}
                                    value={country.name}
                                  >
                                    {country.name}
                                  </MenuItem>
                                ))
                              : ""
                          )}
                        </InputFrom>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>

              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  <Button
                    LinkComponent={NextLinkComposed}
                    to="/cart"
                    fullWidth
                    variant="outlined"
                    color="primary"
                  >
                    cart
                  </Button>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Button
                    LinkComponent={NextLinkComposed}
                    to="/payment"
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                  >
                    Payment
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <AmountDetails>
              <VoucherField />
            </AmountDetails>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
