import React from 'react'
import cn from 'classnames'

export default function Image({ slug, active, rotationPosition }) {
  return (
    <img
        className={cn({ active })}
        src={slug}
        style={{
            transform: active ? `scale(1.1) rotate(${rotationPosition}deg)` : `rotate(${rotationPosition}deg)`
        }}
    />
  )
}
