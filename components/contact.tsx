"use client"
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import FormContact from './form-contact';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Contact = () => {

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
    <>
      <div id='contact' className='grid grid-cols-5 gap-4 max-container w-full'>
        <div className='max-lg:col-span-5 col-span-2 flex flex-col gap-y-4 bg-gray-100 p-4 rounded-md'>
          <div className='aspect-square group w-full relative rounded-xl overflow-hidden'>
            <Image
              src={'/contact.jpg'}
              fill
              priority
              alt='contact'
              className='object-cover w-full h-full group-hover:scale-105 transition-transform duration-200'
            />
          </div>
          <div className='space-y-4'>
            <h1 className='max-sm:text-2xl text-4xl font-bold'>
              David Peralta Mendoza
            </h1>
            <h3 className='max-sm:text-xl text-lg'>Frontend Developer</h3>
            <p>
              I am available for freelance or full-time positions. Contact me
              and let&apos;s talk.
            </p>
          </div>
          <div className='space-y-4 pt-20'>
            <p className='uppercase font-semibold'>Connect with me</p>
            <div className='flex items-center justify-between'>
              <Link
                href='https://github.com/Deivid182'
                target='_blank'
                rel='noreferrer'
              >
                <AiFillGithub className='h-6 w-6' size={24} />
              </Link>
              <Link
                href='https://linkedin.com/in/david-pmjs'
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
        <div className='max-lg:col-span-5 col-span-3 flex flex-col justify-center gap-y-4 p-4 bg-gray-100 rounded-md'>
          <FormContact />
        </div>
      </div>
      <div className='flex justify-center py-12'>
        <Link
          className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'
          href='/'
        >
          <div>
            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
          </div>
        </Link>
      </div>
    </>
  );
};

export default Contact;
