import About from '@/components/about';
import Contact from '@/components/contact';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
const Home = () => {
  return (
    <>
      <div className='padding'>
        <Hero />
      </div>
      <div className='padding'>
        <About />
      </div>
      <div className='padding-x'>
        <Skills />
      </div>
      <div className='padding'>
        <Projects />
      </div>
      <div className='padding'>
        <Contact />
      </div>
    </>
  );
};

export default Home;
