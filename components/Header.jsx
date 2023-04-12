import React from 'react'
import { useRouter } from 'next/router'

export default function Header() {
  const router = useRouter()
  return (
    <ul className='header'>
        <li onClick={() => router.push('/')}>/ Work</li>
        <li onClick={() => router.push('/about')}>/ About</li>
    </ul>
  )
}
