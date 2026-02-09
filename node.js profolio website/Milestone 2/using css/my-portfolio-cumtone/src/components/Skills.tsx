import React from 'react'
import '../app/styles/skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills-container '>
      <div className='skills-grid'>
        <div className='skills-left'>
          <h2 className='skills-heading'>Technologies I work with </h2>
        <p className='skills-text ' >
        I specialize in a robust set of tools and technologies to craft dynamic, user-friendly applications and explore innovative fields like AI, Web3, and the Metaverse.My primary programming languages are TypeScript, Python, and JavaScript—each essential to my workflow. In front-end development, I’m skilled with HTML5, CSS3, and Next.js, and I leverage frameworks like React, Bootstrap, and Tailwind CSS to create responsive and visually appealing interfaces.
On the backend, I work with Node.js and Express, utilizing Firebase and RESTful APIs for seamless data management and cloud integration. My AI experience involves OpenAI API and Prompt Engineering to build smart applications, and I use PyAutoGUI for process automation.
For collaboration and version control, Git and GitHub are essential tools, helping me manage projects efficiently. I also rely on npm, Vercel, and Visual Studio Code to streamline development and deployment processes.
I am actively exploring Web3 and Blockchain Basics to stay ahead in decentralized tech. My continuous learning ensures I bring the latest in technology to my projects, contributing innovative solutions and modern functionality to the tech ecosystem.
        </p>
        </div>
<div className='skills-right'>
  <div className='skills-icons-grid'>
    <div className='skills-space'>
      <h2 data-aos="fade-up">Typescript</h2>
      <h2 data-aos="fade-up">HTML</h2>
      <h2 data-aos="fade-up">CSS</h2>
    </div>
    <div className='skills-space'>
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