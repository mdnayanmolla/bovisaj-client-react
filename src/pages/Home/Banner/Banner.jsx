
import bannerImg from '../../../assets/subject-2.png'
import BannerParallaxRight from './BannerParallaxRight/BannerParallaxRight';


const Banner = () => {
  
 
  const containerStyle = {
    background: 'linear-gradient(rgba(255,255,255,.01), #fff)',
  };
  return (
    <div className='relative h-screen w-full -z-50' >
      <div className='absolute w-[50%] right-12 xl:bottom-0 lg:right-32 top-44 md:top-32 lg:top-10 scale-125 bg-no-repeat'>
        <img src={bannerImg} alt="" className='w-full -z-10' />
      </div>
      <div>
        <div className={`p-10 absolute -bottom-0 md:-bottom-[90px] lg:-bottom-[100px] h-16 w-full left-0 z-10`} style={containerStyle}></div>
      </div>
      <div className='absolute top-[80px] md:top-[130px] lg:top-[98px] left-[4%] lg:left-[8%] z-50'>
        <h2 className='font-Raleway text-3xl md:text-4xl lg:text-6xl font-semibold tracking-widest text-[#496558] uppercase'>
          Unlock your <br></br>
          Timeless Beauty
        </h2>
        <p className='py-4 lg:py-10 font-Raleway text-base md:font-normal leading-7 text-[#496558] tracking-widest font-semibold'>ADD OUR ONLINE FACE-YOGA<br></br>
          PROGRAM TO YOUR ROUTINE<br></br>
          FOR A YOUNGER RADIANT YOU</p>
      </div>
      <BannerParallaxRight></BannerParallaxRight>
    </div>

  );
};

export default Banner;