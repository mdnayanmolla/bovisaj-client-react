

import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import goldenImg from '../../../assets/parallaxGolden.png'
import Marquee from "react-fast-marquee";
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

const FreeClass = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    // const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "900%"])
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-1000%"])
    return (
        <div className="relative overflow-hidden">
            <div className='absolute -top-10 -left-8 h-24 w-24 xl:h-40 xl:w-40 -z-10'>
                <img src={goldenImg} alt="" />
            </div>
            <SectionTitle titleHeadingTop={`Achieve a Youthful`} titleHeadingBottom={'Glow with our Routine'} titlePragraph={'DO YOU FIND YOURSELF DEALING WITH FACIAL PUFFINESS, SAGGING SKIN, PERSISTENT DARK CIRCLES AROUND YOUR EYES, OR THOSE DEEP EXPRESSION WRINKLES THAT BOTHER YOU? LOOK NO FURTHER! FIND THE SOLUTION TO THESE PROBLEMS AND MORE WITH OUR ANNUAL BOVISAJ MEMBERSHIP OR OUR PERSONALISED 1:1 COACHING SESSIONS.'}></SectionTitle>
            <div className='xl:text-center py-10 xl:py-24 md:px-[4%]'>
                <button className="px-3 py-3 md:px-4  bg-[#496558] text-[12px] font-bold xl:px-16 text-[#E6DCD4] xl:py-4 rounded-full  xl:text-[14px] uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
              duration-500 transition-all translate-y-0 hover:-translate-y-2">TRY A FREE CLASS NOW</button>
            </div>
            <div className="bg-[#e6dcd4] py-2 xl:py-5 z-50 xl:mt-16">
                <Marquee>
                    <p className="text-[#496558] text-base xl:text-[21px] font-poppins">lift your face&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shift your energy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;look younger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse ageing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve your face symmetry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boost your confidence&nbsp;</p>
                </Marquee>
            </div>
            <motion.div className=' -z-10 h-24 w-24 xl:h-40 xl:w-40 absolute -bottom-[500px] right-0' style={{ y: yBg2 }}>
                <img src={goldenImg} alt="" className='w-full' />
            </motion.div>
        </div>
    );
};

export default FreeClass