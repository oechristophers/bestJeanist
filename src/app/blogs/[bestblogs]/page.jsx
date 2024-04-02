"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../page";
import LocationBar from "@/app/components/LocationBar";

export default function page({ params }) {
  const blogCards = blogPosts.find((blog) => {
    const formattedTitle = blog.title.replace(":", ""); // Remove any special character in the title
    const decodedParams = decodeURIComponent(params.bestblogs); // Decode the URL-encoded string
    const formattedParams = decodedParams.replace(":", ""); // Remove any special character in the decoded params
    console.log(formattedParams);
    return (
      formattedTitle.split(" ").join("-") ===
      formattedParams.split(" ").join("-") // Compare the formatted strings
    );
  });

  const relatedBlogs = blogPosts
    .filter((data) => data.id !== blogCards.id)

    .slice(0, 3)
    .sort((a, b) => b.price - a.price);

  const relatedCategory = relatedBlogs.map((blog) => (
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

  //Use usestate to handle the 2 and 3 images , such that when they are hovered or clicked, it becomes the bigger displayed image. Get inspo from asos and boohooMan

  return (
    <div className="bg-white">
      <div className="px-6 bg-gray-100 text-[.7rem] md:text-[.8rem] uppercase">
        <LocationBar currentUrl={"/blogs/" + blogCards.title} />
      </div>

      <div className=" gap-0 px-6 relative bg-gray-100">
        <section className="relative">
          <div className="">
            <Image
              src={blogCards.image}
              alt={blogCards.title}
              layout="responsive"
              width={16}
              height={9}
              objectFit="cover"
              className="object-top "
              title={blogCards.title}
            />
          </div>
        </section>
        <section className=" pr-6 flex flex-col gap-y-3">
          <p className="text-[.7rem] sm:text-[.8rem] ">
            By <span className=" text-red-500">{blogCards.blogger_name}</span>/
            {new Date().getFullYear()}
          </p>
          <h2 className=" text-[.9rem] sm:text-[1.2rem] md:text-[.9rem] lg:text-[1.4rem] pt-4 pb-2">
            {blogCards.title}
          </h2>

          <p className="flex pb-3">{blogCards.blog_story}</p>

          <p className="leading-2">{blogCards.blog_story}</p>
        </section>

        <section className=" col-span-2 mt-16 ">
          <div className="flex w-[100%] ">
            <h3 className="lg:text-[1rem] sm:text-[.8rem] text-[.6rem] md:text-[1rem] border-t-2 border-r-2 w-[20%] lg:w-[15%] border-slate-400 uppercase">
              More blogs
            </h3>
            <span className="w-[80%] border-b-2 lg:w-[85%] border-slate-400"></span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:px-16 pb-10 bg-gray-100">
            {relatedCategory}
          </div>
        </section>
      </div>
    </div>
  );
}
