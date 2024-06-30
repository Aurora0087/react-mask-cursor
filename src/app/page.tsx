"use client"

import { useEffect, useState } from 'react';
import { throttle } from 'lodash'
import { motion } from 'framer-motion';

export default function Home() {

  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIshovered] = useState(false)
  const size = isHovered ? 400 : 10

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {

      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    }, 100)


    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const stl = {

  }

  return (
    <main className=" relative h-screen w-screen cursor-none">
      <motion.div
        className=' w-full h-full flex justify-center items-center text-xl mask'
        animate={{
          WebkitMaskPosition: `${position.x - (size / 2)}px ${position.y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}

        transition={{
          type: "tween", ease: "backOut", duration: 0.5,
        }}
      >
        <p className=' p-24 font-semibold text-3xl' onMouseEnter={() => { setIshovered(true) }} onMouseLeave={() => { setIshovered(false) }}>
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
        <p className=' p-24 font-semibold text-3xl' onMouseEnter={() => { setIshovered(true) }} onMouseLeave={() => { setIshovered(false) }}>
          A visual designer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div
        className=' w-full h-full flex justify-center items-center text-xl'
      >
        <p className=' p-24 font-semibold text-3xl'>
          I'm a <span className=' text-blue-400'>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
        <p className=' p-24 font-semibold text-3xl'>
          I'm a <span className=' text-blue-400'>selectively skilled</span> product designer with strong focus on producing high quality & impactful digital experience.
        </p>
      </div>
    </main>
  );
}
