import React from "react";
import { Modal, Box, Stack, Paper } from "@mui/material";

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
        }}
      ></Paper>
    </Modal>
  );
}
