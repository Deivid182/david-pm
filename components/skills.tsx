import { skills } from '@/utils';
import SkillItem from './skill-item';
const Skills = () => {
  return (
    <div 
      id='skills'
      className='max-container w-full space-y-6'>
      <div className='flex flex-col gap-2'>
        <h2 className='uppercase text-primary font-semibold text-2xl'>Skills</h2>
        <h1 className='text-3xl font-bold'>What I can do</h1>
      </div>
      <div className='w-full gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {skills.map(({ label, iconUrl }) => (
          <SkillItem key={iconUrl} label={label} iconUrl={iconUrl} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
