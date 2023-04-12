import React, { useEffect, useRef } from 'react'
import { timeline } from 'motion'
import { motion } from 'framer-motion'

// import '../styles/layout/_loader.scss'

const getSectionHeight = element => {
    const { height } = element.getBoundingClientRect()
    const { childElementCount } = element

    return (height/childElementCount)
}

const Loader = ({ setIsLoading}) => {
    const countRef = useRef(null)
    const countRef2 = useRef(null)


    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 7000)

        return () => clearTimeout(timer)
    })

    useEffect(() => {
        if(countRef.current && countRef2.current) {
            const transformAmount = getSectionHeight(countRef.current)

            const sequence = new Array(3).fill("").flatMap((_, index) => [
                [countRef.current, { y: `-${transformAmount * (index + 1)}px`}],
                [countRef2.current, { y: `-${transformAmount * (index + 1)}px`}, { at: "-1.8" }],
            ])

            timeline(sequence, {
                defaultOptions: { easing: [.77, 0, .175, 1], duration: 1.7}
            })
        }

    }, [])
  return (
    <motion.div 
        className='loader-container'
    >
        <div className="counter-container">
            <ul className="counter-list" ref={countRef}>
                <li>
                    <h3>2</h3>
                </li>
                <li>
                    <h3>4</h3>
                </li>
                <li>
                    <h3>6</h3>
                </li>
                <li>
                    <h3>9</h3>
                </li>
            </ul>
        </div>
        <div className="counter-container">
            <ul className="counter-list" ref={countRef2}>
                <li>
                    <h3>3</h3>
                </li>
                <li>
                    <h3>2</h3>
                </li>
                <li>
                    <h3>5</h3>
                </li>
                <li>
                    <h3>8</h3>
                </li>
            </ul>
        </div>
    </motion.div>
  )
}

export default Loader