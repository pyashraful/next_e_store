import ButtonBase from "@mui/material/ButtonBase";
import styled from "@emotion/styled";

const iconsize = {
  smallCricle: {
    borderRadius: "50%",
    width: 25,
    height: 25,
  },

  outlineCircle: {
    width: 32,
    height: 32,
    color: "rgb(210, 63, 87)",
    border: "1px solid rgba(210, 63, 87, 0.5)",
    "&:hover": {
      border: "1px solid rgb(210, 63, 87)",
      backgroundColor: "rgba(210, 63, 87, 0.04)",
    },
  },
  outlineSquare: {
    width: 32,
    height: 32,
    borderRadius: "4px",
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
    border: "1px solid rgba(210, 63, 87, 0.5)",
  },
  (props) => iconsize[props.iconsize]
);

export default function CricleButton({ children, ...props }) {
  return <CartIconButton {...props}>{children}</CartIconButton>;
}
