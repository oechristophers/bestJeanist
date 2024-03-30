"use client";
import React from "react";
import { useState } from "react";
import { CiPaperplane } from "react-icons/ci";

export default function SignUp() {
const [email, setEmail] = useState('');
const handleSubmit = (event) => {
  event.preventDefault();
  setEmail('')
  alert(`The email you entered was: ${email}`);
  
};

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Your Email"
        className="text-black w-60 h-10 pl-5 relative border-2 border-black"
      />

      <button
        type="submit"
        className=" text-black  z-50 text-2xl  h-10 ml-[-40px]  "
      >
        <CiPaperplane />
      </button>
    </form>
  );
}
