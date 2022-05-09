import { Box, Button, FormControl, OutlinedInput } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
const MyTextfild = styled(OutlinedInput)({
  borderRadius: "40px",
  overflow: "hidden",
  paddingRight: 0,
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
          sx={{ overflow: "hidden" }}
          placeholder="Searching for..."
          startAdornment={<SearchIcon />}
          endAdornment={
            <Button
              variant="contained"
              size="large"
              sx={{
                height: 44,
                width: 140,
                backgroundColor: "#F6F9FC",
                color: "text.primary",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#F6F9FC",
                },
              }}
            >
              Search
            </Button>
          }
        />
      </FormControl>
    </Box>
  );
}
