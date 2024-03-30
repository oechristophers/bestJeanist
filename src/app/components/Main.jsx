// Only footer and header will be part of the layout, the rest will be in page
"use client"
import React from "react";
import { EmblaCarousel } from "./MainCarousel";
import Image from "next/image";
import Link from "next/link";
import { EmblaCarousel2 } from "./Carousel2";
import Bygender from "../shop/Bygender";
import { MainGrp } from "../shop/genderSort/[slug]/page";
import { EmblaCarousel3 } from "./Carousel3";
import { blogPosts } from "../blogs/page";

export default function Main() {

  const relatedCategory = blogPosts.map((blog) => (
    <section
      key={blog.id}
      className="px-3 sm:w-[100%] pt-6 md:w-[100%] lg:w-[100%] "
    >
      <Link
        href={`/blogs/${blog.title.split(" ").join("-")}`}
        className="h-[100%] flex flex-col -z-40" // Added flex and flex-col classes
      >
        <div className=" relative flex flex-col-reverse h-[98%]">
          <Image
            src={blog.image}
            alt={blog.name}
            layout="responsive"
            width={200}
            height={200}
            objectFit="cover"
            objectPosition="top"
            className=" min-w-[100%]"
          />
        </div>

        <div className="">
          <p className="text-[.7rem] sm:text-[.8rem] ">
            By <span className=" text-red-500">{blog.blogger_name}</span>/
            {new Date().getFullYear()}
          </p>
          <h2 className=" text-[.9rem] sm:text-[1.2rem] md:text-[.9rem] lg:text-[1.4rem] pt-4 pb-2">
            {blog.title}
          </h2>
          <p className="md:text-[.75rem] lg:text-[1rem] ">
            {blog.blog_story.split()[0].slice(0, 60) + "..."}
          </p>
        </div>
      </Link>
    </section>

    
  ));

  const cutBlog = relatedCategory.slice(0, 3);
  return (
    <div className="min-h-screen my-auto mt-[-5%]">
      <EmblaCarousel />

      <div className="grid grid-cols-2 md:grid-cols-4 mt-5 gap-x-2 gap-10 pb-10 ">
        <section className="relative ">
          <Link
            href={`/shop/category/shorts`}
            className="flex flex-col relative"
          >
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
          <Link
            href="/shop/category/skirts"
            className="h-[100%] flex flex-col relative"
          >
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
          <Link
            href="/shop/category/pants"
            className="h-[100%] flex flex-col relative"
          >
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
          <Link
            href="/shop/category/dresses"
            className="h-[100%] flex flex-col relative"
          >
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
      <section className="pb-10 ">
        <h2 className="text-5xl font-bold pl-5">All Inclusive Collection</h2>
        <div className="">
          <MainGrp />
        </div>
      </section>

      <EmblaCarousel3 />

      <section className="pb-10 ">
        <h2 className="text-5xl font-bold pl-5">BestJeanist News</h2>
        <div className="grid grid-cols-2 md:grid-cols-3">{cutBlog}</div>
      </section>
    </div>
  );
}
