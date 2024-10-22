import React from 'react';

export const EDUCATION = [
    {
        degree: "Master of Science (M.Sc.) in Computer Science",
        institution: "Joseph's Arts and Science College, Thirunavallur",
        year: "2022 - 2024",
        description: "Focused on advanced topics in computer science, including software development and database management. Completed full-stack development using the MERN stack @GUVI",
        grade: "First Class"
    },
    {
        degree: "Bachelor of Science (B.Sc.) in Computer Science",
        institution: "Theivanai Ammal College for Women, Villupuram",
        year: "2019 - 2022",
        description: "Studied core computer science subjects including programming, operating systems, and web development. Developed a final year project on e-commerce systems.",
        grade: "Distinction"
    },
    {
        degree: "Higher Secondary Education (12th - Bio-Maths)",
        institution: "St. Mary's Matriculation Higher Secondary School, Vikravandi",
        year: "2018 - 2019",
        description: "Specialized in Biology and Mathematics, scoring 70% overall.",
        grade: "70%"
    },
    {
        degree: "Secondary School Certificate (10th)",
        institution: "St. Mary's Matriculation Higher Secondary School, Vikravandi",
        year: "2016 - 2017",
        description: "Completed high school with a strong focus on science and mathematics, scoring 91% overall.",
        grade: "91%"
    }
];

const Education = () => {
    return (
        <div className='pb-4'>
            <h2 className='my-20 text-center text-4xl'>Education</h2>
            <div>
                {EDUCATION.map((item, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <div className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-stone-400'>{item.year}</p>
                        </div>
                        <div className='w-full max-w-xl lg:w-1/4'>
                            <h3 className='mb-2 font-semibold'>
                                {item.degree}
                                <span className='text-sm text-stone-500'> - {item.institution}</span>
                            </h3>
                            <p className='mb-4 text-stone-400'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Education;
