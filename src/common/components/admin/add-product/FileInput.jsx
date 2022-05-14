import { useRef } from "react";
import OutlinedButton from "@components/OutlinedButton";
import { Box, Divider } from "@mui/material";

export default function FileInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    // console.log("hi");
    inputRef.current.click();
    console.log(inputRef.current);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: "1px dashed #DAE1E7",
        borderRadius: "10px",
        minHeight: "200px",
      }}
      role="button"
      type="file"
      onClick={handleClick}
    >
      <input
        type="file"
        accept=".jpeg,.jpg,.png,.gif"
        multiple=""
        style={{ display: "none" }}
        autoComplete="off"
        tabIndex="-1"
        ref={inputRef}
      />
      <Box
        sx={{
          mt: 0,
          mb: 2,
          fontSize: 16,
          fontWeight: 600,
          color: "text.disabled",
        }}
        component={"h5"}
      >
        Drag & drop product image here
      </Box>
      <Divider
        sx={{
          borderColor: "#F3F5F9",
          borderBottomWidth: "thin",
          width: "200px",
          mx: "auto",
        }}
      />
      <Box
        sx={{
          m: 0,
          color: "rgb(125, 135, 156)",
          backgroundColor: "#fff",
          px: "1rem",
          mt: "-10px",
          mb: "16px",
        }}
        component={"p"}
      >
        on
      </Box>
      <OutlinedButton>select file</OutlinedButton>
      <Box sx={{ fontSize: 12, color: "text.disabled" }} component={"small"}>
        Upload 280*280 image
      </Box>
    </Box>
  );
}
