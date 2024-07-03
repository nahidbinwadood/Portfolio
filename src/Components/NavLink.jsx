"use client";
 
import { usePathname } from "next/navigation";
import { Link } from "react-scroll";

const NavLink = ({ href, title }) => {
 const currentPath= usePathname();
 console.log(currentPath);
  return (
    <Link
    to={href}
    spy={true} 
    smooth={true} 
    offset={-140} 
    duration={700}
      className= 'py-2 pl-3 pr-4 text-white sm:text-xl rounded md:p-0 hover:text-[#2EB2D3] transition duration-300'
    >
      {title}
    </Link>

   
  );
};

export default NavLink;
