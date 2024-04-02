"use client"
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla h-[fit-content]" ref={emblaRef}>
      <div className="embla__container flex">
        <div className="embla__slide1">
          <Link
            href={`/shop/${"Revigour vintage Skate Jean".split(" ").join("-")}`}
          >
            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text small_carousel">
              <Image
                src="/frontCollage.webp"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
                className="min-h-[100%] min-w-[100%] hidden md:block"
              />

              <Image
                src="/zoomCollage.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
                className="block md:hidden"
              />
            </section>
          </Link>
        </div>
        <div className="embla__slide2">
          <Link
            href={`/shop/${"Sea Green Wash Loose Fit Jean"
              .split(" ")
              .join("-")}`}
          >
            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text small_carousel">
              <Image
                src="/frontCollage2.webp"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
                className="min-h-[100%] min-w-[100%]  hidden md:block"
              />
              <Image
                src="/zoomCollage2.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
                className="block md:hidden"
              />
            </section>
          </Link>
        </div>
        <div className="embla__slide3 ml-12">
          <Link href={`/shop/${"Vintage Loose Jean".split(" ").join("-")}`}>
            <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-yellow-500 via-yellow-200 to-yellow-100 bg-clip-text small_carousel">
              <Image
                src="/frontCollage3.webp"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
                className="min-h-[100%] min-w-[100%] hidden md:block"
              />
              <Image
                src="/zoomCollage3.jpg"
                alt="slide"
                layout="responsive"
                width={500}
                height={400}
                className="block md:hidden"
              />
            </section>
          </Link>
        </div>
      </div>
    </div>
  );
}
