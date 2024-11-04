import React from 'react'
import { Button } from './Button';
import LinkProps from '../types/link';


const navLinks: LinkProps[] = [
  { name: "Home", href: "/pages/home" },
  { name: "Login", href: "/pages/login" },
  { name: "Services", href: "/pages/services" },
  { name: "Contact", href: "/pages/contact" },
  { name: "To-Do", href:"/pages/todos"}
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between p-4 bg-blue-600 text-white font-bold">
         My Website
      <div className='flex space-x-4 justify-evenly'>
      {navLinks.map((link) => (
        <Button key={link.href} name={link.name} href={link.href} />
      ))}
      </div>
    </nav>
  );
};
export default Navbar;