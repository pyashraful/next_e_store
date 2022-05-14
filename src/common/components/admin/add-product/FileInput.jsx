import { useState, useRef, useCallback } from "react";
import OutlinedButton from "@components/OutlinedButton";
import { Box, Divider } from "@mui/material";
import { useDropzone } from "react-dropzone";

export default function FileInput() {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadstart = () => {
      setLoading(true);
    };
    reader.onloadend = () => {
      setLoading(false);
    };
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  }, []);
  console.log(image);
  console.log(loading);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
  });

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
      {...getRootProps()}
    >
      <input
        type="file"
        accept=".jpeg,.jpg,.png,.gif"
        multiple=""
        style={{ display: "none" }}
        autoComplete="off"
        tabIndex="-1"
        {...getInputProps()}
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
      {/* 
      {image && (
        <Box>
          <Box sx={{ position: "absolute", color: "red", top: 10, left: 10 }}>
            cancel
          </Box>
          <img src={image} alt="product" width="200" height="200" />
        </Box>
      )} */}
    </Box>
  );
}
