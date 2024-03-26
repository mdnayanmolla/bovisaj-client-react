import Banner from "../Banner/Banner";
import Marquee from "react-fast-marquee";
import BannerButton from "../Banner/BannerButton/BannerButton";
import BookConsaltation from "../BookConsaltation/BookConsaltation";
import FreeClass from "../FreeClass/FreeClass";
import Gallery from "../Gallery/Gallery";
import OfferClass from "../OfferClass/OfferClass";
import OurCommunity from "../OurCommunity/OurCommunity";

const Home = () => {


    return (
        <div>
            <Banner></Banner>
            <BannerButton></BannerButton>
            <div className="bg-[#e6dcd4] py-2 md:py-5 z-50 mt-0 md:mt-24 lg:mt-36 xl:mt-20">
                <Marquee>
                    <p className="text-[#496558] text-sm md:text-[18px] font-poppins">lift your face&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shift your energy&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;look younger&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;reverse ageing&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;improve your face symmetry&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;boost your confidence&nbsp;</p>
                </Marquee>
            </div>
            <FreeClass></FreeClass>
              <BookConsaltation></BookConsaltation>
            <OurCommunity></OurCommunity>
            <OfferClass></OfferClass>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;
