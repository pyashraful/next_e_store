import React, { useState, useEffect } from "react";
import { Grid, Box, Chip, Button } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";

const ChipBar = styled(Box)(({ ownerState }) => ({
  width: "50px",
  height: "4px",
  backgroundColor: "#FCE9EC",
  // ...(ownerState.active && {
  //   color: "#fff",
  //   backgroundColor: "rgb(210, 63, 87)",
  // }),
  // ...(ownerState.completed && {
  //   color: "#fff",
  //   backgroundColor: "rgb(210, 63, 87)",
  // }),
}));

const CustomChip = styled(Chip)(({ ownerState }) => ({
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
  ...(ownerState.active && {
    color: "#fff",
    backgroundColor: "rgb(210, 63, 87)",
  }),
  ...(ownerState.completed && {
    color: "#fff",
    backgroundColor: "rgb(210, 63, 87)",
  }),
}));

const CenterBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const activeArray = {
  cart: { route: "/cart", label: "Cart", active: true, completed: false },
  checkout: {
    route: "/checkout",
    label: "Checkout",
    active: false,
    completed: false,
  },
  payment: {
    route: "/payment",
    label: "Payment",
    active: false,
    completed: false,
  },
};

export default function ProgressBar({ ok, em }) {
  const router = useRouter();
  // const [active, setActive] = useState(false);
  // const [completed, setCompleted] = useState(false);

  console.log(router.pathname);

  // console.log(
  //   "🚀 ~ file: ProgressBar.jsx ~ line 61 ~ handleClick ~ completed",
  //   completed
  // );
  function handleClick(path) {
    console.log(activeArray[path]);
    router.push(activeArray[path].route);
    Object.keys(activeArray).map((key, index) => {
      key === path
        ? (activeArray[key].active = true) &&
          (activeArray[Object.keys(activeArray)[index]].completed = true)
        : (activeArray[key].active = false);
    });
    console.log(activeArray[path]);

    // setCompleted(!completed);
    // console.log(
    //   "🚀 ~ file: ProgressBar.jsx ~ line 61 ~ handleClick ~ completed",
    //   completed
    // );
  }
  // console.log(
  //   "🚀 ~ file: ProgressBar.jsx ~ line 61 ~ handleClick ~ completed",
  //   completed
  // );

  // function handleClickActive(path) {
  //   if (router.pathname === path) {
  //     console.log(active);
  //     setActive(!active);
  //   }
  // }

  // useEffect(() => {
  //   setCompleted(!completed);
  // }, [completed]);

  return (
    <Box sx={{ mb: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={8}>
          <CenterBox>
            <CustomChip
              label={"1.Cart"}
              clickable
              onClick={() => handleClick("cart")}
              ownerState={{
                active: activeArray.cart.active,
                completed: activeArray.cart.completed,
              }}
            />
            <ChipBar></ChipBar>

            <CustomChip
              label={"2.Details"}
              clickable
              onClick={() => handleClick("checkout")}
              ownerState={{
                active: activeArray.checkout.active,
                completed: activeArray.checkout.completed,
              }}
            />
            <ChipBar></ChipBar>

            <CustomChip
              label={"3.Payment"}
              clickable
              ownerState={{ active: false }}
            />
            <ChipBar></ChipBar>

            <CustomChip
              label={"4.Review"}
              clickable
              ownerState={{ active: false }}
            />
          </CenterBox>
        </Grid>
      </Grid>
    </Box>
  );
}
