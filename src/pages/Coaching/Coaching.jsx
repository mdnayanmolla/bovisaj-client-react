
import OnImg from '../../assets/ONE-ON-ONE-IMAGE.png'
import { motion, useScroll, useTransform } from 'framer-motion'
import goldenImg from '../../assets/parallaxGolden.png'
import { useRef } from 'react';

const Coaching = () => {
    const ref = useRef()
    // const { scrollYProgress } = useScroll()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const x1 = useTransform(scrollYProgress, [0, 1], [0, -300])


    const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "-1000%"])
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"])
    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);

    // const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
    return (
        <div className="">
            <div className="relative h-[400px] bg-white w-full -z-30 px-[4%] lg:px-[8%]" >
                <div className="absolute top-[185px] bg-white w-full">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl text-[#496558] font-semibold tracking-widest uppercase leading-10"> Need a more personal experience?</h2>
                    <p className="text-[#496558] font-semibold pt-10">TAKE ADVANTAGE OF A PRIVATE 1:1 SESSION WITH ADVICE AND COACHING THAT’S AS UNIQUE AS YOU ARE</p>
                </div>

            </div>
            <div className="flex flex-col-reverse h-[800px] md:h-auto md:grid md:grid-cols-2 pb-32 relative">
                <div className="">
                    <p className="font-semibold text-[#496558]">TAKE ADVANTAGE OF A PRIVATE 1:1 SESSION WITH A TAILOR-MADE PROGRAM MADE FOR YOU</p>
                    <br></br>
                    <p className='font-semibold text-[#496558]'>BY BOOKING A 60-MINUTE TRANSFORMATIVE SESSION YOU GET AN ACCOUNTABILITY PARTNER, AN EXPERT GUIDE AND A CHEERLEADER WITH THE SPECIFIC KNOWLEDGE OF HOW YOU ARE GOING TO HIT YOUR PERSONAL GOALS IN YOUR BODY AND MIND – ALL ROLLED INTO ONE</p>
                    <button className='mt-10 px-5 xl:px-10 py-3 bg-[#496558] text-white rounded-full  uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
                    duration-500 transition-all translate-y-0 hover:-translate-y-2 tracking-widest'>REGISTER OR LOG IN TO BOOK</button>
                </div>
                <div className="relative lg:h-[500px] md:overflow-hidden xl:overflow-visible w-full">
                    <motion.div className={`hidden xl:block  absolute xl:-bottom-[50px] -right-[400px] h-[600px] w-[800px]`} style={{ x: x1 }}>
                        <img src={OnImg} alt="" className='w-full h-full overflow-hidden' />
                    </motion.div>
                    <div className='md:h-[400px] md:w-[500px] -top-[300px] md:top-0 lg:-bottom-[100px] absolute lg:-right-[350px] lg:h-[600px] lg:w-[800px]  xl:hidden overflow-hidden'>
                        <img src={OnImg} alt="" className='w-full h-full overflow-hidden' />
                    </div>
                </div>
                <motion.div className={`hidden -z-10 h-24 w-24 lg:h-32 lg:w-32 absolute lg:top-32 lg:block -right-24 overflow-hidden`} style={{ y: yBg1 }}>
                    <img src={goldenImg} alt="" className='w-full overflow-hidden' />
                </motion.div>
                <motion.div className='overflow-hidden -z-10 h-28 w-28 lg:h-32 lg:w-32 absolute -bottom-[30px] lg:bottom-[200px] -left-[180px]' style={{ y: yBg2 }}>
                    <img src={goldenImg} alt="" className='w-full' />
                </motion.div>
            </div>
        </div>
    );
};

export default Coaching;