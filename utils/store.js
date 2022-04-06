import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cartOpen: false,
  cart: {
    cartItems: [],
  },
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
        (item) => item.name === newItem.name
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      return { ...state, cart: { ...state.cart, cartItems } };
    }

    default:
      throw new Error("Invalid action type");
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = [state, dispatch];
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
