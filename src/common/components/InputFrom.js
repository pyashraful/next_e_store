import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

const StyledInputFrom = styled(TextField)({
  "& MuiFormLabel-root": {
    fontSize: "14px",
    color: "red",
  },
  "& label": { fontSize: "14px" },
});

export default function InputFrom({ control, name, label, type, placeholder }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <StyledInputFrom
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          sx={{ fontSize: 14 }}
          label={label}
          variant="outlined"
          size="small"
          fullWidth
        />
      )}
    />
  );
}
