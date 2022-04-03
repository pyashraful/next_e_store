import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cartOpen: false,
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
  }
}

export function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("🚀 ~ file: store.js ~ line 26 ~ StoreProvider ~ state", state);

  const value = [state, dispatch];
  return <Store.Provider value={value}>{children}</Store.Provider>;
}
