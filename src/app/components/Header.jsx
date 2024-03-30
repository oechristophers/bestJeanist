"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

export default function Header() {
  const [isHomePage, setIsHomePage] = useState(
    typeof window !== "undefined" && window.location.pathname === "/"
  );
  const [isTransparent, setIsTransparent] = useState(isHomePage);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsHomePage(
        typeof window !== "undefined" && window.location.pathname === "/"
      );
    };

    const handleScroll = () => {
      const scrollTop =
        typeof window !== "undefined" &&
        (window.scrollY || document.documentElement.scrollTop);
      setIsTransparent(scrollTop === 0 && isHomePage);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("popstate", handleLocationChange);
      document.body.addEventListener("click", handleLinkClick);

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("popstate", handleLocationChange);
        document.body.removeEventListener("click", handleLinkClick);
      };
    }
  }, [isHomePage]);

  const handleLinkClick = (event) => {
    if (event.target.tagName === "A") {
      const href = event.target.getAttribute("href");
      if (href && href.startsWith("/") && !href.startsWith("//")) {
        setIsHomePage(href === "/");
      }
    }
  };

  return (
    <div
      className={` max-w-[100%] sticky top-0 z-10 headert ${
        isHomePage && isTransparent
          ? "header_main-page  text-white hover:text-black"
          : "bg-white"
      }`}
    >
      <NavBar />
    </div>
  );
}
