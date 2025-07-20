'use client';

import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-0">
      <section className="relative mx-auto my-8 overflow-hidden rounded-[30px] max-w-screen-2xl min-h-[300px] md:min-h-[400px] lg:h-[500px]">
        <Image
          src="/assets/images/hero-img.png"
          width={1920}
          height={1080}
          alt="Scenic hero background"
          className="absolute inset-0 object-cover w-full h-full"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white font-oxygen">
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Find your favorite
            <br />
            place here!
          </h1>
          <p className="mt-2 text-base sm:mt-4 sm:text-lg md:text-xl">
            The best prices for over 2 million properties worldwide
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
