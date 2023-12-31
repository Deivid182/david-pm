"use client"
import { AiOutlineMail, AiOutlineGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Hero = () => {
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
    <div
      id='hero'
      className='mt-16 w-full max-container flex flex-col min-h-screen gap-y-8'
    >
      <p className='text-center max-sm:text-xl text-2xl font-semibold'>
        Let&apos;s build something amazing
      </p>

      <div className='text-center space-y-6 max-md:text-4xl text-8xl font-black text-gray-700'>
        <h1>
          Hi, I&apos;m <span className='text-primary'>David</span>
        </h1>
        <h1>A front-end web developer</h1>
      </div>
      <p className='text-center text-gray-500 font-medium sm:max-w-md mx-auto sm:text-2xl'>
        I&apos;m focused on building responsive front-end web applications
        integrating back-end technologies.
      </p>
      <div className='flex items-center justify-center max-sm:gap-x-6 gap-x-12'>
        <Link
          href='https://github.com/Deivid182'
          target='_blank'
          className='flex items-center justify-center max-sm:w-12 max-sm:h-12 w-16 h-16'
        >
          <AiOutlineGithub className={'max-sm:w-8 max-sm:h-8 w-12 h-12'} />
        </Link>
        <Link
          href='https://linkedin.com/in/david-pmjs'
          target='_blank'

          className='flex items-center justify-center max-sm:w-12 max-sm:h-12 w-16 h-16 cursor-pointer'
        >
          <FaLinkedinIn className={'max-sm:w-8 max-sm:h-8 w-12 h-12'} />
        </Link>
        <div
          onClick={() => handleCopy('davidmendoza182@outlook.com')}
          className='flex items-center justify-center max-sm:w-12 max-sm:h-12 w-16 h-16 cursor-pointer'
        >
          <AiOutlineMail className={'max-sm:w-8 max-sm:h-8 w-12 h-12'} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
