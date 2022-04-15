import React from "react";
import { Modal, Box, Paper } from "@mui/material";

export default function LogSignupModal() {
  return (
    <Modal
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
      }}
      open={true}
    >
      <Paper
        sx={{
          position: "absolute",
          p: "3rem 3.5rem 0",
          width: "500px",
        }}
      >
        <Box component="h3" textAlign="center" fontSize={20} sx={{ mb: 1 }}>
          Welcome To Ecommerce
        </Box>
        <Box component="p" textAlign="center" fontSize={12} sx={{ mb: 4.5 }}>
          Log in with email & password
        </Box>
      </Paper>
    </Modal>
  );
}
