'use client';
import { navLinks } from '@/utils';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import toast from 'react-hot-toast';
import {
  AiOutlineCloseCircle,
  AiFillGithub,
  AiOutlineMail,
} from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({ isOpen, onClose }) => {

  const [copied, setCopied] = useState('');

  const handleCopy = (email: string) => {
    setCopied(email);
    navigator.clipboard.writeText(email);
    toast.success('Email copied');
    setTimeout(() => {
      setCopied('');
    }, 2000);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' onClose={onClose} className={'z-50 relative'}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-20' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-hidden'>
          <div className='absolute inset-0 overflow-hidden'>
            <div className='pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10'>
              <Transition.Child
                as={Fragment}
                enter='transform transition ease-in-out duration-500 sm:duration-700'
                enterFrom='translate-x-full'
                enterTo='translate-x-0'
                leave='transform transition ease-in-out duration-500 sm:duration-700'
                leaveFrom='translate-x-0'
                leaveTo='translate-x-full'
              >
                <Dialog.Panel className='pointer-events-auto w-screen max-sm:max-w-xs max-w-md'>
                  <div className='flex h-full flex-col gap-y-4 overflow-y-scroll bg-white shadow-xl py-6 px-4 sm:px-6'>
                    <div className='flex items-center justify-end'>
                      <button
                        type='button'
                        onClick={onClose}
                        className='rounded-md 
                            bg-white 
                            flex 
                            items-center 
                            justify-center 
                            text-slate-gray 
                            hover:focus:outline-none'
                      >
                        <AiOutlineCloseCircle className='h-6 w-6' size={24} />
                      </button>
                    </div>
                    <div className='flex-1 flex flex-col gap-y-12 px-4 sm:px-6'>
                      <ul className='flex flex-col gap-y-4'>
                        {navLinks.map(({ label, href }) => (
                          <li
                            key={label}
                            className='text-sm uppercase hover:bg-neutral-100 p-2 rounded-md border-neutral-700'
                          >
                            <Link href={href}>{label}</Link>
                          </li>
                        ))}
                      </ul>
                      <div className='space-y-4'>
                        <h1 className='text-xl text-primary font-bold'>
                          Let&apos;s connect
                        </h1>
                        <div className='flex gap-x-8'>
                          <Link
                            href='https://github.com/Deivid182'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <AiFillGithub className='h-6 w-6' size={24} />
                          </Link>
                          <Link
                            href='https://www.linkedin.com/in/david-pmjs'
                            target='_blank'
                            rel='noreferrer'
                          >
                            <FaLinkedinIn className='h-6 w-6' size={24} />
                          </Link>
                          <div
                            onClick={() => handleCopy('davidmendoza182@outlook.com')}
                            className='cursor-pointer'
                          >
                            <AiOutlineMail className={'w-6 h-6'} size={24} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default MenuDrawer;
