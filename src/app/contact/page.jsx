"use client";
import React from "react";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillSkype } from "react-icons/ai";
import { useState } from "react";
import Map from "../components/Map";



export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("");
    setMessage("");
    setName("");
    alert(`Name: ${name} \n Email: ${email} \n Message:${message}`);
  };
  return (
    <div className="pt-10">
      <div className="flex w-[100%] px-10 mt-4 flex-wrap">
        <section className="md:w-[40%] gap-6 flex flex-col w-[100vw]">
          <h2 className="text-2xl">Contact Us</h2>
          <address className="leading-7 w-[25ch]">
            128 Melbourne Australia 2nd Floor, New Town Australia.
            <br />
            <p className="mt-4">+2348160601064</p>
          </address>
          <article className="flex gap-3">
            <span className="text-red-300 pt-2">
              <BsEnvelopeFill />
            </span>
            <p> oechristophers@gmail.com</p>
          </article>
          <div className="flex gap-4 text-2xl footer_small-icon mt-3">
            <span>
              <FaFacebookF />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <IoLogoTwitter />
            </span>
            <span>
              <AiFillSkype />
            </span>
          </div>
        </section>

        <section className="md:w-[60%] gap-6 flex flex-col w-[100vw]">
          <h2 className="text-2xl">Drop Us a Message</h2>
          <form
            onSubmit={handleSubmit}
            className="flex w-[100%] flex-wrap gap-y-4 gap-x-5  text-black"
          >
            <input
              type="name"
              name="name"
              id="name"
              value={name}
              onChange={(n) => setName(n.target.value)}
              placeholder="Your Name"
              className="text-black rounded-md lg:w-[48%] h-10 pl-5 relative w-[100%] border border-black"
            />
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email"
              className="text-black rounded-md lg:w-[48%] h-10 pl-5 relative w-[100%] border border-black"
            />
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="7"
              value={message}
              onChange={(m) => setMessage(m.target.value)}
              placeholder="Your Message"
              className="text-black w-[100%] rounded-md px-3 border border-black pt-2"
            ></textarea>
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-black text-white w-20 h-10 rounded-md  shadow-inner"
            >
              Submit
            </button>
          </form>
        </section>
      </div>
      <section className="px-20 py-20">
        <Map />
      </section>
    </div>
  );
}
