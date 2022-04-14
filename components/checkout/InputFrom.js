import { Controller } from "react-hook-form";

import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/material/styles";

const StyledInputFrom = styled(TextField)({
  "& MuiFormLabel-root": {
    fontSize: "14px",
    color: "red",
  },
  "& label": { fontSize: "14px" },
});

export default function InputFrom({
  control,
  name,
  label,
  type,
  placeholder,
  required,
  error,
  select,
  selectValue,
}) {
  console.log(selectValue);
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      rules={{ required: error }}
      render={({ field: { onChange, value } }) => (
        <StyledInputFrom
          sx={{ fontSize: 14 }}
          label={label}
          variant="outlined"
          size="small"
          onChange={onChange}
          value={value}
          fullWidth
        />
      )}
    />
  );
}
