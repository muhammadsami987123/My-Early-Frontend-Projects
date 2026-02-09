import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
      <div className='grid md:grid-cols-2 grp-20 items-center'>
        <div>
          <h2 className='text-4xl md:text-5xl'>Technologies I work with </h2>
        <p className='text-white text-900 font-semibold pt-4  ' >
        I specialize in a robust set of tools and technologies to craft dynamic, user-friendly applications and explore innovative fields like AI, Web3, and the Metaverse.My primary programming languages are TypeScript, Python, and JavaScript—each essential to my workflow. In front-end development, I’m skilled with HTML5, CSS3, and Next.js, and I leverage frameworks like React, Bootstrap, and Tailwind CSS to create responsive and visually appealing interfaces.
On the backend, I work with Node.js and Express, utilizing Firebase and RESTful APIs for seamless data management and cloud integration. My AI experience involves OpenAI API and Prompt Engineering to build smart applications, and I use PyAutoGUI for process automation.
For collaboration and version control, Git and GitHub are essential tools, helping me manage projects efficiently. I also rely on npm, Vercel, and Visual Studio Code to streamline development and deployment processes.
I am actively exploring Web3 and Blockchain Basics to stay ahead in decentralized tech. My continuous learning ensures I bring the latest in technology to my projects, contributing innovative solutions and modern functionality to the tech ecosystem.
        </p>
        </div>
<div>
  <div className='flex gap-40 px-20 grid grid-cols-2 text-accent text-3xl  sm:text-4xl'>
    <div className='space-y-2'>
      <h2 data-aos="fade-up">Typescript</h2>
      <h2 data-aos="fade-up">HTML</h2>
      <h2 data-aos="fade-up">CSS</h2>
    </div>
    <div className='space-y-2'>
      <h2 data-aos="fade-up">JavaScript</h2>
      <h2 data-aos="fade-up">Python</h2>
      <h2 data-aos="fade-up">Tailwind</h2>
    </div>
  </div>
</div>
      </div>
        
    </div>
  )
}

export default Skills