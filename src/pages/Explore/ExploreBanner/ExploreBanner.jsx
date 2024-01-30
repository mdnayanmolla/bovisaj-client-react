import { Link } from 'react-router-dom';
import exploreBannerImg from '../../../assets/exploreBannerImg.jpg'
const ExploreBanner = () => {
    return (
        <div className='px-[8%]'>
            <div className='absolute top-32 right-0 px-[8%]'>
                <img src={exploreBannerImg} alt="" className='w-full' />
                <div className='bg-[#496558] py-8 px-6 text-white rounded-b-md'>
                    <h2 className='pb-3 text-xl font-semibold'>Hi</h2>
                    <p>Welcome to the BOVISAJ Membership page where you can explore our latest courses, challenges and more.</p>
                    <p className='py-2'>Using the tabs on the left, navigate to your desired course, zone or Outdoor Flow.</p>
                    <p>f you’re having any problems, reach out to us on <Link>contact@BOVISAJ.com</Link></p>
                </div>
            </div>

        </div>
    );
};

export default ExploreBanner;