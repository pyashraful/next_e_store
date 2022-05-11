import { useContext } from "react";
import { Grid, Paper, Box, Avatar, Typography } from "@mui/material";
import ProfileUserInfo from "./ProfileUserInfo";
import { Store } from "@utils/store";
import UserHeader from "./UserHeader";

export default function ProfileMain() {
  const { state } = useContext(Store);
  console.log(
    "🚀 ~ file: ProfileMain.js ~ line 9 ~ ProfileMain ~ state",
    state.userInfo
  );

  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <UserHeader />
      </Box>
      <Box sx={{ mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xm={12} sm={12} md={6} lg={6} sx={{ flexBasis: "100% " }}>
            <Paper
              sx={{
                p: "14px 32px",
                display: "flex",
                alignItems: "center",
                height: "100%",
              }}
            >
              <Avatar src="/avater.jpg" sx={{ width: 64, height: 64 }} />
              <Box sx={{ ml: "16px", flex: "1 1 0" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography
                      variant="h5"
                      sx={{ fontSize: 16, fontWeight: 600 }}
                    >
                      Ashraful Islam
                    </Typography>
                    <Box sx={{ display: "flex" }}>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: 14, color: "#666" }}
                      >
                        Balance:
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: 14, color: "#666" }}
                      >
                        $500
                      </Typography>
                    </Box>
                  </Box>
                  <Typography
                    sx={{ fontSize: 14, color: "#666" }}
                    variant="body1"
                  >
                    SILVER USER
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xm={12} sm={12} md={6} lg={6}>
            <Grid container spacing={4}>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper
                  sx={{
                    p: "1rem 1.25rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ m: 0, color: "primary.main", lineHeight: 1.5 }}
                    component={"h3"}
                  >
                    13
                  </Box>
                  <Box
                    sx={{ fontSize: 12, textAlign: "center" }}
                    component={"small"}
                  >
                    All order
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper
                  sx={{
                    p: "1rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ m: 0, color: "primary.main", lineHeight: 1.5 }}
                    component={"h3"}
                  >
                    03
                  </Box>
                  <Box
                    sx={{ fontSize: 12, textAlign: "center" }}
                    component={"small"}
                  >
                    Awaiting Payments
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper
                  sx={{
                    p: "1rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ m: 0, color: "primary.main", lineHeight: 1.5 }}
                    component={"h3"}
                  >
                    13
                  </Box>
                  <Box
                    sx={{ fontSize: 12, textAlign: "center" }}
                    component={"small"}
                  >
                    Awaiting Shipment
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6} sm={6} lg={3}>
                <Paper
                  sx={{
                    p: "1rem 2.5rem",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{ m: 0, color: "primary.main", lineHeight: 1.5 }}
                    component={"h3"}
                  >
                    13
                  </Box>
                  <Box
                    sx={{ fontSize: 12, textAlign: "center" }}
                    component={"small"}
                  >
                    Awaiting Delivery
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <ProfileUserInfo />
    </div>
  );
}
