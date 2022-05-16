import { useState, useRef, useEffect } from "react";
import { Box, Button, FormControl, OutlinedInput, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import { useOuterClick } from "@utils/useOuterClick";

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
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  const handleSearch = (e) => {
    setShowSearchBox(true);
  };

  const innerRef = useOuterClick((e) => {
    setShowSearchBox(false);
  });

  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     if (boxRef.current.contains(e.target)) {
  //       return;
  //     }
  //     setSearchResult("");
  //   });
  //   return () => {
  //     document.removeEventListener("click", () => {});
  //   };
  // });

  return (
    <Box
      // ref={boxRef}
      sx={{ maxWidth: 670, mx: "auto", flex: "1 1 0", position: "relative" }}
    >
      <FormControl sx={{ width: "100%" }} ref={innerRef}>
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
      {showSearchBox && <SerarchResult></SerarchResult>}
    </Box>
  );
}
