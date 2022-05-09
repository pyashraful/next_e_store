import { Button } from "@mui/material";
import { styled } from "@mui/system";

const MyButton = styled(Button)({
  color: "rgb(210, 63, 87)",
  background: " rgb(252, 233, 236)",
  fontWeight: 600,
  fontSize: "0.875rem",
  padding: "6px 2rem",
});

export default function HeaderButton({ children, link, ...props }) {
  return (
    <MyButton href={link} {...props}>
      {children}
    </MyButton>
  );
}
