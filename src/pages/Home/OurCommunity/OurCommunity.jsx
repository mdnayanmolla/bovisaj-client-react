import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
// import { Pagination, Navigation } from 'swiper/modules';
import { useRef } from "react";


import sandyImg1 from '../../../assets/community1.png'
import sandyImg2 from '../../../assets/community2.png'
import { motion, useScroll, useTransform } from 'framer-motion'

import goldenImg from '../../../assets/parallaxGolden.png'
import parallaxGreen from '../../../assets/parallaxGreen.png'


const OurCommunity = () => {
    const ref = useRef()
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })
    const yBg1 = useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
    const yBg2 = useTransform(scrollYProgress, [0, 1], ["0%", "-800%"])
    const swiperRef = useRef();
    return (
        <div className="px-[8%] relative pb-24">
            <SectionTitle titleHeadingTop={'Hear from'} titleHeadingBottom={'our Community'}></SectionTitle>
            <motion.div className=' -z-10 h-24 w-24 absolute bottom-[0px] right-20' style={{ y: yBg2 }}>
                <img src={goldenImg} alt="" className='w-full' />
            </motion.div>
            <motion.div className=' z-10 h-40 w-40 absolute top-0 -left-20 overflow-hidden' style={{ y: yBg1 }}>
                <img src={parallaxGreen} alt="" className='w-full' />
            </motion.div>
            <div className="relative px-11  flex items-center">
                <div className="absolute top-[50%] left-6 transform translate-y-[-50%] translate-x-[-50%]">
                    <button onClick={() => swiperRef.current?.slidePrev()}><span className="text-4xl text-[#496558]"> <GrFormPrevious /></span></button>
                </div>
                <div className="absolute top-[50%] right-0 z-20 transform translate-y-[-50%] translate-x-[-50%]">
                    <button onClick={() => swiperRef.current?.slideNext()}><span className="text-4xl text-[#496558]"><MdNavigateNext /></span></button>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    className="mySwiper relative"
                >
                    <SwiperSlide>
                        <div className="flex items-center">
                            <div>
                                <p className="text-[#496558] tracking-widest">BOVISAJ has been a game-changer for me!Thanks to their program, I’ve rediscovered my youthful glow and feel more confident than ever. WOULD 100% RECOMEND</p>
                                <h4 className="text-[#496558] text-[18px] font-semibold mt-5 tracking-widest">Sandy Medows</h4>
                            </div>
                            <div className="flex gap-6 pr-2 py-16">
                                <div className="relative ">
                                    <div className="-z-50 ">
                                        <img src={sandyImg1} alt="" className="-z-50 w-full" />
                                    </div>
                                    <div className="absolute left-[50%] -bottom-4 transform translate-x-[-50%]">
                                        <button className="bg-[#496558] uppercase tracking-widest text-[#dbdddb] px-10 py-3 text-[14px] rounded-full z-50">Before</button>
                                    </div>
                                </div>
                                <div className="relative ">
                                    <div className="-z-50 ">
                                        <img src={sandyImg2} alt="" className="-z-50 w-full " />
                                    </div>
                                    <div className="absolute left-[50%] -bottom-4 transform  translate-x-[-50%]">
                                        <button className="bg-[#496558] uppercase tracking-widest text-[#dbdddb] px-10 py-3 text-[14px] rounded-full z-50">After</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="flex items-center">
                            <div>
                                <p className="text-[#496558] tracking-widest">BOVISAJ has been a game-changer for me!Thanks to their program, I’ve rediscovered my youthful glow and feel more confident than ever. WOULD 100% RECOMEND</p>
                                <h4 className="text-[#496558] text-[18px] font-semibold mt-5 tracking-widest">Sandy Medows</h4>
                            </div>
                            <div className="flex gap-6 pr-2 py-16">
                                <div className="relative ">
                                    <div className="-z-50 ">
                                        <img src={sandyImg1} alt="" className="-z-50  w-full" />
                                    </div>
                                    <div className="absolute left-[50%] -bottom-4 transform  translate-x-[-50%]">
                                        <button className="bg-[#496558] uppercase tracking-widest text-[#dbdddb] px-10 py-3 text-[14px] rounded-full z-50">Before</button>
                                    </div>
                                </div>
                                <div className="relative ">
                                    <div className="-z-50 ">
                                        <img src={sandyImg2} alt="" className="-z-50  w-full " />
                                    </div>
                                    <div className="absolute left-[50%] -bottom-4 transform  translate-x-[-50%]">
                                        <button className="bg-[#496558] uppercase tracking-widest text-[#dbdddb] px-10 py-3 text-[14px] rounded-full z-50">After</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default OurCommunity;