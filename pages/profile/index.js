import { Container, Grid } from "@mui/material";
import ProfileSidebar from "../../components/profile/ProfileSidebar";

export default function Profile() {
  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} lg="3">
          <ProfileSidebar />
        </Grid>
        <Grid item xs={12} lg="9"></Grid>
      </Grid>
    </>
  );
}
