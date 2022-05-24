import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";

export default function InputFrom({
  select,
  control,
  name,
  label,
  type,
  placeholder,
  children,
}) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value }, formState }) => (
        <TextField
          type={type}
          placeholder={placeholder}
          select={select}
          value={value}
          onChange={onChange}
          sx={{ fontSize: 14 }}
          label={label}
          required={true}
          error={!!formState.errors[name]}
          helperText={
            formState.errors[name] && formState.errors?.[name]?.message
          }
        >
          {children}
        </TextField>
      )}
    />
  );
}
