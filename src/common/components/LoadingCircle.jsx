import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";

export default function LoadingCircle() {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}
