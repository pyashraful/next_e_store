import Link from "next/link";
import {
  Box,
  Paper,
  Button,
  Divider,
  Dialog,
  DialogContent,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/system";
import InputFrom from "../InputFrom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { authRequest } from "@utils/mutations";
import { useUser } from "src/common/hook/useUser";
import { useContext, useState } from "react";
import { Store } from "@utils/store";
import Cookies from "js-cookie";
const StyledButton = styled(Button)({
  width: "100%",
  "&:hover": "noStyle",
});

const InputCotainer = styled(Box)({
  marginBottom: "12px",
});

const formSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters"),
});

export default function LoginModal() {
  const { state, dispatch } = useContext(Store);
  const [error, setError] = useState(null);
  const { modalOpen } = state;
  const [loading, setLoading] = useState(false);
  // const { mutate } = useUser();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "test@test.com",
      password: "password",
    },
    resolver: yupResolver(formSchema),
  });

  async function onSubmit(data) {
    console.log("🚀 ~ file: LoginModal.js ~ line 53 ~ onSubmit ~ data", data);
    try {
      setLoading(true);
      const user = await authRequest("login", data);
      console.log("🚀 ~ file: LoginModal.js ~ line 56 ~ onSubmit ~ user", user);
      dispatch({ type: "USER_LOGIN", payload: user });
      setLoading(false);
      // mutate(user);
      dispatch({ type: "TOGGLE_SIGNIN_DIALOG" });
    } catch (err) {
      console.log("🚀 ~ file: LoginModal.js ~ line 62 ~ onSubmit ~ err", err);
      setLoading(false);
      setError(err.info.error);
    }
  }

  return (
    <Dialog
      sx={{
        zIndex: "1900",
      }}
      scroll={"body"}
      open={modalOpen}
      onClose={() => dispatch({ type: "TOGGLE_SIGNIN_DIALOG" })}
    >
      <DialogContent sx={{ p: "0" }}>
        <Paper
          sx={{
            width: { md: "100%", lg: "500px" },
            px: "3rem",
            py: "2rem",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <Box component="h3" textAlign="center" fontSize={20} sx={{ mb: 1 }}>
              Welcome To Ecommerce
            </Box>
            <Box
              component="p"
              textAlign="center"
              fontSize={12}
              sx={{ mb: 2.5 }}
            >
              Log in with email & password
            </Box>

            <Box
              sx={{
                mb: 2,
                textAlign: "center",
                color: "primary.main",
                visibility: error ? "visiable" : "hidden",
              }}
            >
              {error}
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
              <LoadingButton
                loading={loading}
                type="submit"
                fullWidth
                variant="contained"
              >
                Loging
              </LoadingButton>
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
              Don&apos;t have account?
              <Box component="span">
                <Link href="/signup">Sign Up</Link>
              </Box>
            </Box>
          </form>
          <Box
            sx={{
              bgcolor: "rgb(243, 245, 249);",
              py: "1.25rem",
              display: "flex",
              flexDirection: {
                sm: "row",
                xs: "column",
              },
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            Forgot your password?
            <span>Reset it</span>
          </Box>
        </Paper>
      </DialogContent>
    </Dialog>
  );
}
