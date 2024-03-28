"use client";
import React, { createContext, useState, useContext } from "react";
import { denimData } from "../page";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCart, setTotalCart] = useState(0);
  const [totalItem, setTotalItem] = useState(0);
  const [quant, setQuant] = useState(1);

  const prodCard = denimData.find(
    (denim) =>
      denim.name.split(" ").join("-") ===
      window.location.pathname.split("/").slice(-1)[0]
  );
  //   const [addedItems, setAddedItems] = useState([]);
  //   const [quantity, setQuantity] = useState(0);
  //   const [cartQuant, setCartQuant] = useState(quantity);
  
  // Use a conditional statement that will sort based on  if the main category is active in order to render the subcategories based on the maincategories

  const addToCart = (denim) => {
    // Check if the product already exists in the addedItems array
    console.log(
      denim.name.split(" ").join("-") ===
        window.location.pathname.split("/").slice(-1)[0]
    );
    console.log(denim.name.split(" ").join("-"));
    console.log(window.location.pathname.split("/").slice(-1)[0]);
    
    const prodCardIndex = cartItems.findIndex(
      (item) => item.name === denim.name
    );

    if (!quant || quant < 1) {
      alert("Quantity must be at least 1.");
      setQuant(1);
      return; // Exit the function if quant is less than 1 or empty
    }

    if (quant > denim.stock) {
      alert("Stock unavailable");
      setQuant(1);
      return;
    }

    if (prodCardIndex !== -1) {
      // If the product exists, update its quantity
      const updatedAddedItems = [...cartItems];
      const totalQuantity = Number(updatedAddedItems[prodCardIndex].quantity) + Number(quant);
      if (totalQuantity > denim.stock) {
        console.log(denim.stock)
        console.log(quant)
        console.log(updatedAddedItems[prodCardIndex].quantity);
        console.log(totalQuantity);
        alert("Out of stock."); 
        return;
       
      }
      updatedAddedItems[prodCardIndex].quantity++;
      updatedAddedItems[prodCardIndex].totalPrice += denim.price;
      setCartItems(updatedAddedItems);

      setTotalCart(Number((totalCart + parseFloat(denim.price)).toFixed(2)));
      let tQuant = 1;
      setTotalItem(totalItem + tQuant++);
      const updateCart = (prodCard) => {
        setTotalItem(Number(quant) + totalItem);
      };

      if (updatedAddedItems[prodCardIndex].quantity === denim.stock) {
        alert("all stock in cart");
        return;
      }

      if (!prodCard) {
        // If the product doesn't exist, add it to addedItems array
        const updatedAddedItems = [...cartItems];
        const updateCart = (prodCard) => {
          setTotalItem((prev) => prev + Number(quant));
        };
      } else {
        updateCart();

        updatedAddedItems[prodCardIndex].totalPrice +=
          denim.price * quant - denim.price;
        updatedAddedItems[prodCardIndex].quantity += parseInt(quant) - 1;
        setTotalCart(
          Number((totalCart + parseFloat(denim.price * quant)).toFixed(2))
        );
      }
    } else {
      if (prodCard) {
        setCartItems((prevItems) => [
          ...prevItems,
          { ...denim, quantity: quant, totalPrice: denim.price * quant },
        ]);
        setTotalCart((...prevItems) =>
          Number(parseFloat(prevItems) + parseFloat(denim.price * quant))
        );

        setTotalItem((...prevItems) =>
          Number(parseInt(prevItems) + parseInt(quant))
        );

        console.log(quant);
        console.log(typeof quant);
      } else {
        setCartItems((prevItems) => [
          ...prevItems,
          { ...denim, quantity: 1, totalPrice: denim.price },
        ]);
        setTotalCart((...prevItems) =>
          Number(parseFloat(prevItems) + parseFloat(denim.price))
        );
        setTotalItem((...prevItems) => Number(parseInt(prevItems) + 1));
      }
    }
    setQuant(1);
  };
  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        totalCart,
        setTotalCart,
        totalItem,
        setTotalItem,
        addToCart,
        quant,
        setQuant,
        // cart,
        // setCart,
        // addedItems,
        // setAddedItems,
        // quantity,
        // setQuantity,
        // cartQuant,
        // setCartQuant,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
