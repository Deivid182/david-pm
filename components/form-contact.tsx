import React from 'react';
import Button from './ui/button';

const FormContact = () => {
  return (
    <form
      action='https://getform.io/f/08ebcd37-f5b5-45be-8c13-714f011ce060'
      method='POST'
      encType='multipart/form-data'
    >
      <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Name</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='name'
          />
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-sm py-2'>Phone Number</label>
          <input
            className='border-2 rounded-lg p-3 flex border-gray-300'
            type='text'
            name='phone'
          />
        </div>
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Email</label>
        <input
          className='border-2 rounded-lg p-3 flex border-gray-300'
          type='email'
          name='email'
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Subject</label>
        <input
          className='border-2 rounded-lg p-3 flex border-gray-300'
          type='text'
          name='subject'
        />
      </div>
      <div className='flex flex-col py-2'>
        <label className='uppercase text-sm py-2'>Message</label>
        <textarea
          className='border-2 rounded-lg p-3 border-gray-300'
          rows={10}
          name='message'
        ></textarea>
      </div>
      <Button 
        label='Send Message'
        fullWidth
        type='submit'
      />
    </form>
  );
};

export default FormContact;
