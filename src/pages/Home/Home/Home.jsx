import Banner from "../Banner/Banner";
import Marquee from "react-fast-marquee";
import BannerButton from "../Banner/BannerButton/BannerButton";
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerButton></BannerButton>
            <div className="bg-[#e6dcd4] py-5 z-50">
                <Marquee>
                    <p className="text-[#496558]  text-[21px] font-poppins">lift your face&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shift your energy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;look younger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse ageing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve your face symmetry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boost your confidence&nbsp;</p>
                </Marquee>
            </div>
            <div className="w-full h-64 bg-black">

            </div>
        </div>
    );
};

export default Home;
