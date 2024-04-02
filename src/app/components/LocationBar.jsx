"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { denimData } from '../shop/page';



export default function LocationBar({currentUrl}) {
 

  // const [isSticky, setIsSticky] = useState(false);
  // const [prevScrollPos, setPrevScrollPos] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollTo(scrollY === 0);
  //     setIsSticky(currentScrollPos > prevScrollPos);
  //     setPrevScrollPos(currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [prevScrollPos]);

  //  Split the URL into segments
   const segments = currentUrl.split("/").filter((segment) => segment !== "");

  const locations = segments.map((segment, index) => {
    const url = '/' + segments.slice(0, index + 1).join('/');
     
         return (
           <section key={index}>
             <a
               href={url}
               className={` uppercase   ${
                 index < segments.length - 1 ? "text-gray-500" : "text-black"
               }`}
             >
               {segment}
             </a>
             {index < segments.length - 1 && (
               <span className="text-[.8rem]  text-gray-500 ml-[-3px]">
                 &nbsp;||&nbsp;
               </span>
             )}
           </section>
         ); 
    })
    console.log(currentUrl);

  
  return (
    <div className={`flex px-5 main-bg uppercase`}>
      <a href="/" className="text-gray-500 text-[.7rem] md:text-[.8rem]">
        Home
      </a>
      <span className="text-[.8rem] text-gray-500">
        &nbsp;||&nbsp;
      </span>
      {locations}
    </div>
  );
}
