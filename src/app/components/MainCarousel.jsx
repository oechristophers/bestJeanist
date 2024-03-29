"use client"
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla max-h-[107vh]" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide1">
          <Link
            href={`/shop/${"Revigour vintage Skate Jean".split(" ").join("-")}`}
          >
            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
              <Image
                src="/frontCollage.webp"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
              />
            </section>
          </Link>
        </div>
        <div className="embla__slide2">
          <Link
            href={`/shop/${"Sea Green Wash Loose Fit Jean".split(" ").join("-")}`}
          >
          <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
            <Image
              src="/frontCollage2.webp"
              alt="slide"
              layout="responsive"
              width={500}
              height={400}
            />
          </section>
          </Link>
        </div>
        <div className="embla__slide3 bg-blue-950 ml-12">
          <Link
            href={`/shop/${"Vintage Loose Jean".split(" ").join("-")}`}
          >
          <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-yellow-500 via-yellow-200 to-yellow-100 bg-clip-text ">
            <Image
              src="/frontCollage3.webp"
              alt="slide"
              layout="responsive"
              width={500}
              height={400}
            />
          </section>
          </Link>
        </div>
      </div>
    </div>
  );
}
