// import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  return (
    <FormControl>
      <OutlinedInput>
        <SearchIcon />
        helloworld
        <InputBase placeholder="Search…" />
      </OutlinedInput>
      {/* <IconButton /> */}
    </FormControl>
  );
}
