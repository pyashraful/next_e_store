import { Stack, TextField, Button } from "@mui/material";

export default function VoucherField() {
  return (
    <Stack spacing={2}>
      <TextField placeholder="Voucher" />
      <Button fullWidth variant="outlined" color="primary">
        Apply Voucher
      </Button>
    </Stack>
  );
}
