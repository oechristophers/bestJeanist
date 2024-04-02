"use client";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";

export default function Header() {
  const [isHomePage, setIsHomePage] = useState(
    typeof window !== "undefined" && window.location.pathname === "/"
  );
  const [isTransparent, setIsTransparent] = useState(true); // Initialize as transparent

  const handleLocationChange = () => {
    setIsHomePage(
      typeof window !== "undefined" && window.location.pathname === "/"
    );
  };

  const handleScroll = () => {
    setIsTransparent(getIsTransparent());
  };

  const getIsTransparent = () => {
    const scrollTop =
      typeof window !== "undefined"
        ? window.scrollY || document.documentElement.scrollTop
        : 0;
    return scrollTop === 0 && isHomePage;
  };

  const handleLinkClick = (event) => {
    const link = event.target.closest("a");
    if (link && link.getAttribute("href") !== "/") {
      setIsHomePage(false);
    }else{
      setIsHomePage(true)
    }
  };

  useEffect(() => {
    setIsTransparent(getIsTransparent());

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("popstate", handleLocationChange);
    document.addEventListener("click", handleLinkClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("popstate", handleLocationChange);
      document.removeEventListener("click", handleLinkClick);
    };
  }, [isHomePage]);

  return (
    <div
      className={`max-w-[100%] sticky top-0 z-10 headert ${
        isTransparent
          ? "header_main-page text-white hover:text-black z-50"
          : "bg-white z-50"
      }`}
    >
      <NavBar />
    </div>
  );
}

