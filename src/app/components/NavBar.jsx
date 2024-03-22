"use client";
import React, { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { CgShoppingCart } from "react-icons/cg";
import { RxCross1 } from "react-icons/rx";
import { GoPerson } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import CartPage from "../shop/cart/page";


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
    <nav className="flex justify-between px-4 gap-3 pt-4 pb-5">
      <h1 className="text-[18px] lg:pl-32 font-bold">
        <Link href="/"> BESTJEANIST</Link>
      </h1>
      {!open && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black opacity-20 z-50"
          onClick={controlNav} // this is to close cart when you click outside of it
        ></div>
      )}
      <ul
        className={`md:flex md:flex-row ${
          open ? "hidden" : " flex flex-col max-w-72 mt-[-40px]"
        } md:flex lg:gap-14 md:gap-7 gap-6 md:mr-4 flex-grow header_small self-center md:justify-center shadow-md md:shadow-[0] md:mt-0 ease-in-out z-[60]`}
      >
        <li
          className={` md:hidden ${
            open
              ? "hidden"
              : " flex text-[18px] lg:pl-32 justify-center items-center pt-4 font-bold"
          }`}
        >
          <Link href="/"> BESTJEANIST</Link>
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
          <Link href="/blogs">Pages </Link>
        </li>
        <li>
          <Link href="/contact">Contact </Link>
        </li>
      </ul>

      <ul>
        <section className=" items-center border-4 border-gray-600  w-[100%] hidden md:flex">
          <input
            type="text"
            name="text"
            id="text"
            placeholder="search keyword"
            className=" outline-none border-none pl-8 w-5/6 bg-transparent"
            onChange={searchProd}
            defaultValue={sort}
          />
          <CiSearch />
        </section>
      </ul>
      <ul className="flex gap-3 right-5 text-2xl">
        <li>
          <Link href="" className="flex gap-1">
            <GoPerson />
          </Link>
        </li>
        <li>
          <CartPage />
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
