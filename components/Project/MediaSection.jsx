import React from 'react'
import AnimatedImage from './AnimatedImage'
import { useRandomNumber } from '../../hooks/useRandomNumber'

export default function MediaSection({ url, index }) {

    const minWidth = index === 0 ? 20 : 30
    const maxWidth = index === 0 ? 20 : 55

    const width = useRandomNumber({ min: minWidth, max: maxWidth })
    const marginLeft = useRandomNumber({ min: 0, max: 50 })
  return (
    <section 
        data-scroll 
        data-scroll-offset={'30%'} 
        className='media-wrapper'
        style={{
            '--image-width': width,
            '--image-margin': marginLeft,
        }}
    >
        <AnimatedImage url={url} alt={url}/>
    </section>
  )
}
