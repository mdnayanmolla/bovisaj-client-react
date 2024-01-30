import { motion, useScroll, useTransform } from 'framer-motion'

import exploreImg from '../../../assets/expolre.png'
import goldenImg from '../../../assets/parallaxGolden.png'
import greenImg from '../../../assets/parallaxGreen.png'
import { useRef } from 'react';


const BookConsaltation = () => {
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })
 const yBg1 = useTransform(scrollYProgress, [0,1],["0%","1000%"])
 const yBg2 = useTransform(scrollYProgress, [0,1],["0%","-3000%"])
 const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  return (
    <div>
      <div className='relative overflow-hidden flex justify-center items-center w-full' >
      <motion.div className='flex justify-center items-center w-full '
        style={{ scale }}
      >
        <motion.div className='flex justify-center items-center w-full'
          style={{
            scaleY: scrollYProgress
          }}
        />
        <img src={exploreImg} alt="" className='w-full' />
      </motion.div>
        <motion.div className=' z-10 h-16 w-16 absolute top-32 right-4' style={{y:yBg1}}>
            <img src={goldenImg} alt="" className='w-full' />
        </motion.div>
        <motion.div className='h-16 w-16 absolute bottom-0 left-4' style={{y:yBg2}}>
          <img src={greenImg} alt="" className='w-full' />
        </motion.div>
      </div>
      <div className='h-[400px] py-4 bg-slate-950'>

      </div>
    </div>
  );
};

export default BookConsaltation;