import { useState } from "react";
import { Box, Button, FormControl, OutlinedInput, Paper } from "@mui/material";
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

const SerarchResult = styled(Paper)((theme) => ({
  position: "absolute",
  top: "100%",
  left: 0,
  height: 250,
  minWidth: "100%",
}));

export default function Search() {
  const [searchResult, setSearchResult] = useState("");

  const handleSearch = (e) => {
    setSearchResult(e.target.value);
  };

  return (
    <Box
      sx={{ maxWidth: 670, mx: "auto", flex: "1 1 0", position: "relative" }}
    >
      <FormControl sx={{ width: "100%" }}>
        <MyTextfild
          onChange={(e) => {
            handleSearch(e);
          }}
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
      {searchResult.length > 0 && <SerarchResult></SerarchResult>}
    </Box>
  );
}
