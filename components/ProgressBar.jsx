import { Grid, Box, Chip, Link, Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useRouter } from "next/router";

const ChipBar = styled(Box)({
  width: "50px",
  height: "4px",
  backgroundColor: "#FCE9EC",
});

const CustomChip = styled(Chip)({
  fontSize: "14px",
  fontWeight: "600",
  color: "#D23F57",
  backgroundColor: "#FCE9EC",
  padding: "8px 16px",
  boxShadow: "none",
  "&:hover": {
    color: "#fff",
    backgroundColor: "rgb(210, 63, 87)",
  },
  "& .MuiChip-label'": {
    marginLeft: "12px",
    marginRight: "12px",
  },
});

const CenterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export default function ProgressBar() {
  const router = useRouter();

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <CenterBox>
            <CustomChip
              label={"1.Cart"}
              clickable
              component={Button}
              onClick={() => router.push("/cart")}
            />
            <ChipBar></ChipBar>

            <CustomChip
              label={"2.Details"}
              clickable
              component={Button}
              onClick={() => router.push("/checkout")}
            />
            <ChipBar></ChipBar>

            <CustomChip
              label={"3.Payment"}
              clickable
              component={"button"}
              onClick={() => router.push("/Payment")}
            />
            <ChipBar></ChipBar>

            <CustomChip label={"4.Review"} clickable component={"button"} />
          </CenterBox>
        </Grid>
      </Grid>
    </Box>
  );
}
