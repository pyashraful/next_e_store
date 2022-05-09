import { Container, Grid } from "@mui/material";
import Layout from "./Layout";

export default function UserLayout({ sideber, main }) {
  return (
    <Layout>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={3}>
            {sideber}
            {/* <ProfileSidebar /> */}
          </Grid>
          <Grid item xs={12} lg={9}>
            {main}
            {/* {children} */}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
}
