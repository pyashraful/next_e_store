import { Container, Grid } from "@mui/material";
import ProfileSidebar from "./ProfileSidebar";
import Layout from "../Layout";

export default function UserLayout({ children }) {
  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            <ProfileSidebar />
          </Grid>
          <Grid item xs={12} lg="9">
            {children}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
