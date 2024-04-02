"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgShoppingCart } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import CartPage from "../shop/cart/page";
import { Source_Code_Pro } from "next/font/google";

const inter = Source_Code_Pro({ subsets: ["latin"], weight: ["900"] });

export default function NavBar() {
  const [open, setOpen] = useState(true);

  function controlNav() {
    setOpen(!open);
  }

  const [sort, setSort] = useState("");

  function searchProd(e) {
    setSort(e.target.value);
  }

  return (
    <nav className="grid grid-cols-3 pt-2 pb-1 uppercase  text-[12px] link_text px-6 ">
      {!open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50 z-50"
          onClick={controlNav} // this is to close cart/nav when you click outside of it
        ></div>
      )}
      <ul className="lg:hidden mt-3">
        <li
          className={`lg:hidden cursor-pointer ${
            open ? "flex text-2xl" : "hidden"
          }`}
          onClick={controlNav}
        >
          <RxHamburgerMenu />
        </li>
      </ul>

      <ul
        className={`lg:flex lg:flex-row mt-3   ${
          open ? "hidden" : " flex flex-col max-w-72 mt-[-40px] "
        } lg:flex lg:gap-10 md:gap-7 gap-6 flex-grow header_small shadow-md md:shadow-[0] ease-in-out z-[60]`}
      >
        <li
          className={` lg:hidden ${
            open
              ? "hidden"
              : " flex text-[18px] lg:pl-32 justify-center items-center pt-4 font-bold"
          }`}
        >
          <Link href="/"> BESTJEANIST</Link>

          <span
            className={`md:hidden cursor-pointer ${
              open ? "hidden" : "flex ml-6"
            }`}
            onClick={controlNav}
          >
            <RxCross1 />
          </span>
        </li>

        <li className="md:hover:border-b-2 border-black ">
          <Link href="/shop">Shop </Link>
        </li>
        <li className="md:hover:border-b-2 border-black">
          <Link href="/blogs">Pages </Link>
        </li>
        <li className="md:hover:border-b-2 border-black">
          <Link href="/about">About </Link>
        </li>
        <li className="block lg:hidden">Search</li>
        <li className="block lg:hidden">Account</li>
        <li className="block lg:hidden">
          <Link href="/contact">Contact </Link>
        </li>
      </ul>

      <h1
        className={`text-2xl flex font-bold  justify-center items-center ${inter.className}`}
      >
        <Link href="/"> BESTJEANIST</Link>
      </h1>

      <ul className="flex gap-10 text-left lg:ml-auto mt-3">
        <li className="hidden lg:flex">Search</li>
        <li className="hidden lg:flex">Account</li>
        <li className="hidden lg:flex">
          <Link href="/contact">Contact </Link>
        </li>
        <ul className="flex   ml-auto lg:ml-0 text-2xl">
          <li>
            <CartPage />
          </li>
        </ul>
      </ul>
    </nav>
  );
}
