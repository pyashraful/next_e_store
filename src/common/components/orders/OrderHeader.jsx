import React from "react";
import ProfileMainHeader from "../profile/ProfileMainHeader";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function UserHeader() {
  return (
    <ProfileMainHeader
      icon={<ShoppingBagIcon fontSize="medium" color="primary" />}
      title="Orders"
    />
  );
}
