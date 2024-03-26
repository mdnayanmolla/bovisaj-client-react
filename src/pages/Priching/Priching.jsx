import { motion, useScroll, useTransform } from 'framer-motion'
import star from '../../assets/star.png'
import exploreImg from '../../assets/priching.png'
import goldenImg from '../../assets/parallaxGolden.png'
import greenImg from '../../assets/parallaxGreen.png'
import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import FitnessStudio from './FitnessStudio/FitnessStudio';
import GetStarted from './GetStarted/GetStarted';
import OurCommunity from '../Home/OurCommunity/OurCommunity';
import OfferClass from '../Home/OfferClass/OfferClass';
import FAQSection from './FAQSection/FAQSection'
// import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
// import { Link } from 'react-router-dom';

const Priching = () => {
    const containerStyle = {
        background: 'linear-gradient(rgba(255,255,255,.01), #fff)',
    };
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const yBg1 = useTransform(scrollYProgress, [0, 1], ["70%", "-700%"])
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-800%"])
    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
    return (
        <div>
            <div className='relative h-[900px] md:h-[800px]  bg-[#f6f4f3] -z-50'>
                <div className='z-50 absolute top-[100px] px-[2%] xl:px-[8%]'>
                    <div>
                        <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>Unlock your <br></br> eternal beauty</h2>
                        <p className=' text-[#496558]'>DIVE INTO FACE YOGA FROM HOME!</p>
                        <p className='pb-4 text-[#496558]'>GET ACCESS TO YOUR TAILOR-MADE FACE YOGA PROGRAM</p>
                        <p className=' text-[#496558]'>AFTER YOUR COMPLIMENTARY CONSULTATION AND</p>
                        <p className=' text-[#496558]'>MONTHLY MASTERCLASSES.</p>
                    </div>
                    <div className='mt-4 md:pl-10 xl:pl-0'>
                        <h3 className=' text-xl font-bold text-[#496558]'>VIP Membership $333 Annual Subscription ($27 per month - $111 savings)</h3>

                        <h3 className=' text-xl font-bold text-[#496558] mt-3'>VIP Membership $37 Monthly Subscription</h3>
                        <button className='mt-10 px-5 xl:px-10 py-3 bg-[#496558] text-white rounded-full  uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
                        duration-500 transition-all translate-y-0 hover:-translate-y-2 tracking-widest'>Pay NOw</button>
                    </div>
                </div>
                <div className={`p-10 flex absolute -bottom-[50px] md:-bottom-[100px] lg:bottom-[40px] h-44 w-full -z-10 bg-black`} style={containerStyle}></div>
                <motion.div className='flex relative h-screen justify-center items-center w-full  -z-40' style={{ scale }}>

                    <motion.div className='w-full h-screen bg-contain absolute top-[450px] overflow-hidden left-0 sm:left-0 md:top-[400px] lg:top-[350px] lg:left-0 bg-no-repeat bg-right-bottom xl:top-[130px]' style={{ backgroundImage: `url(${exploreImg})` }} />
                    {/* <img src={exploreImg} alt="" className=' -mb-8 absolute -bottom-[100px]  lg:right-0 ' /> */}
                </motion.div>
                <motion.div className=' h-24 w-24 lg:h-32 lg:w-32 absolute lg:top-32 lg:block right-4 overflow-hidden -z-50' style={{ y: yBg1 }}>
                    <img src={greenImg} alt="" className='w-full overflow-hidden' />
                </motion.div>
                <motion.div className='overflow-hidden h-28 w-28 lg:h-40 lg:w-40 absolute -bottom-[30px] lg:-bottom-0 -left-16 -z-50' style={{ y: yBg2 }}>
                    <img src={goldenImg} alt="" className='w-full' />
                </motion.div>
                <div className="bg-[#e6dcd4] py-2 md:py-5 z-50 mt-0 md:mt-24 lg:mt-36 xl:mt-20 absolute bottom-0">
                    <Marquee>
                        <p className="text-[#496558] text-sm md:text-[18px] font-poppins">lift your face&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shift your energy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;look younger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse ageing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve your face symmetry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boost your confidence&nbsp;</p>
                    </Marquee>
                </div>
            </div>
           <FitnessStudio></FitnessStudio>
           <OurCommunity></OurCommunity>
           <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-14'>
              <div className='text-center px-5'>
                <h2 className='text-3xl font-bold text-[#496558]'>21k</h2>
                <p className='text-[#496558] pt-3'>RADIANT CLIENTS</p>
              </div>
              <div  className='text-center px-5'>
                <h2 className='text-3xl font-bold text-[#496558]'>2,262</h2>
                <p className='text-[#496558] pt-3'>CLASSES & COUNTING</p>
              </div>
              <div  className='text-center px-5'>
                <img src={star} alt="" />
                <p className='text-[#496558] pt-3'>AVERAGE RATING</p>
              </div>
              <div  className='text-center px-5'>
                <h2 className='text-3xl font-bold text-[#496558]'>8+</h2>
                <p className='text-[#496558] pt-3'>TAUGHT LIVE IN 8+ COUNTRIES</p>
              </div>
           </div>
           <GetStarted></GetStarted>
           <FAQSection></FAQSection>
           <OfferClass></OfferClass>
        
        </div>
    );
};

export default Priching;