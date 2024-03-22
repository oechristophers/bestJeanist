"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import Bycategory from "./Bycategory";
import Bygender from "./Bygender";
import LocationBar from "../components/LocationBar";
import { useCart } from "./cart/Cart";

export default function Product({ denimData }) {
  const { addToCart } = useCart();

  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(9); // Number of items per page

  function searchProd(e) {
    setSort(e.target.value);
  }


   const [open, setOpen] = useState(true);

   const [open2, setOpen2] = useState(true);

   function controlNav() {
     setOpen(!open);
   }

   function controlNav2() {
     setOpen2(!open2);
   }

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = denimData
    .filter(
      (data) =>
        data.name.toLowerCase().includes(sort.toLowerCase()) ||
        data.category.toLowerCase().includes(sort.toLowerCase())
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const denimCart = currentItems.map((denim) => (
    <section
      key={denim.id}
      className="px-3  h-[50vh] sm:w-[20rem] pt-6 sm:h-[83vh] md:h-[72vh] md:w-[15rem] lg:w-[17rem]"
    >
      <Link
        href={`/shop/${denim.name.split(" ").join("-")}`}
        className="h-[100%] flex flex-col -z-40"
      >
        <div className="h-[98%] relative flex flex-col-reverse">
          <Image
            src={denim.image}
            alt={denim.name}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className=""
          />
        </div>

        <div className="">
          <h2 className=" text-[.6rem] sm:text-[.8rem] md:text-[.7rem] lg:text-[.8rem]">
            {denim.name}
          </h2>
          <p className="text-[.7rem] sm:text-[.8rem]">&#x20A6;{denim.price}</p>
        </div>
      </Link>
      <div className="mt-[-3.5rem] sm:mt-[-4rem] md:mt-[-3.76rem] lg:mt-[-3.9rem] z-50  w-[inherit] bg-blue-400 relative">
        <button
          className="border bg-slate-50 text-black absolute md:w-[13.5rem] lg:w-[15.5rem] sm:w-[18.5rem] w-[10.95rem] opacity-0 hover:opacity-80"
          onClick={() => addToCart(denim)}
        >
          Quick Add
        </button>
      </div>
    </section>
  ));

  // Pagination - page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(denimData.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="">
        <LocationBar currentUrl="/shop" />
      </div>

      <div className="grid md:grid-cols-4 lg:flex w-[100%] bg-white pt-10">
        <div className=" col-span-4 lg:col-span-1 flex flex-col gap-6  lg:px-0 bg-white ml-3 mr-3 lg:mr-0">
          <section className="flex items-center border border-gray-600  w-[100%] ">
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

          <section className="w-[100%] lg:flex lg:flex-col relative z-50 lg:z-0 md:h-4 h-24 lg:h-10">
            <div className="grid grid-cols-2  grid-rows-2 lg:flex lg:flex-col">
              <section>
                <nav className="col-span-1 text-center border py-4 bg-white">
                  <button onClick={controlNav} className="">
                    Category
                  </button>

                  <ul
                    className={`lg:block border-t leading-8 border mt-4 lg:mt-2 ${
                      open
                        ? "hidden"
                        : "block border border-t-0 leading-8 mt-4 "
                    }`}
                  >
                    <Bycategory title="pants" />
                    <Bycategory title="shorts" />
                    <Bycategory title="skirts" />
                    <Bycategory title="dresses" />
                    <Bycategory title="jackets" />
                  </ul>
                </nav>
              </section>

              <section>
                <nav className="col-span-1 justify-end items-end text-center border z-20 py-4 bg-white">
                  <button onClick={controlNav2}>Gender</button>
                  <ul
                    className={`lg:block border-t leading-8 border mt-4 lg:mt-2 ${
                      open2
                        ? "hidden"
                        : "flex flex-col border border-t-0 col-start-2 leading-8"
                    }`}
                  >
                    <Bygender title="Male" />
                    <Bygender title="Female" />
                    <Bygender title="Unisex" />
                  </ul>
                </nav>
              </section>
            </div>
          </section>
        </div>

        <div className="  col-span-4 lg:w-[80%] ">
          <section className=" flex flex-col justify-center items-center">
            <div className="grid grid-cols-2 md:w-[48rem] lg:w-[55rem] md:grid-cols-3 md:p-10  lg:p-14 lg:mr-16  lg:pt-0 ">
              {currentItems.length === 0 ? (
                <h2 className=" ">No items Found</h2>
              ) : (
                denimCart
              )}
            </div>
          </section>

          {/* Pagination */}
          <ul className="pagination flex gap-5  justify-center pb-10">
            {pageNumbers.map((number) => (
              <li
                key={number}
                className={`page-item ${
                  currentPage === number ? "current-page" : ""
                }`}
              >
                <a
                  onClick={() => paginate(number)}
                  href="#"
                  className={`page-link ${
                    currentPage === number ? "current-page-link" : ""
                  }`}
                >
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
