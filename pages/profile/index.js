import { Container, Grid } from "@mui/material";
import ProfileSidebar from "../../components/profile/ProfileSidebar";
import Layout from "../../components/Layout";
import ProfileMain from "../../components/profile/ProfileMain";

export default function Profile() {
  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <ProfileSidebar />
          </Grid>
          <Grid item xs={12} lg="9">
            <ProfileMain />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
