'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

const categories = [
  { name: 'Rooms', icon: '/assets/icons/Rooms.svg' },
  { name: 'Mansion', icon: '/assets/icons/Mansion.svg' },
  { name: 'Countryside', icon: '/assets/icons/Countryside.svg' },
  { name: 'Villa', icon: '/assets/icons/Villa.svg' },
  { name: 'Tropical', icon: '/assets/icons/Tropical.svg' },
  { name: 'New', icon: '/assets/icons/New.svg' },
  { name: 'Amazing pool', icon: '/assets/icons/AmazingPool.svg' },
  { name: 'Beach house', icon: '/assets/icons/BeachHouse.svg' },
  { name: 'Island', icon: '/assets/icons/Island.svg' },
  { name: 'Camping', icon: '/assets/icons/Camping.svg' },
  { name: 'Apartment', icon: '/assets/icons/Apartment.svg' },
  { name: 'House', icon: '/assets/icons/House.svg' },
  { name: 'Lakefront', icon: '/assets/icons/Lakefront.svg' },
  { name: 'Farm house', icon: '/assets/icons/FarmHouse.svg' },
  { name: 'Treehouse', icon: '/assets/icons/Treehouse.svg' },
  { name: 'Cabins', icon: '/assets/icons/Cabin.svg' },
  { name: 'Castles', icon: '/assets/icons/Castle.svg' },
  { name: 'Lakeside', icon: '/assets/icons/Lakeside.svg' },
];

// Single Category item
const CategoryItem = ({
  name,
  Icon,
  active,
  onClick,
}: {
  name: string;
  Icon: React.FC<{ className?: string }>;
  active: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={`flex flex-col items-center cursor-pointer pb-2 relative group
        ${active ? 'text-gray-900 border-b-2 border-teal-600' : 'text-gray-600 hover:text-gray-900'}
        transition-colors duration-200`}
      onClick={onClick}
    >
      <div className="flex items-center justify-center w-6 h-6 mb-1">
        <Icon />
      </div>

      <span className="text-xs font-medium">{name}</span>

      {!active && (
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-300 scale-x-0 group-hover:scale-x-100 transition-transform origin-center duration-200" />
      )}
    </div>
  );
};

const Header = () => {
  const [activeCategory, setActiveCategory] = useState('Villa');

  return (
    <header className="w-full bg-white font-sans">
      {/* top banner */}
      <div className="flex items-center justify-center gap-2 px-4 py-2 text-sm text-white bg-teal-600">
        <div className="flex items-center gap-4 mx-auto">
          <Image src="/assets/icons/Case.svg" width={20} height={20} alt="case icon" />
          <span>Overseas trip? Get the latest information on travel guides</span>
          <button className="px-3 py-1 ml-1 text-sm text-white rounded-full bg-black/80 hover:bg-black">
            More Info
          </button>
        </div>
      </div>

      {/* main header */}
      <div className="flex items-center justify-between px-8 py-4 bg-white md:flex-row md:justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/assets/icons/ALXLogo.svg" width={50} height={30} alt="alx logo" priority />
        </Link>

        {/* Search */}
        <div className="flex items-center justify-between w-full max-w-xl px-3 py-2 transition-shadow bg-white border border-gray-100 rounded-full shadow-sm hover:shadow-md">
          <div className="flex items-center flex-grow text-gray-600 divide-x divide-gray-100">
            <div className="px-4 text-sm font-semibold">
              <p className="text-black">Location</p>
              <p className="text-gray-400">Search destination</p>
            </div>
            <div className="px-4 text-sm font-semibold">
              <p className="text-black">Check in</p>
              <p className="text-gray-400">Add date</p>
            </div>
            <div className="px-4 text-sm font-semibold">
              <p className="text-black">Check out</p>
              <p className="text-gray-400">Add date</p>
            </div>
            <div className="flex items-center justify-between px-4 text-sm font-semibold">
              <div>
                <p className="text-black">People</p>
                <p className="text-gray-400">Add guests</p>
              </div>
            </div>
          </div>
          <button className="flex items-center justify-center w-10 h-10 text-white rounded-full bg-amber-500 hover:bg-amber-600">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Sign In / Sign Up buttons */}
        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-sm text-white rounded-full shadow-md bg-black/80 hover:bg-black">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm text-white bg-teal-600 rounded-full shadow-md hover:bg-teal-700">
            Sign Up
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="py-4 overflow-x-auto border-t border-gray-200 scrollbar-hide">
        <div className="flex items-center justify-center px-4 space-x-8 md:space-x-12 whitespace-nowrap md:px-8 lg:px-10">
          {categories.map(({ name, icon: Icon }) => (
            <CategoryItem
              key={name}
              name={name}
              Icon={() => <Image src={Icon} alt={`${name} icon`} width={24} height={24} />}
              active={activeCategory === name}
              onClick={() => setActiveCategory(name)}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
