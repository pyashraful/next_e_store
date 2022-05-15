import { Paper, Grid, TextField, MenuItem, Button } from "@mui/material";
import React from "react";
import FileInput from "./FileInput";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddProduct() {
  const [image, setImage] = React.useState();
  const { register, handleSubmit } = useForm();
  // console.log("🚀 ~ file: AddProduct.js ~ line 9 ~ AddProduct ~ image", image);

  const onSubmit = async (data) => {
    console.log("🚀 ~ file: AddProduct.js ~ line 13 ~ onSubmit ~ data", data);
    var formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("file", image);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    // console.log("🚀 ~ file: AddProduct.js ~ line 14 ~ onSubmit ~ body", body);
    // body.append("name", data.name);
    // console.log("🚀 ~ file: AddProduct.js ~ line 15 ~ onSubmit ~ body", body);
    // data = { ...data, body };
    // console.log("🚀 ~ file: AddProduct.js ~ line 17 ~ onSubmit ~ data", data);

    // console.log("🚀 ~ file: AddProduct.js ~ line 15 ~ onSubmit ~ body", body);
    // body.append("file", image);
    // console.log("🚀 ~ file: AddProduct.js ~ line 15 ~ onSubmit ~ body", body);
    // console.log("🚀 ~ file: AddProduct.js ~ line 10 ~ onSubmit ~ data", body);
    axios
      .post("/api/admin/add-product", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper sx={{ p: "30px" }}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TextField label="Name" name="name" {...register("name")} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              select
              label="Category"
              name=""
              value="Electronics"
              {...register("Category")}
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FileInput setImage={setImage} />
          </Grid>
          <Grid item xs={12} lg={12}>
            <TextField
              label="Description"
              multiline
              rows={4}
              {...register("description")}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Stock"
              type="number"
              {...register("quantity", {
                valueAsNumber: true,
              })}
            ></TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField label="Tag" type="text" {...register("tag")}></TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Regular Price"
              type="number"
              {...register("regularPrice", { valueAsNumber: true })}
            ></TextField>
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              label="Seles Price"
              type="number"
              {...register("selcePrice", { valueAsNumber: true })}
            ></TextField>
          </Grid>
        </Grid>
        <Button sx={{ mt: 4 }} variant="contained" type="submit">
          Save Product
        </Button>
      </form>
    </Paper>
  );
}
