'use client'

import { AiFillGithub } from 'react-icons/ai'
import { FaTwitter } from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import { GoHomeFill } from 'react-icons/go'
import NavItems  from './NavItems'
import NavMenu from './NavMenu'

const links = [
  { name: 'Inicio', icons: <GoHomeFill />, path: '/' },
  { name: 'Twitter', icons: <FaTwitter />, path: 'https://twitter.com/MegaTroy777' },
  { name: 'Linkedin', icons: <BsLinkedin />, path: 'https://www.linkedin.com/in/julian-iocco-579a90224/' },
  { name: 'Github', icons: <AiFillGithub />, path: 'https://github.com/OmegaTroy' },
]

const NavBar = () => {
  return (
    <nav className="fixed z-40 w-[60px] h-[60px] md:w-[420px] md:h-[65px] top-2 bg-gradi_dark backdrop-blur flex justify-center items-center rounded-full md:rounded-lg shadow-xl shadow-FO">
      <NavItems links={links}/>
      <NavMenu links={links}/>
    </nav>
  );
}

export default NavBar