import { Box, Button, FormControl, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Search() {
  return (
    <Box>
      <FormControl>
        <TextField
          placeholder="Searching for..."
          InputProps={{
            startAdornment: <SearchIcon />,
            endAdornment: <Button>Search</Button>,
          }}
        />
      </FormControl>
    </Box>
  );
}
