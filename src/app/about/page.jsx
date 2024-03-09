import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="px-10 md:px-10 flex flex-col justify-center py-20 bg-gray-50">
      <section className="">
        <h2 className="flex justify-start text-2xl mt-6">Made Different </h2>

        <p className="pt-4">
          Defined by the process of creating product that tells stories with the
          people who inspire us and lifestyles we relate to.
        </p>

        <p className=" justify-start  pt-8 leading-9 ">
          <strong>Made</strong> - At best Jeanist, our story is woven into the
          very fabric of denim itself. With a passion for quality craftsmanship
          and timeless style, we&apos;ve embarked on a journey to redefine what
          denim means to you.
        </p>

        <p className=" pt-8 leading-9">
          <strong>Different</strong> - It all began in the heart of Lasgidi,
          where generations of artisans have honed their skills in denim
          craftsmanship. Inspired by this rich heritage, we set out to create
          denim pieces that marry traditional techniques with modern innovation.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-10">
          <section className="relative bg-green-400 col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
            <Image
              src="/lagos.jpg"
              alt="Lagos"
              title="lagos"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className=""
            />
          </section>

          <section className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
            <Image
              src="/lagoscontainer.jpg"
              alt="Lagos"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </section>

          <section className="relative col-span-2 h-[50vh] md:h-[85vh]">
            <Image
              src="/lagosSunset.jpg"
              alt="Lagos"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              className=""
            />
          </section>
        </div>
      </section>

      <section>
        <h2 className="flex  text-2xl mt-6">The Team</h2>
        <p className="flex  pt-8 leading-9">
          Behind every stitch is a dedicated team of individuals who share our
          passion for denim. From our designers who bring innovative ideas to
          life, to our skilled artisans who craft each piece with care, and our
          customer service team who ensure your experience is nothing short of
          exceptional – we are united by a common love for denim and a
          commitment to excellence.
        </p>
        <section className="relative">
          <Image
            src="/community.webp"
            alt="Lagos"
            layout="responsive"
            width={400}
            height={400}
            objectFit="cover"
            className=""
          />
        </section>

        <h2 className="flex justify-start text-2xl mt-6">Our Factory</h2>
        <p className="flex pt-8 leading-9">
          We’ve considered each step in production to underpin the level of
          quality that bestJeanist is now known for. Whilst it may not be
          possible for our factory in England to make every pair by hand, it’s
          our attitude towards responsible manufacturing that allows us to work
          closely with trusted Portuguese factories and Italian tanneries. Each
          sample will undergo multiple stages of refinement before being
          considered for release. For this reason, a single style can take years
          to perfect.
          <br />
          <br />
          But, that’s just bestJeanist.
        </p>

        <div className="grid grid-cols-2 gap-3 mt-10">
          <section className="col-span-2 relative h-[50vh] md:h-[85vh]">
            <Image
              src="/jeansfactory.webp"
              alt="Factory"
              title="Factory"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              className=""
            />
          </section>
          <section className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
            <Image
              src="/factory2.jpg"
              alt="Process"
              title="Process"
              layout="fill"
              objectFit="cover"
              objectPosition="bottom"
              className="col-span-1"
            />
          </section>

          <section className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
            <Image
              src="/factory.jpg"
              alt="Industry Standard"
              title="Industry Standard"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </section>
        </div>
      </section>

      <section>
        <h2 className="flex justify-start text-2xl mt-6">Celebrites</h2>
        <p className="flex pt-8 leading-9">
          Dressing those at the top of their game has always been a part of our
          DNA, it&apos;s important for best Jeanist to be seen alongside the
          names and personalities that we admire and have a huge amount of
          respect for.
        </p>

        <div className="grid grid-cols-3 gap-3 mt-10">
          <section className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
            <Image
              src="/rema.jpg"
              alt="Rema"
              title="Rema"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </section>
          <section className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
            <Image
              src="/asake2.jpg"
              alt="Asake"
              title="Asake"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </section>
          <section className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
            <Image
              src="/tems.jpeg"
              alt="Tems"
              title="Tems"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </section>

          <section className="relative col-span-3 grid grid-cols-2 gap-3">
            <div className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
              <Image
                src="/blaqbonz.jpeg"
                alt="Blaqbonz"
                title="Blaqbonz"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
            <div className="relative col-span-1 h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[33rem]">
              <Image
                src="/ayra2.jpg"
                alt="Arya Star"
                title="Arya Star"
                layout="fill"
                objectFit="cover"
                className=""
              />
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
