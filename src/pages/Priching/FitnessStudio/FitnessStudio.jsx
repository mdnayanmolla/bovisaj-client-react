import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from "react";
import FitnessItem from "./FitnessItem/FitnessItem";
import Marquee from "react-fast-marquee";
import goldenImg from '../../../assets/parallaxGolden.png'
import { useRef } from 'react';

const FitnessStudio = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "-800%"])
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "700%"])
    const [fitness, setFinness] = useState()

    useEffect(() => {
        fetch('../../../../public/fitness.json')
            .then(res => res.json())
            .then(data => setFinness(data))
    }, [])
    return (
        <div className="pt-24 bg-[#f6f4f3] relative -z-50">
            <div className="px-[8%] ">
                <div>
                    <h2 className="text-3xl md:text-5xl xl:text-6xl text-[#496558] font-bold tracking-widest uppercase">Your at-home</h2>
                    <h2 className="text-3xl md:text-5xl xl:text-6xl text-[#496558] font-bold tracking-widest uppercase">Face Fitness Studio</h2>
                    <div className="mt-10">
                        <p className="text-[#496558] font-semibold tracking-widest">ACHIEVE YOUR GOALS WITH BOVISAJ. THIS IS MORE THAN JUST A COURSE.</p><br></br>
                        <p className="text-[#496558] font-semibold tracking-widest">IT’S A LIFESTYLE SHIFT, IT’S AN ENERGY SHIFT, IT’S A MINDSET SHIFT.</p><br></br>
                        <p className="text-[#496558] font-semibold tracking-widest">ARE YOU READY FOR THE NEXT LEVEL IN DYNAMIC SELF-CARE?</p>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 pt-16 gap-14">
                    {
                        fitness?.map(item => <FitnessItem key={item.id} item={item}></FitnessItem>)
                    }
                </div>
                <motion.div className=' h-24 w-24 lg:h-32 lg:w-32 absolute lg:-bottom-[470px] lg:block right-4 -z-30' style={{ y: yBg1 }}>
                    <img src={goldenImg} alt="" className='w-full ' />
                </motion.div>
                <motion.div className='-z-30 h-28 w-28 lg:h-28 lg:w-28 absolute bottom-[30px] lg:top-48 -left-16' style={{ y: yBg2 }}>
                    <img src={goldenImg} alt="" className='w-full' />
                </motion.div>
            </div>
            <div className="bg-[#e6dcd4] py-2 md:py-5 z-50">
                <Marquee>
                    <p className="text-[#496558] text-sm md:text-[18px] font-poppins">lift your face&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shift your energy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;look younger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse ageing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve your face symmetry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boost your confidence&nbsp;</p>
                </Marquee>
            </div>
        </div>
    );
};

export default FitnessStudio;