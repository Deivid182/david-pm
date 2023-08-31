'use client';
import { useParams } from 'next/navigation';
import { projects } from '@/utils';
import Image from 'next/image';
import Link from 'next/link';
import { RiRadioButtonFill } from 'react-icons/ri';
import { AiOutlineArrowLeft } from 'react-icons/ai';
const ProjectPage = () => {
  const params = useParams();
  const project = projects.find(
    (project) => project.id.toString() === params.projectId
  );

  if (!project) {
    return null;
  }

  return (
    <div className='w-full max-container  pt-[90px]'>
      <div className='h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-20' />
        <Image
          className='z-10'
          src={project.image}
          layout='fill'
          objectFit='cover'
          alt='project'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-20 p-2'>
          <h2 className='py-2 font-bold text-4xl'>{project.name}</h2>
          <h3 className='text-2xl font-semibold lg:max-w-lg flex items-center gap-x-2 flex-wrap '>
            {project.stack.map((stack) => (
              <span key={stack}>#{stack}</span>
            ))}
          </h3>
        </div>
      </div>
      <div className='padding'>
        <div className='grid grid-cols-5 gap-6'>
          <div className='col-span-4 space-y-4'>
            <p className='text-xl font-semibold'>Project</p>
            <h2 className='text-3xl font-semibold text-primary'>Overview</h2>
            <p className='info-text'>{project.longDescription}</p>
            <div className='flex items-center gap-x-16 '>
              <Link
                href={project.demo}
                className='bg-primary text-white px-4 py-2 rounded-md'
              >
                Demo
              </Link>
              <Link
                href={project.code}
                className='bg-transparent border-black border-[1px]  px-4 py-2 rounded-md'
              >
                Code
              </Link>
            </div>
            <div>
              <Link
                href={'/'}
                className='mt-8 flex items-center gap-x-2 hover:underline'
              >
                <AiOutlineArrowLeft />
                Back
              </Link>
            </div>
          </div>
          <div className='col-span-5 lg:col-span-1 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
              <div className='grid grid-cols-3 md:grid-cols-1'>
                {project.stack.map((stackItem) => (
                  <p
                    key={stackItem}
                    className='text-gray-600 py-2 flex items-center'
                  >
                    <RiRadioButtonFill className='pr-1' /> {stackItem}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
