import { title } from 'process'
import React from 'react'
import Card from './Card'
import Heading from './Heading'

const date =[
    {
        id: 0,
        title: "World Clock",
        description: "A world clock website that displays real-time date and time across various countries, with an option to add new locations dynamically.",
        img : "/project-1.jpg",
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 1 ,
      title: "Tic-Tac-Toe",
      description: "A simple, interactive Tic-Tac-Toe game on a website, featuring a grid layout for gameplay and a reset button to start a new game.",
     img: "/project-2.jpg",
     tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 2,
      title: "Resume Builder", 
      description: "A sleek Resume Builder form with sections for personal info, education, and profile picture upload",
      img: "/project-3.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      id: 3,
      title: "Simple Webside",
      description: "A simple website this is my first project.",
      img: "/project-4.jpg",
      tags: ["HTML", "CSS", "JavaScript"],
    }
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title=" My Projects"/>
      <div className=' grid gap-11  xl:gap-y md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {date.map ((el) => (<Card
        key={el.id}
        title={el.title}
        description={el.description}
        img={el.img}
        tags={el.tags}
        />))}
      </div>

    </div>
  )
}

export default Projects