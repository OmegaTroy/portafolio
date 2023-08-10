import { Menu, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { IoMenu } from "react-icons/io5/index.js";
import NavItems  from './NavItems'
import Link from "next/link";

export default function NavMenu({ links }) {
  return (
    <Menu as="div" className="relative md:hidden inline-block text-left">
      <div>
        <Menu.Button
          className="inline-flex justify-center rounded-md bg-boton text-white dark:bg-white dark:text-boton shadow-md shadow-zinc-600 px-1 py-1 text-sm font-medium transition-all"
          aria-label="menu"
        >
          <IoMenu className="h-5 w-5" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-[-16rem] z-10 w-40 origin-top-right rounded-md border bg-dark">
          <div className="py-1">
                <ul  className="text-white flex flex-col gap-4">
              {links.map(link=> (
                    <li key={link.name} className="text-center font-medium">
                        <Link href={link.path}>{link.name}</Link>
                    </li>
              ))}
                </ul>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}