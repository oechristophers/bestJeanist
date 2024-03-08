"use client"
import React from "react";
import LocationBar from "../components/LocationBar";

// y

export default function about({ children }) {
  return (
    <div >
      <LocationBar currentUrl='/about'  />
      {children}
    </div>
  );
}
