import { Button, OutlinedInput, TextField } from "@mui/material";
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

export default function SearchTextfield({ params }) {
  return (
    <MyTextfild
      {...params}
      // sx={{ overflow: "hidden" }}
      // placeholder="Searching for..."
      // InputProps={{
      //   ...params.InputProps,
      //   type: "search",
      // }}
      // startAdornment={<SearchIcon />}
      // endAdornment={
      //   <Button
      //     variant="contained"
      //     size="large"
      //     sx={{
      //       height: 44,
      //       width: 140,
      //       backgroundColor: "#F6F9FC",
      //       color: "text.primary",
      //       fontWeight: "bold",
      //       "&:hover": {
      //         backgroundColor: "#F6F9FC",
      //       },
      //     }}
      //   >
      //     Search
      //   </Button>
      // }
    />
  );
}
