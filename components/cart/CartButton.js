import { useContext } from "react";
import { Stack, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CricleButton from "../CricleButton";
import { Store } from "../../utils/store";

export default function CartButton({ item, flow, iconsize, disabled }) {
  const [state, dispatch] = useContext(Store);
  const newitem = state.cart.cartItems.find((i) => i._id === item._id);
  if (!item) return <h6>Lodding</h6>;
  function incriseQuantity(quantity = 0) {
    let newQuntity = quantity + 1;
    if (newitem) {
      console.log("hi");
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...newitem, quantity: newQuntity },
      });
    }

    dispatch({
      type: "ADD_TO_CART",
      payload: { ...item, quantity: newQuntity },
    });
  }

  function decreaseQuantity(quantity) {
    let newQuntity = quantity - 1;

    if (newQuntity === 0) {
      console.log("hi");
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: newitem._id,
      });
      return;
    }

    if (newitem) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...item, quantity: newQuntity },
      });
    }
  }

  return (
    <Stack direction={flow ? flow : `column`} alignItems="center">
      <CricleButton
        iconsize={iconsize}
        onClick={() =>
          incriseQuantity(newitem ? newitem.quantity : item.quantity)
        }
      >
        <AddIcon />
      </CricleButton>
      <Box
        sx={{
          mx: 1,
          fontWeight: 500,
          visibility: "hidden",
          ...(newitem?.quantity >= 1 && { visibility: "visible" }),
        }}
      >
        {newitem ? newitem.quantity : item.quantity || 0}
      </Box>
      <CricleButton
        iconsize={item.quantity > 1 ? iconsize : null}
        onClick={() =>
          decreaseQuantity(newitem ? newitem.quantity : item.quantity)
        }
        disabled={disabled}
        sx={{
          visibility: "hidden",
          ...(newitem?.quantity >= 1 && { visibility: "visible" }),
        }}
      >
        <RemoveIcon />
      </CricleButton>
    </Stack>
  );
}
