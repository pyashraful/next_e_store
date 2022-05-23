import { createContext, useReducer } from "react";
import Cookies from "js-cookie";

export const Store = createContext();

const initialState = {
  modalOpen: false,
  cartOpen: false,
  cart: {
    cartItems: Cookies.get("cartItems")
      ? JSON.parse(Cookies.get("cartItems"))
      : [],
    shippingAddress: Cookies.get("shippingAddress")
      ? JSON.parse(Cookies.get("shippingAddress"))
      : {},
  },

  userInfo: Cookies.get("userInfo")
    ? JSON.parse(Cookies.get("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_CART": {
      return {
        ...state,
        cartOpen: true,
      };
    }

    case "CLOSE_CART": {
      return {
        ...state,
        cartOpen: false,
      };
    }

    case "SIGNIN_DIALOG": {
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
    }
    case "ADD_TO_CART": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item._id === existItem._id ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      Cookies.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "REMOVE_FROM_CART": {
      const newItem = state.cart.cartItems.filter(
        (item) => item._id !== action.payload
      );
      Cookies.set("cartItems", JSON.stringify(newItem));
      return { ...state, cart: { ...state.cart, cartItems: newItem } };
    }
    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingAddress: {
            ...state.cart.shippingAddress,
            ...action.payload,
          },
        },
      };

    case "USER_LOGIN": {
      return { ...state, userInfo: action.payload };
    }

    case "USER_LOGOUT": {
      return { ...state, userInfo: null };
    }

    default:
      throw new Error("Invalid action type");
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
