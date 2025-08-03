import React from 'react';
import { PropertyProps } from '@/interfaces/index';

interface PropertyDetailProps {
  property: PropertyProps;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{property.name}</h1>
      <p>Rating: {property.rating}</p>
      <p>Price: ${property.price}/night</p>
      <p>Location: {property.address.city}, {property.address.country}</p>
    </div>
  );
};

export default PropertyDetail;
