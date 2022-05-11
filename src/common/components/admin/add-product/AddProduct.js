import OutlinedButton from "@components/OutlinedButton";
import {
  Paper,
  Grid,
  TextField,
  MenuItem,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const StyledInput = styled(TextField)({
  // "& MuiFormLabel-root": {
  //   fontSize: "14px",
  // },
  "& label": { fontSize: "14px" },
});

export default function AddProduct() {
  return (
    <Paper sx={{ p: "30px" }}>
      <form action="">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <StyledInput label="Name" fullWidth size="small" name="name" />
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              select
              label="Category"
              fullWidth
              size="small"
              name="name"
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </StyledInput>
          </Grid>
          <Grid item xs={12} lg={12}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px dashed #DAE1E7",
                borderRadius: "10px",
                minHeight: "200px",
              }}
              role="button"
            >
              <input
                type="file"
                accept=".jpeg,.jpg,.png,.gif"
                multiple=""
                style={{ display: "none" }}
                autoComplete="off"
                tabIndex="-1"
              />
              <Box
                sx={{
                  mt: 0,
                  mb: 2,
                  fontSize: 16,
                  fontWeight: 600,
                  color: "text.disabled",
                }}
                component={"h5"}
              >
                Drag & drop product image here
              </Box>
              <Divider
                sx={{
                  borderColor: "#F3F5F9",
                  borderBottomWidth: "thin",
                  width: "200px",
                  mx: "auto",
                }}
              />
              <Box
                sx={{
                  m: 0,
                  color: "rgb(125, 135, 156)",
                  backgroundColor: "#fff",
                  px: "1rem",
                  mt: "-10px",
                  mb: "16px",
                }}
                component={"p"}
              >
                on
              </Box>
              <OutlinedButton>select file</OutlinedButton>
              <Box
                sx={{ fontSize: 12, color: "text.disabled" }}
                component={"small"}
              >
                Upload 280*280 image
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={12}>
            <StyledInput
              label="Price"
              fullWidth
              name="name"
              multiline
              rows={4}
              size="small"
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Stock"
              type="text"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Tag"
              type="text"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Regular Price"
              type="number"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledInput
              label="Seles Price"
              type="number"
              size="small"
              fullWidth
            ></StyledInput>
          </Grid>
        </Grid>
        <Button sx={{ mt: 4 }} variant="contained">
          Save Product
        </Button>
      </form>
    </Paper>
  );
}
