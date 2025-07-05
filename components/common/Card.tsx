import React from "react";
import Image from "next/image";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, imageSrc, price }) => {
  return (
    <div className="p-4 border rounded-lg shadow">
      <Image
        src={imageSrc}
        width={400}
        height={200}
        alt={title}
        className="object-cover w-full h-40 mb-4 rounded"
      />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">${price}/night</p>
    </div>
  );
};

export default Card;
