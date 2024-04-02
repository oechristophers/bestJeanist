"use client"
import React from "react";
import LocationBar from "../components/LocationBar";

// y

export default function about({ children }) {
  return (
    <div>
      <div className="text-[.7rem] md:text-[.8rem] uppercase">
        <LocationBar currentUrl="/about" />
      </div>

      {children}
    </div>
  );
}
