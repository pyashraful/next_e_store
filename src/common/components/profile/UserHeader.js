import React from "react";
import ProfileMainHader from "./ProfileMainHeader";
import PersonIcon from "@mui/icons-material/Person";
import LogoutButton from "@components/user/LogoutButton";
import OutlinedButton from "@components/OutlinedButton";

export default function UserHeader() {
  return (
    <ProfileMainHader
      role="user"
      icon={<PersonIcon fontSize="medium" color="primary" />}
      title="Profile"
      logout={<LogoutButton />}
      edit={<OutlinedButton href="/">Edit Profile</OutlinedButton>}
    />
  );
}
