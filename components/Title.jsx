import React from 'react'
import { useRouter } from 'next/router'

export default function Title({ title, index, setRotation, setIndex }) {

  const router = useRouter()

  const handleRouteChange = newRoute => {
    router.push(`/${newRoute}`)
  }
  return (
    <div 
        className='title-item'
        onMouseEnter={() => setRotation(index)}
        onMouseLeave={() => setIndex(-1)}
    >
        <p onClick={() => handleRouteChange(title)}>{title}</p>
    </div>
  )
}
