import { Grid, Paper, Box, Avatar, Typography } from "@mui/material";
import { display } from "@mui/system";
import ProfileMainHader from "./ProfileMainHader";

export default function ProfileMain() {
  return (
    <div>
      <Box sx={{ mb: 2 }}>
        <ProfileMainHader />
      </Box>
      <Grid container>
        <Grid item lg={6}>
          <Paper sx={{ p: "14px 32px", display: "flex", alignItems: "center" }}>
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
        <Grid item lg={12}></Grid>
      </Grid>
    </div>
  );
}
