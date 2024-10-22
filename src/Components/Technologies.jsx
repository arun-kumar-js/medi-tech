import React, { useEffect, useState } from 'react';
import { RiReactjsLine } from 'react-icons/ri';
import { SiMongodb, SiExpress, SiNodedotjs, SiTailwindcss, SiBootstrap, SiGithub, SiNetlify, SiVercel, SiVisualstudiocode } from 'react-icons/si';
import './Technologies.css';

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('tech-section');
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='pb-24' id="tech-section">
      <h2 className='my-20 text-center text-4xl'>Technologies</h2>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {[
          { icon: <SiMongodb className='text-7xl text-green-500' />, title: "MongoDB" },
          { icon: <SiExpress className='text-7xl text-white' />, title: "Express" },
          { icon: <RiReactjsLine className='text-7xl text-cyan-400' />, title: "React" },
          { icon: <SiNodedotjs className='text-7xl text-green-600' />, title: "Node.js" },
          { icon: <SiTailwindcss className='text-7xl text-sky-400' />, title: "Tailwind CSS" },
          { icon: <SiBootstrap className='text-7xl text-purple-600' />, title: "Bootstrap" },
        ].map((tech, index) => (
          <div
            key={index}
            className={`tech-icon ${isVisible ? 'animate' : ''}`}
          >
            {tech.icon}
            <span className="sr-only">{tech.title}</span>
          </div>
        ))}
      </div>

      {/* Tools Section */}
      <h2 className='my-20 text-center text-4xl'>Tools</h2>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {[
          { icon: <SiGithub className='text-7xl text-white' />, title: "GitHub" },
          { icon: <SiNetlify className='text-7xl text-blue-500' />, title: "Netlify" },
          { icon: <SiVercel className='text-7xl text-gray-200' />, title: "Vercel" },
          { icon: <SiVisualstudiocode className='text-7xl text-blue-600' />, title: "VS Code" },
        ].map((tool, index) => (
          <div
            key={index}
            className={`tool-icon ${isVisible ? 'animate' : ''}`}
          >
            {tool.icon}
            <span className="sr-only">{tool.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
