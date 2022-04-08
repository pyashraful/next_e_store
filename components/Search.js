import { Box, Button, FormControl, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
const MyTextfild = styled(OutlinedInput)({
  borderRadius: "40px",
  "& .MuiOutlinedInput-input": {
    paddingTop: "10px",
    paddingBottom: "10px",
  },
});

export default function Search() {
  return (
    <Box sx={{ maxWidth: 670, mx: "auto", flex: "1 1 0" }}>
      <FormControl sx={{ width: "100%" }}>
        <MyTextfild
          sx={{}}
          placeholder="Searching for..."
          startAdornment={<SearchIcon />}
          endAdornment={<Button>Search</Button>}
        />
      </FormControl>
    </Box>
  );
}
