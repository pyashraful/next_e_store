import { Container, Grid } from "@mui/material";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import Layout from "../../components/Layout";

export default function Profile() {
  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg="3">
            <ProfileSidebar />
          </Grid>
          <Grid item xs={12} lg="9"></Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
