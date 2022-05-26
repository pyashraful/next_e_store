import { useState, useRef, useCallback } from "react";
import OutlinedButton from "@components/OutlinedButton";
import {
  Box,
  Divider,
  Avatar,
  IconButton,
  Backdrop,
  Button,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDropzone } from "react-dropzone";

export default function FileInput({ image, setImage }) {
  // const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);
  const [readable, setRadable] = useState();

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const reader = new FileReader();
      reader.onloadstart = () => {
        setLoading(true);
      };
      reader.onloadend = () => {
        setLoading(false);
      };
      reader.onload = () => {
        setRadable(reader.result);
      };
      reader.readAsDataURL(file);
      setImage(file);
    },
    [setImage]
  );
  // console.log(image);
  const { getRootProps, getInputProps } = useDropzone({
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
    >
      {image ? (
        <Box
          sx={{
            height: 150,
            width: 150,
            position: "relative",
            border: "1px dashed",
            borderRadius: "10px",
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src={readable}
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
          />
          {/* <div
            style={{
              position: "absolute",
              WebkitFilter: "blur(10px) saturate(2)",
            }}
          /> */}
          {/* <Box
            sx={{
              opacity: 0.2,
              visibility: "hidden",
              position: "absolute",
              width: "100%",
              borderRadius: "10px",
              "&:hover": { visibility: "visible" },
            }}
          /> */}
          <IconButton
            aria-label="delete"
            fontSize="small"
            sx={{
              backgroundColor: "rgba(254, 251, 252, 0.8)",
              position: "absolute",
              color: "primary.main",
              top: -15,
              right: -15,
              border: "1px dashed",
              borderColor: "primary.main",
              "&:hover": { backgroundColor: "rgba(255, 167, 192, 0.8)" },
            }}
            onClick={() => setImage(null)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
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
          <Box
            sx={{ fontSize: 12, color: "text.disabled" }}
            component={"small"}
          >
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
      )}
    </Box>
  );
}
