import React from 'react'
import { Button } from './Button';


 interface LinkProps {
  name: string;
  href: string;
}


const navLinks: LinkProps[] = [
  { name: "Home", href: "/pages/home" },
  { name: "Login", href: "/pages/login" },
  { name: "Services", href: "/pages/services" },
  { name: "Contact", href: "/pages/contact" },
];

const Navbar: React.FC = () => {
  return (
    <nav className="flex space-x-4 p-4 justify-evenly bg-blue-600">
      {navLinks.map((link) => (
        <Button key={link.href} name={link.name} href={link.href} />
      ))}
    </nav>
  );
};
export default Navbar;