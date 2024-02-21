import Input from 'postcss/lib/input';
import React from 'react'
import SignUp from './SignUp';
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { AiFillSkype } from "react-icons/ai";



export default function Footer() {
  return (
    <footer>
      <div className="px-4 lg:flex lg:gap-12 md:justify-center md:pl-20 lg:px-28 py-20 ">
        <article className="flex gap-10 w-[100%]">
          <section className="w-[50%]">
            <h3 className="text-[21px]">
              best<span className="font-bold text-2xl">Jeanist</span>
            </h3>
            <br />
            <p className="w-[25ch]  footer_small">
              © {new Date().getFullYear()} designed and developed by oechristophers. Powered by React.
            </p>
          </section>

          <section className="w-[50%] leading-8 footer_small ">
            No. 651 – London Oxford Street,
            <br />
            819 United Kingdom.
            <br />
            oechristophers@gmail.com
            <br />
            +2348160601064
          </section>
        </article>

        <article className="flex gap-10 w-[100%] mt-16 lg:mt-1 footer_small  footer_small_pad">
          <section className=" w-[50%] ">
            GET 32% OFF
            <br />
            <br />
            By subscribe to our newsletter
            <br />
            <br />
            <SignUp/>
          </section>

          <section className="w-[50%]">
            FOLLOW US ON
            <br />
            <br />
            <div className="flex gap-4 text-2xl footer_small-icon">
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
        </article>
      </div>
    </footer>
  );
}
