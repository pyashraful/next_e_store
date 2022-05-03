import { useContext } from "react";
import { Store } from "../../utils/store";
import { Box, Paper, Button, Divider } from "@mui/material";
import { styled } from "@mui/system";
import InputFrom from "../../components/InputFrom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import cookies from "js-cookie";

const StyledButton = styled(Button)({
  width: "100%",
  "&:hover": "noStyle",
});

const InputCotainer = styled(Box)({
  marginBottom: "12px",
});

const signupFromValidation = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export default function Signup({ showModal, setShowModal }) {
  const router = useRouter();
  const [dispatch] = useContext(Store);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: yupResolver(signupFromValidation),
  });

  console.log(errors);

  function onSubmit(data) {
    try {
      const res = axios.post("/api/signup", data);
      console.log(res);
      dispatch({ type: "USER_LOGIN", payload: res.data });
      cookies.set("userInfo", JSON.stringify(res.data));
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  }
  console.log(errors);

  return (
    <Box
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
          width: { md: "100%", lg: "500px" },
        }}
      >
        <form
          style={{ padding: "3rem 3.5rem 0" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Box component="h3" textAlign="center" fontSize={20} sx={{ mb: 1 }}>
            Create Your Account{" "}
          </Box>
          <Box component="p" textAlign="center" fontSize={12} sx={{ mb: 4.5 }}>
            Please fill all fields to continue
          </Box>

          <InputCotainer>
            <Box
              component="small"
              textAlign="left"
              sx={{ mb: "8px", display: "Block" }}
            >
              Full Name
            </Box>
            <InputFrom
              name="name"
              control={control}
              type="text"
              placeholder="Jon Doe"
            />
          </InputCotainer>
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
          <InputCotainer>
            <Box
              component="small"
              textAlign="left"
              sx={{ mb: "8px", display: "Block" }}
            >
              Retype Password
            </Box>
            <InputFrom
              name="confirmPassword"
              control={control}
              type="password"
              placeholder="********"
            />
          </InputCotainer>

          <Box sx={{ marginBottom: "35px" }}>
            <Button type="submit" fullWidth variant="contained">
              singnup
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
            Don&apos;t have account?
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
    </Box>
  );
}
