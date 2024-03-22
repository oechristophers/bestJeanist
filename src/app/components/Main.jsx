// Only footer and header will be part of the layout, the rest will be in page
import React from "react";
import { EmblaCarousel } from "./MainCarousel";
import Image from "next/image";
import Link from "next/link";
import { EmblaCarousel2 } from "./Carousel2";
import Bygender from "../shop/Bygender";
import { MainGrp } from "../shop/genderSort/[slug]/page";

export default function Main() {
  return (
    <div className="min-h-screen my-auto bg-white ">
      <EmblaCarousel />

      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-x-2 gap-10 pb-10 ">
        <section className="relative ">
          <Link href={`/shop/category/shorts`} className="flex flex-col relative">
            <div className=" relative ">
              <Image
                src="/frontImage18.jpg"
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="top"
                className="w-[100%] min-h-[100%]"
              />
            </div>
            <div className=" z-30 -mt-20 text-white pl-3 ">
              <h3 className="text-2xl md:text-3xl font-bold ">Shorts</h3>
              <button className="hover:border-b">Shop Now</button>
            </div>
          </Link>
        </section>

        <section className="relative">
          <Link href="/" className="h-[100%] flex flex-col relative">
            <div className=" relative ">
              <Image
                src="/frontImage19.jpg"
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="top"
                className="w-[100%] min-h-[100%]"
              />
            </div>
            <div className="z-30 -mt-20 text-white pl-3">
              <h3 className="text-2xl md:text-3xl font-bold">Skirts</h3>
              <button className="hover:border-b">Shop Now</button>
            </div>
          </Link>
        </section>

        <section className="relative">
          <Link href="/" className="h-[100%] flex flex-col relative">
            <div className=" relative ">
              <Image
                src="/frontimage.jpg"
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="top"
                className="w-[100%] min-h-[100%]"
              />
            </div>
            <div className="z-30 -mt-20 text-white pl-3">
              <h3 className="text-2xl md:text-3xl font-bold">Pants</h3>
              <button className="hover:border-b">Shop Now</button>
            </div>
          </Link>
        </section>

        <section className="relative">
          <Link href="/" className="h-[100%] flex flex-col relative">
            <div className=" relative ">
              <Image
                src="/frontImage13.jpg"
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="top"
                className="w-[100%] min-h-[100%]"
              />
            </div>
            <div className="z-30 -mt-20 text-white pl-3">
              <h3 className="text-2xl md:text-3xl font-bold">Pants</h3>
              <button className="hover:border-b">Shop Now</button>
            </div>
          </Link>
        </section>
      </div>

      <div className="">
        <section className="hidden md:grid md:grid-cols-2 relative pb-10 gap-2 min-h-screen">
          <div className="relative col-span-1">
             <Link href={`/shop/genderSort/male`}>
            <section>
              <Image
                src="/frontImage6.jpg"
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="top"
                className="w-[100%] max-h-[100%]"
              />
            </section>

            <section className="mt-[-5rem] pb-10">
              <button className="border-2 border-white hover:border-black hover:bg-white text-white hover:text-black  px-4 py-2 ml-4 ">
                <span className="border-2 px-6 border-[inherit]  text-[inherit]">
                  Men
                </span>
              </button>
            </section>
            </Link>
          </div>

          <div className="relative col-span-1"> 
            <Link href={`/shop/genderSort/female`}>
            <section>
              <Image
                src="/frontImg.jpg"
                layout="responsive"
                width={400}
                height={400}
                objectFit="cover"
                objectPosition="top"
                className="w-[100%] min-h-[100%]"
              />
            </section>

            <section className="mt-[-5rem] ">
           
                <button className="border-2  border-white  px-4 py-2 ml-4 hover:border-black hover:bg-white text-white hover:text-black">
                  <span className="border-2 px-6 border-[inherit] text-[inherit]">
                    Women
                  </span>
                </button>
              
            </section>
            </Link>
          </div>
        </section>

        <section className="h-[fit-content] my-auto bg-white md:hidden pb-6">
          <EmblaCarousel2 />
        </section>
      </div>
      <section className="pb-10 sm:mt-[-4rem] md:mt-0">
        <h2 className="text-5xl font-bold pl-5">All Inclusive Collection</h2>
        <div className="">
          <MainGrp />
        </div>
      </section>

      {/* <section className="relative max-h-[80vh] bg-blue-400">
        <video autoPlay loop muted width={500} height={70} src="/frontvid2.mp4" className="max-h-[inherit] bg-red-400"></video>
      </section> */}
    </div>
  );
}
