import React from 'react';
import Image from 'next/image';
import AvatarCardProps from '../types/avatar';


const AvatarCard: React.FC<AvatarCardProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="max-w-sm h-500 rounded overflow-hidden shadow-lg bg-white border-gray-400 border-2 ">
      <div className="w-40 h-40 rounded-full mx-auto mt-4 overflow-hidden">
        <Image 
          src={imageUrl} 
          alt={`${name}'s avatar`} 
          width={400} 
          height={400} 
          className="object-cover" 
        />
      </div>
      <div className="bg-gray-400 px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">{name}</div>
        {description && <p className="text-gray-900 text-base text-center">{description}</p>}
      </div>
    </div>
  );
};

export default AvatarCard;
