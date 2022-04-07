import IconButton from "@mui/material/IconButton";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
export default function UserProfile() {
  return (
    <IconButton
      aria-label="user"
      sx={{ backgroundColor: "action.hover" }}
      size="large"
    >
      <PersonOutlinedIcon />
    </IconButton>
  );
}
