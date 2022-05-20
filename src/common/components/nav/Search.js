import { useState, useCallback, useRef } from "react";
import {
  Box,
  Button,
  FormControl,
  OutlinedInput,
  Paper,
  MenuList,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/system";
import axios from "axios";
import { NextLinkComposed } from "../Link";

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
  minWidth: "100%",
}));

export default function Search() {
  const searchRef = useRef(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [results, setResults] = useState([]);

  const onChange = useCallback(async (event) => {
    const query = event.target.value;

    setQuery(query);
    if (query.length) {
      try {
        const res = await axios.get(`/api/search?q=${query}`);
        console.log("🚀 ~ file: Search.js ~ line 48 ~ onChange ~ res", res);
        setResults(res.data);
      } catch (error) {
        console.log("🚀 ~ file: search.js ~ line 34 ~ error", error);
      }
    } else {
      setResults([]);
    }
  }, []);

  const onFocus = useCallback(() => {
    setActive(true);
    window.addEventListener("click", onClick);
  }, []);

  const onClick = useCallback((event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setActive(false);
      window.removeEventListener("click", onClick);
    }
  }, []);

  return (
    <Box
      ref={searchRef}
      sx={{ maxWidth: 670, mx: "auto", flex: "1 1 0", position: "relative" }}
    >
      <FormControl sx={{ width: "100%" }}>
        <MyTextfild
          onChange={onChange}
          onFocus={onFocus}
          value={query}
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
      {active && results.length > 0 && (
        <SerarchResult>
          <MenuList>
            {results.map((result) => (
              <MenuItem
                key={result._id}
                component={NextLinkComposed}
                to={`/product/${result._id}`}
              >
                {result.title}
              </MenuItem>
            ))}
          </MenuList>
        </SerarchResult>
      )}
    </Box>
  );
}
