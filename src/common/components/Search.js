import { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Autocomplete,
  Stack,
} from "@mui/material";
import SearchTextField from "./SearchTextField";

const exampleData = [
  { code: "AF", code3: "AFG", name: "Afghanistan", number: "004" },
  { code: "AL", code3: "ALB", name: "Albania", number: "008" },
  { code: "DZ", code3: "DZA", name: "Algeria", number: "012" },
  { code: "AS", code3: "ASM", name: "American Samoa", number: "016" },
  { code: "AD", code3: "AND", name: "Andorra", number: "020" },
  { code: "AO", code3: "AGO", name: "Angola", number: "024" },
  { code: "AI", code3: "AIA", name: "Anguilla", number: "660" },
  { code: "AQ", code3: "ATA", name: "Antarctica", number: "010" },
  { code: "AG", code3: "ATG", name: "Antigua and Barbuda", number: "028" },
];

export default function Search() {
  return (
    <Box
      sx={{ maxWidth: 670, mx: "auto", flex: "1 1 0", position: "relative" }}
    >
      <Stack>
        <Autocomplete
          freeSolo
          options={exampleData.map((option) => option.name)}
          renderInput={(params) => <SearchTextField params={params} />}
        />
      </Stack>
    </Box>
  );
}
// {...params}
// params={params}
