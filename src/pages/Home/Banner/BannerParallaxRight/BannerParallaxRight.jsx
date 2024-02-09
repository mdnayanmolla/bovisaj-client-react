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
    const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "400%"])
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"])
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

    return (

        <div>
            <motion.div className='hidden h-24 w-24 lg:h-32 lg:w-32 absolute lg:top-32 lg:block right-4 overflow-hidden' style={{ y: yBg1 }}>
                <img src={parallaxGreen} alt="" className='w-full overflow-hidden' />
            </motion.div>
            <motion.div className='overflow-hidden h-28 w-28 lg:h-40 lg:w-40 absolute -bottom-[30px] lg:-bottom-[200px] -left-16' style={{ y: yBg2 }}>
                <img src={goldenImg} alt="" className='w-full' />
            </motion.div>
        </div>
    );
};

export default BannerParallaxRight;