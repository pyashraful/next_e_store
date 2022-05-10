import React, { useState, useEffect } from "react";
import { Grid, Box, Chip, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const ChipBar = styled(Box)(({ selected, theme }) => ({
  width: "50px",
  height: "4px",
  backgroundColor: "#FCE9EC",

  ...(selected && {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  }),
}));

const CustomChip = styled(Chip)(({ selected, theme }) => ({
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
  ...(selected && {
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  }),
}));

const CenterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
const activeArray = [
  { route: "/cart", label: "Cart", active: true, completed: false },
  {
    route: "/checkout",
    label: "Checkout",
    active: false,
    completed: false,
  },
  {
    route: "/payment",
    label: "Payment",
    active: false,
    completed: false,
  },
];

export default function ProgressBar() {
  const router = useRouter();
  const [selected, setSelected] = useState();

  console.log(router.pathname);
  function handleClick(path) {
    router.push(path);
  }

  console.log(activeArray);
  useEffect(() => {
    activeArray.map((item, index) => {
      router.pathname === item.route && setSelected(index + 1);
    });
  }, [router.pathname, selected]);

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <CenterBox>
            <CustomChip
              selected={selected >= 1}
              label={"1.Cart"}
              clickable
              onClick={() => handleClick("cart", 1)}
            />
            <ChipBar selected={selected >= 2}></ChipBar>

            <CustomChip
              label={"2.Details"}
              selected={selected >= 2}
              clickable
              onClick={() => handleClick("checkout", 2)}
            />
            <ChipBar selected={selected >= 3}></ChipBar>

            <CustomChip
              component={Button}
              selected={selected >= 3}
              label={"3.Payment"}
              clickable
              onClick={() => handleClick("payment", 3)}
            />
            <ChipBar></ChipBar>

            <CustomChip label={"4.Review"} clickable />
          </CenterBox>
        </Grid>
      </Grid>
    </Box>
  );
}
