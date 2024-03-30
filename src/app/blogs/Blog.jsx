"use client";
import { useState } from "react";
import React from "react";
import { blogPosts } from "./page";
import Link from "next/link";
import Image from "next/image";

export default function Blog() {
  const [sort, setSort] = useState("");

  function searchProd(e) {
    setSort(e.target.value);
  }

  //hook must be immediately after the function
  const [open, setOpen] = useState(true);

  const [open2, setOpen2] = useState(true);

  function controlNav() {
    setOpen(!open);
  }

  function controlNav2() {
    setOpen2(!open2);
  }

  const filteredLists = blogPosts.filter(
    (data) =>
      data.title.toLowerCase().includes(sort.toLowerCase()) ||
      data.blogger_name.toLowerCase().includes(sort.toLowerCase())
  );

  const blogCard = filteredLists.map((blog) => (
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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:pt-0 ">
      {blogCard}
    </div>
  );
}
