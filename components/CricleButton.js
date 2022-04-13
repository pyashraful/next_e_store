import ButtonBase from "@mui/material/ButtonBase";
// import { styled } from "@mui/material/styles";
import styled from "@emotion/styled";

const iconSize = {
  squ: {
    borderRadius: "25%",
    width: 25,
    height: 25,
  },
};

const CartIconButton = styled(ButtonBase)(
  {
    width: 32,
    height: 32,
    outlineWidth: "5px",
  },
  (props) => iconSize[props.iconSize]
);

export default function CricleButton({ children, ...props }) {
  console.log(props);
  return <CartIconButton {...props}>{children}</CartIconButton>;
}
