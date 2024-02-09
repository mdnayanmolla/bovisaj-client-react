import { motion, useScroll, useTransform } from 'framer-motion'

import exploreImg from '../../../assets/expolre.png'
import goldenImg from '../../../assets/parallaxGolden.png'
import greenImg from '../../../assets/parallaxGreen.png'
import { useRef } from 'react';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';



const BookConsaltation = () => {
  const containerStyle = {
    background: 'linear-gradient(rgba(255,255,255,.01), #fff)',
  };
  const ref = useRef()
  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })
 const yBg1 = useTransform(scrollYProgress, [0,1],["0%","200%"])
 const yBg2 = useTransform(scrollYProgress, [0,1],["0%","-800%"])
 const scale = useTransform(scrollYProgress, [0, 1], [.9, 1.7]);
  return (
    <div>
      <SectionTitle titleHeadingTop={'Experience our'} titleHeadingBottom={'One-on-one'} titlePragraph={`NEED A MORE PERSONAL EXPERIENCE? BOOK YOUR 60 MINUTES TRANSFORMATIVE 1:1 SESSION WITH PERSONALIZED ADVICE AND COACHING WITH LEILA AND HER COACHES`}></SectionTitle>
      <div className='relative  flex justify-center items-center w-full mt-20' >
      <div className={`p-10 absolute -bottom-[50px] h-44 w-full left-0 z-10`} style={containerStyle}></div>
    
      <motion.div className='flex justify-center items-center w-full '
        style={{ scale }}
      >
        <motion.div className='flex justify-center items-center w-full'
          style={{
            scaleY: scrollYProgress
          }}
        />
        <img src={exploreImg} alt="" className='w-full -mb-8' />
      </motion.div>
        <motion.div className=' z-10 h-32 w-32 absolute top-32 right-4' style={{y:yBg1 }}>
            <img src={greenImg} alt="" className='w-full' />
        </motion.div>
        <motion.div className='h-52 w-52 absolute bottom-0 -left-32' style={{y:yBg2}}>
          <img src={ goldenImg} alt="" className='w-full' />
        </motion.div>
        <div className='absolute top-4'> 
          <Link><button className="bg-[#496558] px-16 text-[#E6DCD4] py-4 rounded-full  uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
            duration-500 transition-all translate-y-0 hover:-translate-y-2 tracking-widest "> Book a consultation</button></Link>
        </div>
      </div>
    </div>
  );
};

export default BookConsaltation;