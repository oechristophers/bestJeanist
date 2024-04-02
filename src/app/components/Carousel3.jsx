"use client";
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export function EmblaCarousel3() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla h-[fit-content] pb-10" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide1">
          <Link href={`/shop/category/shorts`} className=" grid grid-cols-3">
            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
              <Image
                src="/femshorts.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
            </section>

            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
              <Image
                src="/femshorts2.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
            </section>

            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
              <Image
                src="/femshorts3.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
            </section>
            <button className="z-50 mt-[-11rem] sm:mt-[-15rem] md:mt-[-25rem] w-[100vw] text-white text-4xl md:text-6xl lg:text-8xl ">
              Reclaimed Lifestyle Jorts
            </button>
          </Link>
        </div>

        <div className="embla__slide2 ">
          <Link href={`/shop/category/shorts`} className=" grid grid-cols-3">
            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
              <Image
                src="/frontImage16.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
            </section>

            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
              <Image
                src="/frontImage14.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
            </section>

            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
              <Image
                src="/frontImage18.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
            </section>
            <button className="z-50 mt-[-11rem] sm:mt-[-15rem] md:mt-[-25rem] w-[100vw] text-white text-4xl md:text-6xl lg:text-8xl ">
              Reclaimed Lifestyle Jorts
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
