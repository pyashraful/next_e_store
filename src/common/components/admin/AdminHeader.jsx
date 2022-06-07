import React from "react";
import ProfileMainHader from "../profile/ProfileMainHeader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LogoutButton from "@components/user/LogoutButton";

export default function UserHeader() {
  return (
    <ProfileMainHader
      role="vendor"
      icon={<DashboardIcon color="primary" />}
      title="DashBoard"
      logout={<LogoutButton />}
    />
  );
}
