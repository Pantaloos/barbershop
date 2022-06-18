import React, { useContext, useEffect, useReducer, useState } from "react";

import { reducer } from "./reducer";

export const StoreContext = React.createContext();

export const useStore = () => useContext(StoreContext);

const initialState = {
  barbers: [],
  users: [{ email: "ada@ada.com", password: "adda" }],
  user: null,
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
