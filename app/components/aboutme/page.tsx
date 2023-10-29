'use client'
import React from 'react'
import { InstagramLogo, GithubLogo} from '@phosphor-icons/react'
import Link from 'next/link'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{
      duration: 2.5,
      ease: "easeInOut",
      delay: 1
    }}
     className='flex gap-6 rounded-xl px-6 shadow-xl absolute bottom-2' >
      <div className='flex items-center' >
        <InstagramLogo size={20} />
        <Link href={"https://instagram.com/denisetiya_"} className='text-sm'>@denisetiya_</Link>
      </div>

      <div className='flex' >
        <GithubLogo size={20} />
        <Link href={"https://github.com/denisetiya"} className='text-sm'>denisetiya</Link>
      </div>
    </motion.div>
  )
}

export default About