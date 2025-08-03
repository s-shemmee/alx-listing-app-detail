import React, { useState } from 'react';

interface BookingSectionProps {
  price: number;
}

const BookingSection: React.FC<BookingSectionProps> = ({ price }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const calculateNights = () => {
    if (checkIn && checkOut) {
      const start = new Date(checkIn);
      const end = new Date(checkOut);
      const diffTime = Math.abs(end.getTime() - start.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  };

  const nights = calculateNights();
  const subtotal = price * nights;
  const serviceFee = subtotal * 0.1; // 10% service fee
  const taxes = subtotal * 0.05; // 5% taxes
  const total = subtotal + serviceFee + taxes;

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div>
          <span className="text-2xl font-bold">${price.toLocaleString()}</span>
          <span className="text-gray-600 ml-1">night</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-yellow-400">★</span>
          <span className="font-semibold">4.89</span>
        </div>
      </div>

      <div className="space-y-4">
        {/* Date Selection */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-gray-300 rounded-lg p-3">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
              Check-in
            </label>
            <input
              type="date"
              value={checkIn}
              onChange={e => setCheckIn(e.target.value)}
              className="w-full border-none outline-none text-sm"
              min={new Date().toISOString().split('T')[0]}
            />
          </div>
          <div className="border border-gray-300 rounded-lg p-3">
            <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">
              Check-out
            </label>
            <input
              type="date"
              value={checkOut}
              onChange={e => setCheckOut(e.target.value)}
              className="w-full border-none outline-none text-sm"
              min={checkIn || new Date().toISOString().split('T')[0]}
            />
          </div>
        </div>

        {/* Guests Selection */}
        <div className="border border-gray-300 rounded-lg p-3">
          <label className="block text-xs font-semibold text-gray-600 uppercase mb-1">Guests</label>
          <select
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
            className="w-full border-none outline-none text-sm"
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>
                {num} guest{num > 1 ? 's' : ''}
              </option>
            ))}
          </select>
        </div>

        {/* Reserve Button */}
        <button className="w-full bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-colors">
          Reserve
        </button>

        {/* Pricing Breakdown */}
        {nights > 0 && (
          <div className="space-y-3 pt-4 border-t border-gray-200">
            <div className="flex justify-between text-sm">
              <span className="underline">
                ${price.toLocaleString()} x {nights} night{nights > 1 ? 's' : ''}
              </span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="underline">Service fee</span>
              <span>${serviceFee.toFixed(0)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="underline">Taxes</span>
              <span>${taxes.toFixed(0)}</span>
            </div>
            <div className="flex justify-between font-semibold text-base pt-3 border-t border-gray-200">
              <span>Total</span>
              <span>${total.toFixed(0)}</span>
            </div>
          </div>
        )}

        {nights === 0 && checkIn && checkOut && (
          <p className="text-center text-gray-500 text-sm mt-4">You won&apos;t be charged yet</p>
        )}
      </div>
    </div>
  );
};

export default BookingSection;
