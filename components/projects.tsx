import ProjectItem from './project-item'
import { projects } from '@/utils'

const Projects = () => {
  return (
    <div 
      id='projects'
      className='max-container w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'>
        {projects.map((project) => (
          <ProjectItem key={project.image} project={project} />
        ))}
      </div>
    </div>
  )
}

export default Projects