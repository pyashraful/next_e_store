import React from "react";
import ProfileMainHader from "./ProfileMainHader";
import PersonIcon from "@mui/icons-material/Person";
import LogoutButton from "@components/user/LogoutButton";
import OutlinedButton from "@components/OutlinedButton";

export default function UserHeader() {
  return (
    <ProfileMainHader
      icon={<PersonIcon fontSize="medium" color="primary" />}
      title="Profile"
      logout={<LogoutButton />}
      edit={<OutlinedButton href="/">Edit Profile</OutlinedButton>}
    />
  );
}
