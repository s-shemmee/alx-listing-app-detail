'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-0">
      <section className="relative mx-auto my-8 overflow-hidden rounded-[30px] max-w-screen-2xl">
        {/* Background image */}
        <Image
          src="/assets/images/hero-img.png"
          alt="Scenic hero background"
          width={1920}
          height={500}
          className="object-cover w-full h-[500px]"
          priority
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white font-oxygen">
          <h1 className="text-5xl font-bold md:text-6xl">
            Find your favorite
            <br />
            place here!
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
