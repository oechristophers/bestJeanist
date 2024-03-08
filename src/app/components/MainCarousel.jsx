"use client"
import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

export function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide1">
          <section className="relative max-h-[fit-content] ">
            <Image
              src="/jean4.jpg"
             layout="responsive"
             width={200}
             height={200}
             objectPosition="top"
              className="responsive-image"
            />
          </section>
        </div>
        <div className="embla__slide2 mx-auto">
          <h3 className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text ">
            Hope You're good
          </h3>
        </div>
        <div className="embla__slide3 bg-blue-950 mx-6">
          <h3 className="font-bold text-5xl text-transparent bg-gradient-to-b from-yellow-500 via-yellow-200 to-yellow-100 bg-clip-text ">
            Welcome to our page
          </h3>
        </div>
      </div>
    </div>
  );
}
