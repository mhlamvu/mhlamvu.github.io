import React from 'react'

export default function AnimatedImage({ url, alt }) {
  return (
    <div className='animated-image'>
        <div className="placeholder" />
        <img className='media-image' src={url} alt={alt} />
    </div>
  )
}
