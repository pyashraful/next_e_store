import React from "react";
import AdminLayout from "@components/admin/AdminLayout";
import AddProduct from "@components/admin/add-product/AddProduct";

export default function index() {
  return (
    <AdminLayout>
      <AddProduct />
    </AdminLayout>
  );
}
