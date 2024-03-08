"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxCross1 } from "react-icons/rx";
import { CgShoppingCart } from "react-icons/cg";
import { useCart } from "./Cart";
import { denimData } from "../page";
import { Quantify } from "./CartButton";


export function Added({addedItems, removeItem}) {
  const {quantity, setQuantity} = useCart();
  
 const {cartQuant, setcartQuant} = useCart()
 

  function handleQuantity(e) {
    setQuantity(parseInt((prev)=> prev + e.target.value));
   
  }
  // const existsPreviously = addedItems.some(
  //   (addedItem, i) => addedItem.name === item.name && i < index
  // );

  
     
  return (
    <div>
      {addedItems.map((item, index) => (
        <div key={index} >
          <div className="grid grid-cols-2 gap-0 px-6 relative ">
            <section className="col-span-1  md:mr-6 relative w-20 h-32 my-auto">
              <div className=" h-[100%]">
                <Image
                  src={item.image}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="object-top "
                />
              </div>
            </section>
            <section className="col-span-1  pr-6 flex flex-col ">
              <h2 className=" uppercase font-bold text-[.7rem] flex flex-col text-black leading-3 mt-4 mr-32 z-40">
                {item.name}
                {/* <span className="text-[.7rem]">Category : {item.s}</span> */}
              </h2>

              <input
                type="number"
                name="quantity"
                id="cartQuantity"
                className="outline-none border-none text-black w-12 h-8 border-4 border-gray-600 text-center"
                value={cartQuant}
                onChange={handleQuantity}
              />

              {/* <Quantify quantity={quantity} handleQuantity={handleQuantity} /> */}

              <p className="text-red-500 text-[.7rem] pb-6 mr-16">
                &#x20A6;{item.price}
              </p>
              <button
                  onClick={removeItem}
                  className="border-2 text-black text-[.7rem] px-2 mt-[-2rem]  "
                >
                  Remove Item
                </button>
              <div>
                
              </div>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CartPage() {
  const [open2, setOpen2] = useState(true);
  const { cart, setCart } = useCart();
  const {addedItems, setAddedItems}= useCart()
  

  const controlNav2 = () => {
    setOpen2(!open2);
  };

  const removeItem = (index) => {
   
    const newItems = [...addedItems];
   newItems.splice(index, 1);
   setAddedItems(newItems);

    const quant = parseInt(document.getElementById("cartQuantity").value);
    console.log(quant)
    setCart(cart>0?cart - quant:0) 
  };

  

  return (
    <ul>
      <li>
        <Link href="" className="flex gap-1" onClick={controlNav2}>
          <CgShoppingCart />
          <span className="text-[10px] items-center">{cart}</span>
        </Link>
      </li>
      <div
        className={`${
          open2 ? "hidden" : " flex flex-col max-w-96 mt-[-40px]"
        } lg:gap-14 md:gap-7 gap-6 flex-grow  cart-small self-center  shadow-md md:shadow-[0] md:mt-0 ease-in-out z-[60] overflow-y-scroll bg-white`}
      >
        <section className="flex justify-between pr-2 pt-6 border-b border-b-black w-[100%]">
          <li className="">Your cart</li>
          <li onClick={controlNav2} className="cursor-pointer">
            <RxCross1 />
          </li>
        </section>
        <section>
          {<Added  addedItems={addedItems} removeItem={removeItem}/>}
        </section>
      </div>
    </ul>
  );
}


