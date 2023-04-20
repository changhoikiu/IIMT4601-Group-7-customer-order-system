import { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer } from "./Reducers";

// import data from "./book_data.json";

const Cart = createContext();

const Context = ({ children }) => {

  const [state, dispatch] = useReducer(cartReducer, {
    bookList: [],
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const State = () => {
  return useContext(Cart);
};
