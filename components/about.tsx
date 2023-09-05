import Image from 'next/image';

const About = () => {
  return (
    <div 
      id='about'
      className='max-container w-full flex justify-between max-md:flex-col gap-10'>
      <div className='flex flex-1 flex-col gap-y-6'>
        <h2 className='uppercase text-primary font-semibold text-2xl'>About</h2>
        <h1 className='text-3xl font-bold'>Who I am</h1>
        <p className='lg:max-w-lg info-text'>
          I specialize in building mobile responsive front-end UI applications
          that connect with API&apos;s and other backend technologies. I&apos;m passionate
          about learning new technologies and understand there is more than one
          way to accomplish a task. Though I am most proficient in building
          front-end applications using HTML, CSS, Javascript, and React, I am a
          quick learner and can pick up new tech stacks as needed. I believe
          that being a great developer is not using one specific language, but
          choosing the best tool for the job.
        </p>
        <p className='lg:max-w-lg info-text'>
          I started in web development in 2022 by learning HTML, CSS and JS vanilla and nowdays
          I&apos;m focused on improving my skills with Typescript, NextJS and CMS
        </p>
      </div>
      <div className='flex-1 flex items-center justify-center '>
        <div className='w-full h-auto shadow-xl shadow-gray-400 flex items-center py-2 rounded-lg justify-center hover:scale-105 ease-in duration-500'>
          <Image 
            src={'/about.jpg'}
            width={470}
            height={470}
            className='object-contain rounded-lg'
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
