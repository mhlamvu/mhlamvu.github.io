import Title from '../components/Title'
import Image from '../components/Image'
// import { pageData } from '../utils/test/data'
import { pageData } from '../utils/test/test'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Home() {

  const [rotationPosition, setRotationPosition] = useState(new Array(pageData.length).fill(0))
  const [activeIndex, setActiveIndex] = useState(-1)

  const handleSetRotation = itemIndex => {
    const newRotation = Math.random() * 15 * Math.round((Math.random()) ? 1 : -1)

    const tempState = [...rotationPosition]

    tempState[itemIndex] = newRotation
    setRotationPosition(tempState)
    setActiveIndex(itemIndex)
  }
  return (
    <>
      <motion.div 
        className="main-container" 
        id="main-container"
        initial={{opacity: 0}}
        animate={{opacity:1}}
        exit={{opacity: 0}}
      >
        <div className="title-container">
          {pageData.map(({ title }, index) => (
            <Title 
              title={title}
              index={index}
              setRotation={handleSetRotation}
              setIndex={setActiveIndex}
              key={index}
            />
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ media }, index) => (
            <Image 
              key={index} 
              slug={media[0].url} 
              active={activeIndex === index} 
              rotationPosition={rotationPosition[index]} 
            />
          ))}
        </div>
      </motion.div>
    </>
  )
}
