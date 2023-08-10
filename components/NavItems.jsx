import React from 'react'
import Link from 'next/link'

const NavItems = ({links}) => {
  return (
    <ul className="hidden md:flex w-[300px] gap-3 justify-around">
      {links.map((link) => (
        <li key={link.path} className="relative w-[80px] h-[60px]">
          <Link
            rel="preload"
            as={link.path}
            type="font/woff2"
            href={link.path}
            data-text={link.name}
            className="relative flex justify-center items-center flex-col h-full w-full active gap-3"
          >
            <span className="relative flex w-[55px] h-[55px] justify-center items-center bg-Cuarto border-2 border-FX hover:border-FO text-FX leading-[65px] rounded-full text-3xl">
              {link.icons}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
export default NavItems