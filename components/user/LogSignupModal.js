import React from "react";
import { Modal, Box, Paper, Button, Divider } from "@mui/material";
import InputFrom from "../InputFrom";
import { useForm } from "react-hook-form";
import { flexbox } from "@mui/system";

export default function LogSignupModal() {
  const { control, handleSubmit } = useForm({});
  function onSubmit(data) {
    console.log(data);
  }

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box component="h3" textAlign="center" fontSize={20} sx={{ mb: 1 }}>
            Welcome To Ecommerce
          </Box>
          <Box component="p" textAlign="center" fontSize={12} sx={{ mb: 4.5 }}>
            Log in with email & password
          </Box>

          <Box>
            <Box component="small" textAlign="left">
              Email or Phone Number
            </Box>
            <InputFrom
              name="email"
              control={control}
              type="text"
              placeholder="example@gmail.com"
            />
          </Box>
          <Box>
            <Box component="small" textAlign="left">
              Password
            </Box>
            <InputFrom
              name="password"
              control={control}
              type="password"
              placeholder="********"
            />
          </Box>

          <Box sx={{ marginBottom: "35px" }}>
            <Button fullWidth variant="contained">
              Loging
            </Button>
          </Box>

          <Box>
            <Box sx={{ width: "200px", mx: "auto" }}>
              <Divider />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "-13px",
              }}
            >
              <Box
                sx={{
                  color: "rgb(125, 135, 156)",
                  backgroundColor: "rgb(255, 255, 255)",
                  px: "1rem",
                }}
              >
                on
              </Box>
            </Box>
          </Box>
        </form>
      </Paper>
    </Modal>
  );
}
