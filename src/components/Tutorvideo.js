import React from 'react'

const Tutorvideo = ({link}) => {
  return (
    <div className='h-[60vh] w-full p-4 bg-black flex items-center justify-center'>
        <iframe
    width="1060"
    height="515"
    src={link}
    title="YouTube Video Player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
    </div>
  )
}

export default Tutorvideo
