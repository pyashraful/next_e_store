import { Box, Button, Stack } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";

export default function _404() {
  const router = useRouter();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ height: 300, width: 320 }}>
        <Image src={"/404.svg"} height={300} width={320} alt="404 error" />
      </Box>
      <Stack direction={"row"} spacing={2}>
        <Button variant="outlined" onClick={() => router.back()}>
          back
        </Button>
        <Button variant="contained" onClick={() => router.push("/")}>
          home
        </Button>
      </Stack>
    </Box>
  );
}

_404.authPage = true;
