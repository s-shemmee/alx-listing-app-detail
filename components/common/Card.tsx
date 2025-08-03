'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, ShowerHead, Users } from 'lucide-react';
import { PropertyProps } from '@/interfaces/index';

interface CardProps {
  property: PropertyProps;
}

const Card: React.FC<CardProps> = ({ property }) => {
  const { name, address, rating, category, price, offers, image, discount } = property;

  // Create URL-safe slug from property name
  const propertySlug = name.toLowerCase().replace(/\s+/g, '-');

  return (
    <Link href={`/property/${propertySlug}`} className="block">
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer">
        {/* Image Section */}
        <div className="relative">
          <Image
            src={image}
            alt={name}
            className="object-cover w-full h-48 rounded-t-lg"
            width={400}
            height={300}
            priority
          />
          {discount && (
            <span className="absolute px-2 py-1 text-xs font-bold text-white bg-teal-500 rounded-full top-2 left-2">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Content Section */}
        <div className="relative p-4">
          {/* Categories  */}
          <div className="flex flex-wrap gap-1 mb-2">
            {category.map((cat, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full font-oxygen"
              >
                {cat}
              </span>
            ))}
          </div>
          {/* Name of the place */}
          <h3 className="pr-20 text-base font-semibold leading-tight text-gray-800 font-quicksand">
            {name}
          </h3>
          {/* Location */}
          <p className="pr-20 mt-1 text-xs text-gray-600 font-oxygen">
            {address.city}, {address.country}
          </p>
          {/* Pill for Bed, Shower, Occupants with icons */}
          <div className="flex items-center px-3 py-1 mt-3 space-x-3 bg-gray-100 rounded-full w-fit">
            <div className="flex items-center text-xs text-gray-600 font-oxygen">
              <Bed className="w-3 h-3 mr-1" />
              {offers.bed}
            </div>
            <div className="flex items-center text-xs text-gray-600 font-oxygen">
              <ShowerHead className="w-3 h-3 mr-1" />
              {offers.shower}
            </div>
            <div className="flex items-center text-xs text-gray-600 font-oxygen">
              <Users className="w-3 h-3 mr-1" />
              {offers.occupants}
            </div>
          </div>
          {/* Rating and Price */}
          <div className="absolute flex flex-col items-end top-4 right-4">
            <span className="text-sm text-amber-500 font-oxygen">★ {rating.toFixed(1)}</span>
            <p className="mt-1 text-lg font-bold leading-tight text-gray-900 font-quicksand">
              ${price}
            </p>
            <p className="text-xs text-gray-500 font-oxygen">/night</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
