import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)({
  color: "rgb(210, 63, 87)",
  background: " rgb(252, 233, 236)",
  fontWeight: 600,
  fontSize: "0.875rem",
  padding: "6px 2rem",
});

export default function OutlinedButton({ children, href, ...props }) {
  return (
    <StyledButton href={href} {...props}>
      {children}
    </StyledButton>
  );
}
