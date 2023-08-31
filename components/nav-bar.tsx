'use client';
import Link from 'next/link';
import { navLinks } from '@/utils';
import { AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';
import { useState } from 'react';
import MenuDrawer from './menu-drawer';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MenuDrawer 
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <header className='header w-full padding-x py-4 z-50'>
        <nav className='max-container flex justify-between items-center'>
          <Link href={'/'} className='text-4xl font-bold text-sky-800 px-2 sm:px-8 italic'>
            {'<DM />'}
          </Link>
          <ul className='ml-auto flex justify-center items-center gap-x-16 max-lg:hidden'>
            {navLinks.map(({ label, href }) => (
              <li
                key={label}
                className='text-sm uppercase hover:border-b-[1px] border-neutral-700'
              >
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
          <div className='max-lg:flex hidden'>
            <div onClick={() => setIsOpen(true)}>
              <AiOutlineMenu className='cursor-pointer w-10 h-10' />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
