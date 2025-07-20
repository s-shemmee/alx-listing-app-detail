'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      {/* Decorative Stripe */}
      <div className="w-full h-6 bg-teal-600" />

      <footer className="px-4 pt-10 pb-6 text-sm text-white bg-zinc-900 md:px-8 lg:px-10">
        <div className="container flex flex-col gap-10 mx-auto lg:flex-row lg:justify-between">
          {/* Logo + Description */}
          <div className="w-full lg:max-w-md">
            <h1 className="mb-4 text-2xl font-bold font-oxygen">alx</h1>
            <p className="text-gray-300">
              ALX is a platform where travelers can discover and book unique, comfortable, and
              affordable lodging options worldwide. From cozy city apartments and tranquil
              countryside retreats to exotic beachside villas, ALX connects you with the perfect
              place to stay for any trip.
            </p>
          </div>

          {/* 3 Columns */}
          <div className="w-full sm:grid sm:grid-cols-3 sm:gap-8 md:gap-12 lg:flex lg:gap-16 lg:justify-end">
            <div>
              <h4 className="mb-2 font-semibold">Explore</h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Apartments in Dubai
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Hotels in New York
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Villa in Spain
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Mansion in Indonesia
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">Company</h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="transition hover:text-white">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Career
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Customers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Brand
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-2 font-semibold">Help</h4>
              <ul className="space-y-1 text-gray-300">
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Cancel booking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="transition hover:text-white">
                    Refunds Process
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="container flex flex-col items-center pt-4 mx-auto mt-10 text-xs text-gray-400 border-t border-gray-700 sm:flex-row sm:justify-between sm:gap-4">
          <p className="text-center sm:text-left">
            Some hotel requires you to cancel more than 24 hours before check-in. Details{' '}
            <Link href="#" className="text-teal-600 hover:underline">
              here
            </Link>
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white">
              Policy service
            </Link>
            <Link href="#" className="hover:text-white">
              Cookies Policy
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
