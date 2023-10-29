'use client'
import React, { useState, useEffect } from 'react';
import {motion} from 'framer-motion' 
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
  
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);


    return () => clearInterval(interval);
  }, []);

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
    className='flex flex-col items-center justify-center'>
      <h1 className='font-semibold'>Current Time</h1>
      <p>{time.toLocaleTimeString()}</p>
    </motion.div>
  );
}

export default Clock;