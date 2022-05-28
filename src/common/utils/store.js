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

  user: Cookies.get("userInfo") ? JSON.parse(Cookies.get("userInfo")) : null,
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
      const user = action.payload;
      Cookies.set("user", JSON.stringify(user));
      return { ...state, user: action.payload };
    }

    case "USER_LOGOUT": {
      Cookies.remove("userInfo");
      return { ...state, userInfo: null };
    }

    case "TOGGLE_SIGNIN_DIALOG": {
      return {
        ...state,
        modalOpen: !state.modalOpen,
      };
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
