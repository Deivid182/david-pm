"use client";
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {

  const router = useRouter();

  return (
    <div className='px-4 py-6 bg-white rounded-md flex flex-col gap-y-4 '>
      <div
        onClick={() => router.push(`/projects/${project.id}`)}
        className='aspect-square group w-full relative rounded-md overflow-hidden'>
        <Image
          fill
          src={project.image}
          alt='project'
          className='w-full h-full object-cover rounded-md aspect-square hover:scale-105 transition-transform duration-200'
        />
      </div>
      <div className='font-medium text-primary flex items-center gap-x-2 flex-wrap'>
        {project.stack.map((stack) => (
          <span key={stack}>#{stack}</span>
        ))}
      </div>
      <h3 className='text-neutral-800 text-2xl font-normal'>{project.name}</h3>
      <p className='text-secondary font-medium text-base'>
        {project.shortDescription}
      </p>
      <div className='flex flex-row items-center justify-between'>
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
    </div>
  );
};

export default ProjectItem;
