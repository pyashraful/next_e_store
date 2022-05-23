import { Paper, Grid, TextField, MenuItem, Button } from "@mui/material";
import React, { useState, useEffect, useCallback } from "react";
import FileInput from "./FileInput";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function AddProduct() {
  const [image, setImage] = React.useState();
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: "",
    },
  });

  const onSubmit = async (data) => {
    var formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key]);
    }
    formData.append("file", image);
    for (var pair of formData.entries()) {
      console.log(pair[0] + ", " + pair[1]);
    }
    // axios
    //   .post("/api/admin/add-product", formData)
    //   .then((res) => {
    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    reset();
    setImage(null);
  };

  return (
    <Paper sx={{ p: "30px" }}>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <TextField label="name" name="title" {...register("name")} />
          </Grid>
          <Grid item xs={12} lg={6}>
            <TextField
              select
              label="Category"
              name=""
              value="Electronics"
              {...register("category")}
            >
              <MenuItem value="Electronics">Electronics</MenuItem>
              <MenuItem value="Electronics">Electronics</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs={12} lg={12}>
            <FileInput image={image} setImage={setImage} />
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
