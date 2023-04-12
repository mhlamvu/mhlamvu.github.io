import { useState } from 'react'
import Header from '../components/Header'
import '../styles/globals.scss'
import { motion } from 'framer-motion'

import Loader from '../components/Loader'

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true)

  return (
      <>
      {isLoading ? (
        <motion.div key="loader">
          <Loader setIsLoading={setIsLoading} />
        </motion.div>
      ) : (
          <>
            <Header />
            <Component {...pageProps} />
          </>
      )}
      </>
  )
}

export default MyApp
