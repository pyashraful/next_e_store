import React from "react";
import Layout from "../../components/Layout";
import ProfileSidebar from "../../components/profile/ProfileSidebar";

export default function index() {
  return (
    <Layout>
      <ProfileSidebar />
      <div>Order</div>
    </Layout>
  );
}
