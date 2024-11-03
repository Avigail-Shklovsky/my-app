import React from 'react';

interface LinkProps {
  name: string;
  href: string;
}

export const Button: React.FC<LinkProps> = ({ name, href }) => {
  return (
    <a href={href} className=" hover:text-white">
      {name}
    </a>
  );
};
