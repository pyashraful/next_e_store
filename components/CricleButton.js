import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";
const CartIconButton = styled(ButtonBase)({
  width: 32,
  height: 32,
  border: "1px solid #ccc",
  borderRadius: "50%",
  outlineWidth: "5px",
  "&:hover": {
    border: "1px solid #ddd",
  },
});

export default function CricleButton({ children }) {
  return <CartIconButton>{children}</CartIconButton>;
}
