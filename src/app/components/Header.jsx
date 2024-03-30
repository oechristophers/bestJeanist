"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

export default function Header() {
  const [isHomePage, setIsHomePage] = useState(
    window.location.pathname === "/"
  );
  const [isTransparent, setIsTransparent] = useState(isHomePage);

  useEffect(() => {
    const handleLocationChange = () => {
      setIsHomePage(window.location.pathname === "/" );
    };

    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setIsTransparent(scrollTop === 0 && isHomePage);
    };

    window.addEventListener("scroll", handleScroll);

    // Subscribe to changes in location (back/forward clicks)
    window.addEventListener("popstate", handleLocationChange);

    // Subscribe to link clicks
    document.body.addEventListener("click", handleLinkClick);

    // Unsubscribe when component unmounts
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      document.body.removeEventListener("click", handleLinkClick);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (event) => {
    // Check if the clicked element is a link
    if (event.target.tagName === "A") {
      // Check if it's an internal link
      const href = event.target.getAttribute("href");
      if (href && href.startsWith("/") && !href.startsWith("//")) {
        setIsHomePage(href === "/");
      }
    }
  };

  return (
    <div
      className={` max-w-[100%] sticky top-0 z-10 headert ${
        isHomePage && isTransparent  ? "header_main-page  text-white hover:text-black" : "bg-white"
      }`}
    >
      <NavBar />
    </div>
  );
}
