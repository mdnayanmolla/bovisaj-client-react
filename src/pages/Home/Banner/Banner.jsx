
import bannerImg from '../../../assets/subject-2.png'
// import shadawImg from '../../../assets/lapImage.png'

const Banner = () => {
  const containerStyle = {
    background: 'linear-gradient(rgba(255,255,255,.05), #fff)',
  };
  return (
    <div className='relative h-screen w-full -z-50'>
      <div className='absolute h-screen w-[50%] bottom-0 right-32 top-8 scale-125  bg-no-repeat'>
        <img src={bannerImg} alt="" className='h-screen w-full -z-10' />
      </div>
      <div>
        <div className={`p-10 absolute -bottom-[350px] h-full w-full left-0 z-10 shadow-[100px_35px_0_15px_rgba(255,255,255,0.8)] `} style={containerStyle}></div>
      </div>
      <div className='absolute top-[98px] left-[8%] z-50'>
        <h2 className='font-Raleway text-6xl font-semibold tracking-widest text-[#496558] uppercase'>
          Unlock your <br></br>
          Timeless Beauty
        </h2>
        <p className='py-10 font-Raleway text-base font-normal leading-7 text-[#496558] tracking-widest'>ADD OUR ONLINE FACE-YOGA<br></br>
          PROGRAM TO YOUR ROUTINE<br></br>
          FOR A YOUNGER RADIANT YOU</p>
      </div>
      
    </div>
  );
};

export default Banner;