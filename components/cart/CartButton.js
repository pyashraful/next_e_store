import { useContext } from "react";
import { Stack, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CricleButton from "../CricleButton";
import { Store } from "../../utils/store";

export default function CartButton({ item, flow, iconsize }) {
  const [state, dispatch] = useContext(Store);
  if (!item) return <h6>Lodding</h6>;
  const newitem = state.cart.cartItems.find((i) => i._id === item._id);

  function incriseQuantity(item, quantity = 0) {
    let newQuntity = quantity + 1;
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: newQuntity },
    });
  }

  function decreaseQuantity(item, quantity = 1) {
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
  console.log(newitem?.quantity);

  return (
    <Stack direction={flow ? flow : `column`} alignItems="center">
      <CricleButton
        iconsize={iconsize}
        onClick={() => incriseQuantity(item, item.quantity)}
      >
        <AddIcon />
      </CricleButton>
      <Box sx={{ mx: 1 }}>{item.quantity ? item.quantity : 0}</Box>
      <CricleButton
        iconsize={item.quantity > 1 ? iconsize : null}
        onClick={() => decreaseQuantity(item, item.quantity)}
        disabled={item.quantity === 1}
      >
        <RemoveIcon />
      </CricleButton>
    </Stack>
  );
}
