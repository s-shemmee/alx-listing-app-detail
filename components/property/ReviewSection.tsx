import React from 'react';
import Image from 'next/image';
import { ReviewProps } from '@/interfaces/index';

interface ReviewSectionProps {
  reviews: ReviewProps[];
}

const ReviewSection: React.FC<ReviewSectionProps> = ({ reviews }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm ${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
    });
  };

  if (!reviews || reviews.length === 0) {
    return (
      <div className="mt-8">
        <h3 className="mb-4 text-2xl font-semibold">Reviews</h3>
        <p className="text-gray-600">No reviews yet. Be the first to review this property!</p>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h3 className="mb-6 text-2xl font-semibold">Reviews ({reviews.length})</h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {reviews.map(review => (
          <div key={review.id} className="pb-6 border-b border-gray-200 last:border-b-0">
            <div className="flex items-start space-x-4">
              <Image
                src={review.avatar}
                alt={review.name}
                className="flex-shrink-0 object-cover w-12 h-12 rounded-full"
                width={48}
                height={48}
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <div className="flex items-center space-x-1">{renderStars(review.rating)}</div>
                </div>
                <p className="mb-2 text-sm text-gray-600">{formatDate(review.date)}</p>
                <p className="leading-relaxed text-gray-700">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {reviews.length > 6 && (
        <div className="mt-6">
          <button className="px-6 py-2 text-gray-700 transition-colors bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
            Show all {reviews.length} reviews
          </button>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
