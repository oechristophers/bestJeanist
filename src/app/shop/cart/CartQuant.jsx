// "use client"
// import React, { createContext, useContext, useState } from 'react'
// const CartQuantContext = createContext();


// export const CartQuantProvider = ({ children }) => {
//   const [quantity, setQuantity] = useState(0);
//   const [cartQuant, setCartQuant] = useState(quantity);
  
//   return (
//     <CartQuantContext.Provider
//       value={{
//         cartQuant,
//         setCartQuant,
//         quantity,
//         setQuantity,
//       }}
//     >
//       {children}
//     </CartQuantContext.Provider>
//   );
// };

// export const useCartQuant = () => {
//   return useContext(CartQuantContext);
// };
"use client";
import React, { createContext, useState, useContext } from "react";
const CartQuantyContext = createContext();

export const CartQuantyProvider = ({ children }) => {
  const [quantity, setQuantity] = useState(0);
   const [cartQuant, setCartQuant] = useState(quantity);

  return (
    <CartQuantyContext.Provider value={{ cartQuant, setCartQuant, quantity, setQuantity,}}>
      {children}
    </CartQuantyContext.Provider>
  );
};

export const useCartQuantt = () => {
  return useContext(CartQuantyContext);
};
