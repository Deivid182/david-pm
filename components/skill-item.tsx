import Image from 'next/image';
import React from 'react';

interface SkillItemProps {
  label: string;
  iconUrl: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ label, iconUrl }) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={iconUrl} width={64} height={64} alt={label} />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{label}</h3>
        </div>
      </div>
    </div>
  );
};

export default SkillItem;
