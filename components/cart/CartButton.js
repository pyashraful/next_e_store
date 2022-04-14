import { useContext } from "react";
import { Stack, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CricleButton from "../CricleButton";
import { Store } from "../../utils/store";

export default function CartButton({ item, flow, iconsize }) {
  console.log(iconsize);
  const [state, dispatch] = useContext(Store);
  if (!item) return <h6>Lodding</h6>;

  function incriseQuantity(item, quantity) {
    let newQuntity = quantity + 1;

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: newQuntity },
    });
  }

  function decreaseQuantity(item, quantity) {
    let newQuntity = quantity - 1;

    if (newQuntity === 0) {
      dispatch({ type: "REMOVE_FROM_CART", payload: item._id });
      return;
    }
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: newQuntity },
    });
  }

  return (
    <Stack direction={flow ? flow : `column`} alignItems="center">
      <CricleButton
        iconsize={iconsize}
        onClick={() => incriseQuantity(item, item.quantity)}
      >
        <AddIcon />
      </CricleButton>
      <Box sx={{ mx: 1 }}>{item.quantity}</Box>
      <CricleButton
        iconsize={item.quantity > 1 ? iconsize : null}
        onClick={() => decreaseQuantity(item, item.quantity)}
      >
        <RemoveIcon />
      </CricleButton>
    </Stack>
  );
}
