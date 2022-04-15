import Layout from "../../components/Layout";
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Stack,
  Button,
  Divider,
  TextField,
} from "@mui/material";
import { styled } from "@mui/system";
import InputFrom from "../../components/InputFrom";
import { useForm } from "react-hook-form";

const BillItemBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 8,
  fontSize: 14,
});

const BillTitle = styled(Typography)({
  fontSize: 14,
});
const BillAmount = styled(Typography)({
  fontSize: 18,
  fontWeight: 600,
});

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
                          select={field.selecte}
                          selectValue={field.countryName}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Paper>
              <Stack direction="row" spacing={2}>
                <Button fullWidth variant="outlined" color="primary">
                  back to Cart
                </Button>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Pyament
                </Button>
              </Stack>
            </form>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper sx={{ p: 4 }}>
              <Box>
                <Box>
                  <BillItemBox>
                    <BillTitle variant="subtitle1">Subtotal:</BillTitle>
                    <BillAmount variant="subtitle1">$1000</BillAmount>
                  </BillItemBox>
                </Box>
                <Box>
                  <BillItemBox>
                    <BillTitle variant="subtitle1">Shipping:</BillTitle>
                    <BillAmount variant="subtitle1">-</BillAmount>
                  </BillItemBox>
                </Box>
                <Box>
                  <BillItemBox>
                    <BillTitle variant="subtitle1">Taxt:</BillTitle>
                    <BillAmount variant="subtitle1">$10</BillAmount>
                  </BillItemBox>
                </Box>
                <Box>
                  <BillItemBox>
                    <BillTitle variant="subtitle1">Discount:</BillTitle>
                    <BillAmount variant="subtitle1">-</BillAmount>
                  </BillItemBox>
                </Box>
              </Box>
              <Divider />
              <BillAmount
                align="right"
                sx={{ mb: 2, fontSize: 25 }}
                variant="subtitle1"
              >
                $1010
              </BillAmount>
              <Stack spacing={2}>
                <TextField fullWidth size="small" placeholder="Voucher" />
                <Button fullWidth variant="outlined" color="primary">
                  Apply Voucher
                </Button>
              </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
