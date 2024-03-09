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
          <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text h-[100vh] ">
            <Image 
            src='/frontimg.jpg'
            alt="slide"
            layout="responsive"
            width={500}
            height={400}/>
          </section>
        </div>
        <div className="embla__slide2">
          <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-green-600 via-green-200 to-green-100 bg-clip-text h-[100vh] ">
            <Image 
            src='/frontCollage2.webp'
            alt="slide"
            layout="responsive"
            width={500}
            height={400}/>
          </section>
        </div>
        <div className="embla__slide3 bg-blue-950 ml-12">
          <section className="font-bold text-5xl text-transparent bg-gradient-to-b from-yellow-500 via-yellow-200 to-yellow-100 bg-clip-text h-[100vh] w-[100vw]">
            <Image 
            src='/frontimg.jpg'
            alt="slide"
            layout="responsive"
            width={500}
            height={400}/>
          </section>
        </div>
      </div>
    </div>
  );
}
