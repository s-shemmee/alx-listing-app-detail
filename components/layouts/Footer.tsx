'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <div className="w-full h-6 bg-teal-600" />
      <footer className="px-4 pt-10 pb-6 text-sm text-white bg-zinc-900 md:px-8 lg:px-10">
        {/* Main content */}
        <div className="container flex flex-col justify-between gap-10 mx-auto md:flex-row">
          {/* Left Section */}
          <div className="max-w-md">
            <h1 className="mb-4 text-2xl font-bold font-oxygen">alx</h1>
            <p className="text-gray-300">
              ALX is a platform where travelers can discover and book unique, comfortable, and
              affordable lodging options worldwide. From cozy city apartments and tranquil
              countryside retreats to exotic beachside villas, ALX connects you with the perfect
              place to stay for any trip.
            </p>
          </div>

          <div className="flex flex-wrap justify-between gap-8 md:gap-16 md:flex-nowrap">
            {/* Explore Column */}
            <div className="w-1/2 sm:w-auto">
              <h4 className="mb-2 font-semibold">Explore</h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Apartments in Dubai
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Hotels in New York
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Villa in Spain
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Mansion in Indonesia
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="w-1/2 sm:w-auto">
              <h4 className="mb-2 font-semibold">Company</h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Brand
                  </Link>
                </li>
              </ul>
            </div>

            {/* Help Column  */}
            <div className="w-1/2 sm:w-auto">
              <h4 className="mb-2 font-semibold">Help</h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Cancel booking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition-colors hover:text-white">
                    Refunds Process
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="container flex flex-col items-center justify-between pt-4 mx-auto mt-10 text-xs text-gray-400 border-t border-gray-700 md:flex-row">
          <p className="mb-4 text-center md:mb-0 md:text-left">
            Some hotel requires you to cancel more than 24 hours before check-in. Details{' '}
            <Link
              href="#"
              className="text-teal-600 transition-colors cursor-pointer hover:underline"
            >
              here
            </Link>
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4 md:justify-end md:mt-0">
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Policy service
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Cookies Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Partners
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
