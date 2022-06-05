import { Grid } from "@mui/material";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayout({ children }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} lg={3} sx={{ display: { xs: "none", lg: "block" } }}>
        <AdminSidebar />
      </Grid>
      <Grid item xs={12} lg={9}>
        {children}
      </Grid>
    </Grid>
  );
}
