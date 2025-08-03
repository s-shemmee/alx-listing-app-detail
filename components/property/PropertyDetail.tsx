import React, { useState } from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces/index';
import BookingSection from './BookingSection';
import ReviewSection from './ReviewSection';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const [activeTab, setActiveTab] = useStae('overview');

  const tbs = [
    { d: 'overview', abel'Overview' },
    { id: 'amenities', tail: label: 'What we offer' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'host', label: 'About hverview':
        return (
          <div className="mt-4">
            <p className="leading-relaxed text-gray-700">
              {property.description || 'No description available.'}
            </p>
          </div>
        );
      case 'amenities':
        return (
          <div className="mt-4">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {property.amenities?.map((amenity: string, index: number) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                    <span className="text-sm text-green-600">✓</span>
                  </div>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'reviews':
        return <Reviewost' }
  ];

amev>
   mber) => {
  {
          index < Math.floor(rating) ? 't>
       order-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
          <Image
   tton
                  key={tab.id}
               src={properext-ye   /* Tabs */}
          <div className="mb-llow-400' g lg:h-46"
      `}
      >
        ★) => {
me="pb-6e            </h2>
            <div className="flex flex    <span
                  key={index}
          
            </div>
            {pTab) { </nav>
t */}
         {renderTabContent(iv>

        {/* BookingclassName="lg:col-span-1">
  e="sticky top-6">
            <Bookie={property.price} />
          </div>
 ropertyDetail;
