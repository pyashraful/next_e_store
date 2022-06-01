import { Button, Grid, Typography, Container, Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { NextLinkComposed } from "./Link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/pagination";

export default function IndexPageSlider() {
  return (
    <Box sx={{ backgroundColor: "#fff" }}>
      <Container maxWidth="lg">
        <Swiper
          spaceBetween={50}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          modules={[Pagination, Autoplay]}
          draggable={true}
        >
          <SwiperSlide>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "calc(100% + 24px)",
                marginLeft: "-24px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    marginBottom: "1.35rem",
                  }}
                >
                  50% Off For Your First Shopping
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    color: "#0F3460",
                    marginBottom: "1.35rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam etiam at quis ut convalliss.
                </Typography>
                <Button
                  variant="contained"
                  component={NextLinkComposed}
                  to={"#"}
                >
                  Shop now
                </Button>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Image
                  src={"/slider.png"}
                  height={570}
                  width={610}
                  alt="slider image"
                />
              </Grid>
            </Grid>
          </SwiperSlide>
          <SwiperSlide>
            <Grid
              container
              spacing={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "calc(100% + 24px)",
                marginLeft: "-24px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={5}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "baseline",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "50px",
                    fontWeight: 700,
                    marginBottom: "1.35rem",
                  }}
                >
                  50% Off For Your First Shopping
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "14px",
                    color: "#0F3460",
                    marginBottom: "1.35rem",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                  lobortis consequat eu, quam etiam at quis ut convalliss.
                </Typography>
                <Button
                  variant="contained"
                  component={NextLinkComposed}
                  to={"#"}
                >
                  Shop now
                </Button>
              </Grid>
              <Grid item xs={12} sm={5}>
                <Image
                  src={"/slider.png"}
                  height={570}
                  width={610}
                  alt="slider image"
                />
              </Grid>
            </Grid>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Box>
  );
}
