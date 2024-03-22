"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { CgShoppingCart } from "react-icons/cg";
import { useCart } from "./Cart";
import { denimData } from "../page";

export function Added() {
  const { cartItems, setCartItems } = useCart();
  const { totalCart, setTotalCart } = useCart();
  const { totalItem, setTotalItem } = useCart(0);
  const { quant, setQuant } = useCart();

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((denim) =>
      denim.id === id
        ? {
            ...denim,
            quantity: denim.quantity + 1,
            totalPrice: (denim.quantity + 1) * denim.price,
          }
        : denim
    );

    setCartItems(updatedCartItems);

    const updatedTotalCart = updatedCartItems.reduce(
      (totalCart, denim) => totalCart + denim.price * denim.quantity,
      0
    );
    setTotalCart(updatedTotalCart);

    const updatedTotalItem = updatedCartItems.reduce(
      (totalItem, denim) => totalItem + denim.quantity,
      0
    );
    setTotalItem(updatedTotalItem);
  };

  const decreaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((denim) =>
      denim.id === id && denim.quantity > 1
        ? {
            ...denim,
            quantity: denim.quantity - 1,
            totalPrice: (denim.quantity - 1) * denim.price,
          }
        : denim
    );
    setCartItems(updatedCartItems);
    const updatedTotalCart = updatedCartItems.reduce(
      (totalCart, denim) => totalCart + denim.price * denim.quantity,
      0
    );
    setTotalCart(updatedTotalCart);

    const updatedTotalItem = updatedCartItems.reduce(
      (totalItem, denim) => totalItem + denim.quantity,
      0
    );
    setTotalItem(updatedTotalItem);
  };

  const removeItem = (id) => {
  const updatedCartItems = [...cartItems]
    const prod = updatedCartItems.filter((index) =>
      index.id === id
       )

       console.log(prod)

       updatedCartItems.filter((item)=> item == prod)
       setCartItems(updatedCartItems)
       
  };

  return (
    <div className="">
      {cartItems.length === 0 ? (
        <p>Empty Cart</p>
      ) : (
        cartItems.map((denim) => (
          <div key={denim.id}>
            <div className="grid grid-cols-2 gap-0 px-6 relative ">
              <section className="col-span-1  md:mr-6 relative w-20 h-32 my-auto">
                <div className=" h-[100%]">
                  <Image
                    src={denim.image}
                    alt={denim.name}
                    layout="fill"
                    objectFit="cover"
                    className="object-top "
                  />
                </div>
              </section>
              <section className="col-span-1  pr-6 flex flex-col ">
                <h2 className=" uppercase font-bold text-[.7rem] flex flex-col text-black leading-3 mt-4  z-40">
                  {denim.name}
                  {/* <span className="text-[.7rem]">Category : {denim.s}</span> */}
                </h2>
                <div className="flex">
                  <p>{denim.quantity}</p>
                  <section className="flex gap-2 ">
                    <button
                      onClick={() => increaseQuantity(denim.id)}
                      className=" w-3 h-3"
                    >
                      <span className="">+</span>
                    </button>
                    <button
                      onClick={() => decreaseQuantity(denim.id)}
                      className="w-3 h-3"
                    >
                      -
                    </button>
                  </section>
                </div>

                {/* <Quantify quantity={quantity} handleQuantity={handleQuantity} /> */}

                <p className="text-red-500 text-[.7rem] pb-6 mr-16">
                  &#x20A6;{denim.totalPrice.toFixed(2)}
                </p>
                <button
                  onClick={removeItem}
                  className="border-2 text-black text-[.7rem] px-2 mt-[-2rem]  "
                >
                  Remove Item
                </button>
                <div></div>
              </section>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default function CartPage() {
  const { cartItems, setCartItems } = useCart();
  const { totalCart, setTotalCart } = useCart();
  const { totalItem, setTotalItem } = useCart(0);
  const { addToCart } = useCart();
  const [open2, setOpen2] = useState(true);

  const controlNav2 = () => {
    setOpen2(!open2);
  };

  return (
    <ul>
      <li>
        <Link href="" className="flex gap-1" onClick={controlNav2}>
          <CgShoppingCart />
          <span className="text-[10px] items-center">{totalItem}</span>
        </Link>
      </li>
      <div className="relative">
        {!open2 && (
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black opacity-20 z-50"
            onClick={controlNav2} // this is to close cart when you click outside of it
          ></div>
        )}
      </div>
      <div
        className={`${
          open2 ? "hidden" : " flex flex-col max-w-96 mt-[-40px]"
        } lg:gap-14 md:gap-7 gap-6 flex-grow cart-small self-center  shadow-md md:shadow-[0] md:mt-0 ease-in-out z-[60] overflow-y-scroll bg-white border-2 `}
      >
        <section className="flex justify-between pr-2 pt-6 border-b border-b-black w-[100%]">
          <li className="">Your cart</li>
          <li onClick={controlNav2} className="cursor-pointer">
            <RxCross1 />
          </li>
        </section>
        <section>{<Added />}</section>
        <section>
          {cartItems.length === 0 ? (
            ""
          ) : (
            <section className="ml-1 w-[95%]">
              <p className="flex justify-between text-[1rem]">
                <span>Subtotal</span>
                <span className="font-bold">&#x20A6;{totalCart}</span>
              </p>
              <button className="h-14 w-[100%] bg-black text-white rounded-md text-[1.2rem]">
                Continue to Checkout
              </button>
            </section>
          )}
        </section>
      </div>
    </ul>
  );
}
