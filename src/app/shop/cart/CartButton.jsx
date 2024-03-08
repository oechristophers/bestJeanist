import React, { useState } from "react";
import { useCart } from "./Cart";
import { denimData } from "../page";

export const Quantify = ({ quantity, handleQuantity }) => {
  return (
    <input
      type="number"
      name="quantity"
      id="quantity"
      className="outline-none border-none text-black w-12 h-8 border-4 border-gray-600 text-center"
      defaultValue={quantity}
      onChange={handleQuantity}
    />
  );
};

export default function Cart() {
  const { cart, setCart } = useCart();
  const { addedItems, setAddedItems } = useCart();
  const { cartQuant, setCartQuant } = useCart();
  const { quantity, setQuantity } = useCart();

  function handleQuantity(e) {
    const newValue = parseInt(e.target.value);
    setQuantity(newValue);
  }

  const addToCart = () => {
    // Check if the product already exists in the addedItems array

    const prodCardIndex = addedItems.findIndex(
      (denim) =>
        denim.name.split(" ").join("-") ===
        window.location.pathname.split("/").slice(-1)[0]
    );
    const newValue = document.getElementById("quantity").value;
    const checkQuant = quantity;

    if (prodCardIndex !== -1) {
      // If the product exists, update its quantity
      const updatedAddedItems = [...addedItems];
      setCartQuant(prev=> prev + quantity);
      setAddedItems(updatedAddedItems);
    } else {
      // If the product doesn't exist, add it to addedItems array
      const prodCard = denimData.find(
        (denim) =>
          denim.name.split(" ").join("-") ===
          window.location.pathname.split("/").slice(-1)[0]
      );
      setCartQuant(parseInt(newValue));
      setAddedItems((prevItems) => [...prevItems, { ...prodCard, quantity }]);
    }

    // Update cart quantity
    setCart((prevCart) => prevCart + quantity);
  };

  return (
    <div>
      <div className="flex pb-6">
        <p>Quantity: &nbsp;</p>
        <span className="">
          <Quantify quantity={quantity} handleQuantity={handleQuantity} />
        </span>
      </div>
      <div>
        <button onClick={addToCart} className="border-2 w-[70%] h-14 mb-5">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export function RemoveItemButton({ removeItem }) {
  return (
    <div>
      <button onClick={removeItem} className="border-2 w-[70%] h-14 mb-5">
        Remove Item
      </button>
    </div>
  );
}
