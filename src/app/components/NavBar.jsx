"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgShoppingCart } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";

export default function NavBar() {
  const [cart, setCart] = useState(0); //hook must be immediately after the function
  const [open, setOpen] = useState(true);

  function controlNav() {
    setOpen(!open);
  }

  return (
    <nav className="flex justify-between px-4 gap-3 pt-4">
      <h1 className="text-[21px] lg:pl-32">
        best<span className="font-bold text-2xl">Jeanist</span>
      </h1>
      <ul
        className={`md:flex md:flex-row ${
          open ? "hidden" : " flex flex-col max-w-72 mt-[-40px]"
        } md:flex lg:gap-14 md:gap-7 gap-6 md:mr-4 flex-grow header_small self-center md:justify-center shadow-md md:mt-0 ease-in-out`}
      >
        <li className={` md:hidden ${ open ? "hidden" : " flex text-[21px] lg:pl-32 justify-center items-center pt-4"}`}>
          
          best<span className="font-bold text-2xl ">Jeanist</span>
        </li>
        <li>
          <Link href="/">Home </Link>
        </li>
        <li>
          <Link href="/about">About </Link>
        </li>
        <li>
          <Link href="/shop">Shop </Link>
        </li>
        <li>
          <Link href="">Pages </Link>
        </li>
        <li>
          <Link href="/contact">Contact </Link>
        </li>
      </ul>

      <ul className="flex gap-3 right-5 text-2xl">
        <li>
          <Link href="" className="flex gap-1">
            <GoPerson />
          </Link>
        </li>
        <li>
          <Link href="" className="flex gap-1">
            <CgShoppingCart />
            <span className="text-[10px] items-center">{cart}</span>
          </Link>
        </li>

        <li
          className={`md:hidden cursor-pointer ${open ? "flex" : "hidden"}`}
          onClick={controlNav}
        >
          <RxHamburgerMenu />
        </li>
        <li
          className={`md:hidden cursor-pointer ${open ? "hidden" : "flex "}`}
          onClick={controlNav}
        >
          <RxCross1 />
        </li>
      </ul>
    </nav>
  );
}
