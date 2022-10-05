import { useState, createContext, useContext, useEffect } from "react";

const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToUI = (data) => {
    setItems((prev)=> [...prev,data])
  };

  const values = {
    items,
    setItems,
    addToUI
  };
  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};
const useBasket = () => useContext(BasketContext);

export { BasketProvider, useBasket };
