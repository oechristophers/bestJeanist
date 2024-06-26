"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { denimData } from "../page";
import Image from "next/image";
import Link from "next/link";
import LocationBar from "@/app/components/LocationBar";
import CartButton from "../cart/CartButton";

export default function page({ params }) {
  const prodCard = denimData.find(
    (denim) => denim.name.split(" ").join("-") == params.product
  ); // this checks the adress bar to see if whats there is equal to the fruit.nameor anything else you want to link to

  const relatedDenim = denimData
    .filter(
      (denim) =>
        denim.category == prodCard.category && denim.name !== prodCard.name
    )
    .slice(0, 3)
    .sort((a, b) => b.price - a.price);

  const relatedCategory = relatedDenim.map((denim) => (
    <section key={denim.id} className="px-1 pt-10 pb-10 ">
      <div className="h-[100%] flex flex-col z-0 ">
        <div className="h-[98%] relative flex flex-col card_cart ">
          <Link
            href={`/shop/${denim.name.split(" ").join("-")}`}
            className="h-[100%] flex flex-col z-0 "
          >
            <Image
              src={denim.image}
              alt={denim.name}
              layout="responsive"
              width={400}
              height={400}
              objectFit="cover"
              objectPosition="top"
              className=""
            />
          </Link>
          <section className="z-50 mt-[-2rem] pb-3 w-[100%] px-3 flex justify-center">
            <button
              className="border cartt w-[inherit] hover:text-white  rounded-lg"
              onClick={() => addToCart(denim)}
            >
              Quick Add
            </button>
          </section>
        </div>

        <div className=" flex flex-col gap-0">
          <Link
            href={`/shop/${denim.name.split(" ").join("-")}`}
            className=" hover:underline p-1"
          >
            <h2 className=" text-[1rem] sm:text-[.8rem] md:text-[.7rem] lg:text-[.8rem]">
              {denim.name}
            </h2>
          </Link>
          <p className="text-[.8rem] sm:text-[.8rem] text-red-500">
            &#x20A6;{denim.price}
          </p>
        </div>
      </div>
    </section>
  ));

  const sizes = prodCard.sizes.map((size, index) => (
    <button
      key={index}
      className="h-[2rem] bg-white w-[3rem] mx-3 md:mx-5 border-2 border-black text-black"
    >
      {size}
    </button>
  ));
  //Use usestate to handle the 2 and 3 images , such that when they are hovered or clicked, it becomes the bigger displayed image. Get inspo from asos and boohooMan
  const shopUrl = "/shop/";
  return (
    <div className="">
      <div className="px-6 text-[.7rem] md:text-[.8rem] ">
        <LocationBar currentUrl={shopUrl + prodCard.name} />
      </div>

      <div className="md:grid md:grid-cols-2 gap-0 px-6 relative ">
        <section className="md:col-span-1  md:mr-6 relative">
          <div className="">
            <Image
              src={prodCard.image}
              alt={prodCard.name}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              className="object-top "
            />
          </div>
        </section>
        <section className="md:col-span-1  pr-6 flex flex-col gap-y-3">
          <h2 className=" uppercase font-bold text-2xl flex flex-col">
            {prodCard.name}
            <span className="text-[.7rem]">Category : {prodCard.category}</span>
          </h2>

          <p className="text-red-500 text-[2rem] pb-3">
            &#x20A6;{prodCard.price}
          </p>
          <p className="pb-5 ml-[-3%]">{sizes}</p>
          <p className="flex pb-3">
            <span className="h-7 w-8 border-2 text-center my-auto">
              {prodCard.stock}{" "}
            </span>
            &nbsp; In stock
          </p>

          {/* <div className="flex pb-6">
            <p>Quantity: &nbsp;</p>
            <span className="">
              <input
                type="number"
                name="quantity"
                id="quantity"
                className="outline-none border-none text-black w-12 h-8 border-4 border-gray-600 text-center"
                max={prodCard.stock}
              />
            </span>
          </div> */}
          {/* <Quantify/> */}
          <section>
            <CartButton
              prodCard={prodCard}
              params={params}
              product={params.product}
            />
          </section>

          <p className="leading-2">{prodCard.description}</p>

          <div>
            <p>
              Priority free shipping in Nigeria standard free shipping in
              Africa. In order to ensure your order is eligible for next day
              shipping, please order before 12pm GMT. Please note, no orders
              will be processed or shipped on UK bank holidays or weekends.
            </p>

            <p>Returns</p>
            <p>
              You can return or exchange full price orders within 30 days of
              purchase, free of charge. Anything purchased in sale can be
              exchanged free of charge, or refunded for a small fee within 14
              days of purchase.
            </p>

            <p>
              Whether you prefer your denim crisp and pristine or love the
              worn-in look, your bestJeanist jeans are up for the challenge.
              Whether you&apos;re keeping them looking fresh out of the store or
              putting them through the wringer to showcase their durability,
              proper care ensures they&apos;ll continue to excel at what
              they&apos;re made for: being worn and keeping you comfy.
            </p>
          </div>
        </section>

        <section className=" col-span-2 mt-16 ">
          <div className="flex w-[100%] ">
            <h3 className="lg:text-[1rem] sm:text-[.8rem] text-[.6rem] md:text-[1rem] border-t-2 border-r-2 w-[20%] lg:w-[15%] border-slate-400">
              Related Products
            </h3>
            <span className="w-[80%] border-b-2 lg:w-[85%] border-slate-400"></span>
          </div>

          <div className=" grid grid-cols-1 sm:grid-cols-3 md:mx-auto  lg:px-16 md:w-[85%] lg:w-[95%] lg:gap-10">
            {relatedCategory}
          </div>
        </section>
      </div>
    </div>
  );
}
