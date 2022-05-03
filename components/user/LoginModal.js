import Link from "next/link";
import { Modal, Box, Paper, Button, Divider } from "@mui/material";
import Cookies from "js-cookie";
import { styled } from "@mui/system";
import InputFrom from "../InputFrom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext } from "react";
import { Store } from "../../utils/store";

const StyledButton = styled(Button)({
  width: "100%",
  "&:hover": "noStyle",
});

const InputCotainer = styled(Box)({
  marginBottom: "12px",
});

const formSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(4, "Password length should be at least 4 characters"),
});
const validationOpt = { resolver: yupResolver(formSchema) };

export default function LoginModal({ showModal, setShowModal }) {
  const [state, dispatch] = useContext(Store);
  console.log("🚀 ~ file: LoginModal.js ~ line 31 ~ LoginModal ~ state", state);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },

    validationOpt,
  });

  async function onSubmit(data) {
    try {
      const res = await axios.post("/api/login", data);
      Cookies.set("userInfo", JSON.stringify(res.data));
      dispatch({ type: "USER_LOGIN", payload: res.data });
      setShowModal(!showModal);
      router.push("/");
    } catch (err) {
      console.log(err);
    }
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
            <Button type="submit" fullWidth variant="contained">
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
