import Link from "next/link";
import Layout from "../../components/Layout";
import { Container, Typography, Box, Grid, Paper } from "@mui/material";
import InputFrom from "../../components/checkout/InputFrom";
import { useForm } from "react-hook-form";

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
  const { handlesubmit, control } = useForm();

  return (
    <Layout>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8} lg={8}>
            <Paper sx={{ p: 2 }}>
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
                <from>
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
                          select={field.selecte}
                          selectValue={field.countryName}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </from>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper>Bill</Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
