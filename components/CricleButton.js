import ButtonBase from "@mui/material/ButtonBase";
// import { styled } from "@mui/material/styles";
import styled from "@emotion/styled";

const iconSize = {
  smallCricle: {
    borderRadius: "50%",
    width: 25,
    height: 25,
  },

  squrare: {
    width: 32,
    height: 32,
    color: "rgb(210, 63, 87)",
    border: "1px solid rgba(210, 63, 87, 0.5)",
    "&:hover": {
      border: "1px solid rgb(210, 63, 87)",
      backgroundColor: "rgba(210, 63, 87, 0.04)",
    },
  },
};

const CartIconButton = styled(ButtonBase)(
  {
    width: 32,
    height: 32,
    borderRadius: 50,
    outlineWidth: "5px",
  },
  (props) => iconSize[props.iconSize]
);

export default function CricleButton({ children, ...props }) {
  console.log(props);
  return <CartIconButton {...props}>{children}</CartIconButton>;
}
