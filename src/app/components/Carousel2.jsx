"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export function EmblaCarousel2() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide1 min-h-screen">
          <Link href="">
            <section>
              <Image
                src="/frontimage6.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
              <div className="mt-[-8rem] z-50 pb-10">
                <button className="border-2 border-white hover:border-black hover:bg-white text-white hover:text-black  px-4 py-2 ml-4 ">
                  <span className="border-2 px-6 border-[inherit]  text-[inherit]">
                    Men
                  </span>
                </button>
              </div>
            </section>
          </Link>
        </div>

        <div className="embla__slide2">
          <Link href="">
            <section>
              <Image
                src="/frontimg.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
                className=""
              />
              <div className="mt-[-8rem]  pb-10">
                <button className="border-2  border-white  px-4 py-2 ml-4 hover:border-black hover:bg-white text-white hover:text-black">
                  <span className="border-2 px-6 border-[inherit] text-[inherit]">
                    Women
                  </span>
                </button>
              </div>
            </section>
          </Link>
        </div>
      </div>
    </div>
  );
}
