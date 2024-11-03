import React from 'react';

interface AvatarCardProps {
  name: string;
  imageUrl: string;
  description?: string; 
}

const AvatarCard: React.FC<AvatarCardProps> = ({ name, imageUrl, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img className="w-24 h-24 object-cover rounded-full mx-auto mt-4" src={imageUrl} alt={`${name}'s avatar`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        {description && <p className="text-gray-700 text-base">{description}</p>}
      </div>
    </div>
  );
};

export default AvatarCard;
