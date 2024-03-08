"use client"
import Link from 'next/link';
import React from 'react'
import { denimData } from '../shop/page';



export default function LocationBar({currentUrl}) {
 

  //  const currentUrl = window.location.pathname

  //  Split the URL into segments
   const segments = currentUrl.split("/").filter((segment) => segment !== "");

  const locations = segments.map((segment, index) => {
    const url = '/' + segments.slice(0, index + 1).join('/');
     
         return (
           <section key={index}>
             <a
               href={url}
               className={`capitalize ${
                 index < segments.length - 1 ? "text-gray-500" : "text-black"
               }`}
             >
               {segment}
             </a>
             {index < segments.length - 1 && (
               <span className="text-[.8rem] pt-1 text-gray-500 ml-[-3px]">
                 &nbsp;||&nbsp;
               </span>
             )}
           </section>
         ); 
    })
    console.log(currentUrl);

  
  return (
    <div className="flex px-5 bg-gray-200">
        <a href="/" className="text-gray-500">
        Home
      </a>
      <span className="text-[.8rem] pt-1 text-gray-500">&nbsp;||&nbsp;</span>
      {locations}
    </div>
  );
}
