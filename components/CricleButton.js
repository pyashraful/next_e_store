import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
const CartIconButton = styled(IconButton)({
  width: 32,
  height: 32,
  border: 1,
  borderRadius: "50%",
});

export default function CricleButton({ children }) {
  return <CartIconButton>{children}</CartIconButton>;
}
