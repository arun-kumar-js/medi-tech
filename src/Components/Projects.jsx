import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export const PROJECTS = [
    {
        title: "Airbnb Clone",
        image: "/images/Airbnb-Frontend.PNG",
        description: "A fully functional Airbnb clone with features like user authentication, booking places, and viewing listings.",
        technologies: ["MongoDB", "React", "Node.js", "Express", "Tailwind CSS"],
        url: "https://mern-project-liart.vercel.app/"
    },
    {
        title: "Shopping Cart",
        image: "/images/shopping-cart.webp", 
        description: "An e-commerce website that allows users to browse products, add them to their cart, and make purchases.",
        technologies: ["HTML", "CSS", "React"],
        url: "https://shopping-cart-react-mern.netlify.app/"
    },
    {
        title: "To-Do App",
        image: "/images/todo-app.webp", 
        description: "A simple To-Do application for managing tasks, with features like adding, editing, and deleting tasks.",
        technologies: ["HTML", "CSS", "JavaScript"],
        url: "https://todo-task-mern.netlify.app/"
    },
    {
        title: "GUVI Clone",
        image: "/images/guvi-clone.webp", 
        description: "A clone of the GUVI website that offers online courses, user registration, and profile management.",
        technologies: ["HTML", "CSS", "React"],
        url: "https://guvi-routertask.netlify.app/" 
    },
];

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 }); 
    }, []);

    return (
        <div className='pb-4'>
            <h2 className='my-4 text-center text-4xl'>Projects</h2>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} 
                         className="mb-8 flex flex-wrap lg:justify-center project-container" 
                         data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}> {/* Alternate between fade-right and fade-left */}
                        
                        <div className='w-full lg:w-1/4'>
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                                <img src={project.image}
                                    width={250}
                                    height={250}
                                    alt={project.title}
                                    className='mb-6 rounded project-image' />
                            </a>
                        </div>
                        <div className='w-xl max-w-xl lg:w-3/4'>
                            <h3 className='mb-2 font-semibold text-2xl'>{project.title}</h3>
                            <p className='mb-4 text-stone-400'>{project.description}</p>
                            <div>
                                {project.technologies.map((item, index) => (
                                    <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
