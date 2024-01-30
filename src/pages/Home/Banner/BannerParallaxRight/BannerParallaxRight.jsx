import goldenImg from '../../../../assets/parallaxGolden.png'
import parallaxGreen from '../../../../assets/parallaxGreen.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react';

const BannerParallaxRight = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "900%"])
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

    return (

        <div>
            <motion.div className=' z-10 h-32 w-32 absolute top-32 right-4 overflow-hidden' style={{ y: yBg1 }}>
                <img src={parallaxGreen} alt="" className='w-full' />
            </motion.div>
            <motion.div className=' z-10 h-40 w-40 absolute -bottom-[200px] -left-16' style={{ y: yBg2 }}>
                <img src={goldenImg} alt="" className='w-full' />
            </motion.div>
        </div>
    );
};

export default BannerParallaxRight;