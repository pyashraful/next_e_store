import React from "react";
import { Modal, Box, Paper, Button, Divider } from "@mui/material";
import { styled } from "@mui/system";
import InputFrom from "../InputFrom";
import { useForm } from "react-hook-form";

const StyledButton = styled(Button)({
  width: "100%",
  "&:hover": "noStyle",
});

const InputCotainer = styled(Box)({
  marginBottom: "12px",
});

export default function LogSignupModal({ showModal, setShowModal }) {
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
        zIndex: "1900",
      }}
      open={showModal}
      onClose={() => setShowModal(false)}
    >
      <Paper
        sx={{
          position: "absolute",
          width: { md: "100%", lg: "500px" },
        }}
      >
        <form
          style={{ padding: "3rem 3.5rem 0" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box component="h3" textAlign="center" fontSize={20} sx={{ mb: 1 }}>
            Welcome To Ecommerce
          </Box>
          <Box component="p" textAlign="center" fontSize={12} sx={{ mb: 4.5 }}>
            Log in with email & password
          </Box>

          <InputCotainer>
            <Box
              component="small"
              textAlign="left"
              sx={{ mb: "8px", display: "Block" }}
            >
              Email or Phone Number
            </Box>
            <InputFrom
              name="email"
              control={control}
              type="text"
              placeholder="example@gmail.com"
            />
          </InputCotainer>
          <InputCotainer>
            <Box
              component="small"
              textAlign="left"
              sx={{ mb: "8px", display: "Block" }}
            >
              Password
            </Box>
            <InputFrom
              name="password"
              control={control}
              type="password"
              placeholder="********"
            />
          </InputCotainer>

          <Box sx={{ marginBottom: "35px" }}>
            <Button fullWidth variant="contained">
              Loging
            </Button>
          </Box>

          <Box sx={{ mb: "1rem" }}>
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
          <StyledButton
            sx={{
              marginBottom: "1rem",
              backgroundColor: "rgb(59, 89, 152)",
              color: "#fff",
              ":hover": { bgcolor: "rgb(59, 89, 152)" },
            }}
          >
            <img src="/facebook.svg" />
            <Box sx={{ ml: "5px" }}>Continue with Facebook</Box>
          </StyledButton>
          <StyledButton
            sx={{
              backgroundColor: "rgb(66, 133, 244)",
              color: "#fff",
              ":hover": { bgcolor: "rgb(66, 133, 244)" },
            }}
          >
            <img src="/google.svg" />
            <Box sx={{ ml: "5px" }}>Continue with Google</Box>
          </StyledButton>

          <Box sx={{ my: "1.25rem", textAlign: "center" }}>
            Don't have account?
            <Box component="span">Sign Up</Box>
          </Box>
        </form>

        <Box
          sx={{
            bgcolor: "rgb(243, 245, 249);",
            py: "1.25rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Forgot your password?
          <span>Reset it</span>
        </Box>
      </Paper>
    </Modal>
  );
}
