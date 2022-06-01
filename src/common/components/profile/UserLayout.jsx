import { Container, Grid } from "@mui/material";
import ProfileSidebar from "@components/profile/ProfileSidebar";

export default function UserLayout({ children }) {
  return (
    <Container sx={{ margin: "2rem auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <ProfileSidebar />
        </Grid>
        <Grid item xs={12} lg={9}>
          {children}
        </Grid>
      </Grid>
    </Container>
  );
}
