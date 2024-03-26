
import { motion, useScroll, useTransform } from 'framer-motion'
import exploreImg from '../../assets/about.png'
import missionImg from '../../assets/mission.png'
import amaSidor from '../../assets/ambasidor.png'
import goldenImg from '../../assets/parallaxGolden.png'
import greenImg from '../../assets/parallaxGreen.png'
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import Teacher from './Teacher/Teacher'
import OfferClass from '../Home/OfferClass/OfferClass'
const AboutPage = () => {


    const [datas , setDatas] = useState()
    console.log(datas)
     useEffect(()=>{
         fetch('../../../public/teacher.json')
         .then(res=> res.json())
         .then(data => setDatas(data) )
     },[])

    const containerStyle = {
        background: 'linear-gradient(rgba(255,255,255,.01), #fff)',
    };
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    // const yBg1 = useTransform(scrollYProgress, [0, 1], ["70%", "100%"])
    const yMetleila = useTransform(scrollYProgress, [0, 1], ["140%", "-300%"])

    const yMissionLeft = useTransform(scrollYProgress, [0, 1], ["0%", "00%"])
    const yVisionRight = useTransform(scrollYProgress, [0, 1], ["-220%", "230%"])

    const yAmbasidiorLeft = useTransform(scrollYProgress, [0, 1], ["0%", "0%"])
    const yAmbasidiorRight = useTransform(scrollYProgress, [0, 1], ["300%", "-400%"])

    const scale = useTransform(scrollYProgress, [0, 1], [.4, 1.6]);
    // const scale1 = useTransform(scrollYProgress, [0, 1], [.2, 1.6]);

    return (
        <div>
            <div className='relative h-[600px] md:h-[650px] bg-[#f6f4f3] -z-50'>
                <div className={`p-10 flex absolute -bottom-[50px] md:-bottom-[100px] lg:bottom-[40px] h-44 w-full -z-10 bg-black`} style={containerStyle}></div>
                <div className='flex relative h-screen justify-center items-center w-full  -z-40'>
                    <div className='flex items-center px-[8%]'>
                        <div className='flex-1'>
                            <div>
                                <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>The Ultimate <br></br> Natural <br></br> facelift</h2>
                            </div>
                            <div className='mt-4 md:pl-10 xl:pl-0'>
                                <button className='mt-10 px-5 xl:px-10 py-3 bg-[#496558] text-white rounded-full  uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
                                duration-500 transition-all translate-y-0 hover:-translate-y-2 tracking-widest'>TRY A FREE CLASS</button>
                            </div>
                        </div>
                        <div className='flex-1'>
                            <img src={exploreImg} alt="" />
                        </div>
                    </div>
                </div>
                <div className="bg-[#e6dcd4] py-2 md:py-5 z-50 mt-0 md:mt-24 lg:mt-36 xl:mt-20 absolute bottom-0">
                    <Marquee>
                        <p className="text-[#496558] text-sm md:text-[18px] font-poppins">lift your face&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shift your energy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;look younger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse ageing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve your face symmetry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boost your confidence&nbsp;</p>
                    </Marquee>
                </div>
            </div>
            {/** Meet leila,your Teacher*/}
            <div className='pt-16 relative bg-[#f6f4f3]'>
                <div className='px-[8%] pb-40'>
                    <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>Meet leila,</h2>
                    <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>your Teacher</h2>
                    <p className='text-[#496558] pt-10'>A CERTIFIED FACE YOGA TEACHER, PROFESSIONAL WELLNESS COACH, AND FOUNDER OF THE BOVISAJ METHOD, OUR FOUNDER, LEILA, UNDERWENT A PROFOUND TRANSFORMATION THAT COMPLETELY RESHAPED HER LIFE.</p>
                    <p className='text-[#496558] py-5'>THROUGH A SERIES OF RIGOROUS TRAININGS, SHE NOT ONLY ALIGNED HERSELF BUT ALSO WORKED TO HEAL HER PERSONAL TRAUMAS, RESULTING IN A REMARKABLE CHANGE. SHE IS COMMITTED TO HELPING YOU ACHIEVE YOUR GOALS OF REGAINING YOUR YOUTH AND BOOSTING YOUR CONFIDENCE THROUGH CONSISTENCY AND GROUNDBREAKING INGENUITY.</p>
                    <p className='text-[#496558]'>HER PASSION FOR FACE ANATOMY AND HOLISTIC WELLNESS, AND CONSTANT DRIVE TOWARDS INNOVATION, LEADS HER TO SEARCH FOR NEW TECHNIQUES AND THEMES TO ACCOMPANY THE BOVISAJ COMMUNITY.</p>
                </div>
                <motion.div className='overflow-hidden h-28 w-28 lg:h-40 lg:w-40 absolute bottom-0 lg:-bottom-0 right-16 ' style={{ y: yMetleila }}>
                    <img src={goldenImg} alt="" className='w-full' />
                </motion.div>
                <div className="bg-[#e6dcd4] py-2 md:py-5 z-50 mt-0 md:mt-24 lg:mt-36 xl:mt-20 absolute bottom-0">
                    <Marquee>
                        <p className="text-[#496558] text-sm md:text-[18px] font-poppins">lift your face&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shift your energy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;look younger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse ageing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve your face symmetry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boost your confidence&nbsp;</p>
                    </Marquee>
                </div>
            </div>
            {/**Our Mission */}
            <div className='py-36 relative bg-[#f6f4f3] overflow-hidden'>
                <div className='px-[8%]'>
                    <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>Our Mission</h2>
                    <p className='text-[#496558] pt-10'>WE WANT TO EMPOWER INDIVIDUALS TO EMBRACE THEIR NATURAL  BEAUTY.
                        YOU WILL LEARN HOW TO TAKE YOUR FACE IN HANDS, LIFT YOUR ENERGY, REGAIN SELF-CONFIDENCE AND AGE GRACEFULLY</p>
                </div>
                <motion.div className=' h-24 w-24 lg:h-36 lg:w-36 absolute lg:-top-2 lg:block -left-1 overflow-hidden -z-50' style={{ y: yMissionLeft }}>
                    <img src={goldenImg} alt="" className='w-full overflow-hidden' />
                </motion.div>
                <motion.div className='h-28 w-28 lg:h-40 lg:w-40 absolute bottom-0 lg:-bottom-0 right-16' style={{ y: yAmbasidiorRight }}>
                    <img src={greenImg} alt="" className='w-full' />
                </motion.div>
            </div>
            {/**Our Mission */}

            {/**Our Vision */}
            <div className='bg-[#f6f4f3] '>
                <div className='relative overflow-hidden'>
                    <div className='z-50 absolute top-[50%] -translate-y-[50%] px-[2%] xl:px-[8%]'>
                        <div className='w-[80%]'>
                            <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>Our Vision</h2>
                            <p className=' text-[#496558]'>WE BELIEVE THAT TRUE BEAUTY COMES FROM WITHIN,AND OUR GOAL IS TO HELP OUR CUSTOMERS UNLOCKTHEIR INNER RADIANCE THROUGH THE POWER OF NATURAL LIFTING. WE BELIEVE HAT EVERYONE DESERVES TO LOOK AND FEEL THEIR BEST, AND WE ARE HONORED TO BE PART
                                <br></br>
                                OF OUR CUSTOMERS’ JOURNEY TOWARDS SELF-LOVE
                            </p>
                        </div>
                    </div>
                    <div className={`p-10 flex absolute -bottom-[50px] md:-bottom-[100px] lg:bottom-[40px] h-44 w-full -z-10 bg-black`} style={containerStyle}></div>
                    <motion.div className='relative flex justify-center items-center w-full h-[600px]' style={{ scale }}>
                        <motion.div className='w-full h-full  absolute top-0 -right-[200px] bg-contain bg-right-bottom bg-no-repeat overflow-hidden' style={{ backgroundImage: `url(${missionImg})` }} />

                    </motion.div>
                    <motion.div className=' h-24 w-24  absolute top-0 lg:block right-32 ' style={{ y: yVisionRight }}>
                        <img src={goldenImg} alt="" className='w-full overflow-hidden' />
                    </motion.div>
                </div>
            </div>
            {/**Our Vision */}

            {/**Our Vision */}
            <div className='bg-[#f6f4f3] -z-50'>
                <div className='relative overflow-hidden'>
                    <div className='z-50 absolute top-[50%] -translate-y-[50%] px-[2%] xl:px-[8%]'>
                        <div className='w-[50%]'>
                            <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>Ambassador</h2>
                            <p className=' text-[#496558]'>GLOBAL MUSE, AUTHOR, GODMOTHER OF THE VENICE FILM FESTIVAL, AND EDUCATION ENTREPRENEUR. HER JOURNEY INSPIRES EMPOWERMENT HER PASSIONS INSPIRE INCREASING SELF-CONFIDENCE AND SELF-ESTEEM AND HER INNER BEAUTY AND OUTER RADIANCE ALIGN PERFECTLY WITH BOVISAJ’S ETHOS. </p>
                        </div>
                    </div>
                    <div className={`p-10 flex absolute -bottom-[50px] md:-bottom-[100px] lg:bottom-[40px] h-44 w-full -z-10 bg-black`} style={containerStyle}></div>
                    <motion.div className='relative flex justify-center items-center w-full h-[600px] overflow-hidden' style={{ scale }}>
                        <motion.div className='w-full h-full  absolute top-0 right-[0px] bg-contain bg-right-bottom bg-no-repeat overflow-hidden ' style={{ backgroundImage: `url(${amaSidor})` }} />

                    </motion.div>
                    <motion.div className=' h-24 w-24 lg:h-36 lg:w-36 absolute lg:-top-2 lg:block -left-1 overflow-hidden ' style={{ y: yAmbasidiorLeft }}>
                        <img src={goldenImg} alt="" className='w-full overflow-hidden' />
                    </motion.div>
                    <motion.div className='overflow-hidden h-20 w-20  absolute top-0 lg:top-20 right-16 z-10' style={{ y: yAmbasidiorRight }}>
                        <img src={goldenImg} alt="" className='w-full' />
                    </motion.div>
                </div>
            </div>
            {/**Our Vision */}
            {/**Our Teacher */}
            <div className='px-[8%] bg-[#f6f4f3] py-20'>
             <div className='py-10'>
                <h2 className='text-3xl md:text-5xl xl:text-6xl text-[#496558] font-semibold tracking-wider uppercase pb-5'>Our teachers</h2>
                <p className='text-[#496558]'>CLICK ON ONE OF THE IMAGES BELOW TO SEE THE BIO OF OUR TEACHERS</p>
             </div>
             <div className='grid md:grid-cols-3 lg:grid-cols-5 gap-10'>
                 {
                    datas?.map(data=><Teacher key={data.id} data={data}></Teacher>)
                 }
             </div>
           </div>
          {/**Our Teacher */}

          <OfferClass></OfferClass>
        </div>
    );
};

export default AboutPage;