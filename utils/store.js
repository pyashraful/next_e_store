import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cartOpen: true,
};

function reducer(state, action) {
  if (action.type === "OPEN_CART") {
    return {
      ...state,
      cartOpen: true,
    };
  }
  if (action.type === "CLOSE_CART") {
    return {
      ...state,
      cartOpen: false,
    };
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
