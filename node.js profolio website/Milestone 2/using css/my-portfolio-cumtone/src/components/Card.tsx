import React from 'react'
import Image from 'next/image'
import"../app/styles/card.css"

interface propsType {
    title: string;
    description: string;
    img: string;
    tags: string[];
}

const Card:React.FC<propsType> = ({title, description, img, tags}) => {
  return (
    <div className={"card ${window.innerwidth >= 640 ? 'card-sm' "} data-aos="fade-up">
        <div >
            <Image className ={"card ${window.innerwidth >= 640 ? 'card-image-sm' : " } 
            src={img}
            width={350}
            height={300}
            alt='{title}'
            />

        </div>
        <div className='card-contant'>
            <div className='card-tittle'>{title}</div>
            <div >{description}</div>
            <div>
                {tags.map((el) => (
                    <div className='card-tags' key={el}>
                        {el}
                    </div>
                    ))}
            </div>
        </div>
    </div>
  )
}

export default Card