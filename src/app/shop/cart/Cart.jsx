"use client"
import React, { createContext, useState, useContext } from "react";
import { denimData } from "../page";
const CartContext = createContext();


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(0);
  const [addedItems, setAddedItems] = useState([]);
   const [quantity, setQuantity] = useState(0);
   const [cartQuant, setCartQuant] = useState(quantity);

  

  return (
    <CartContext.Provider value={{ cart, setCart, addedItems,setAddedItems, quantity, setQuantity, cartQuant, setCartQuant }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
