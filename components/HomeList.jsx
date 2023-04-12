import React from 'react'

export default function HomeList({ url, alt, slug }) {
  return (
    <img 
      className='home-list-image' 
      id={slug} 
      src={url} 
      alt={alt} 
    />
  )
}
