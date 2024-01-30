import ButtonBgColor from "../../../components/ButtonBgColor/ButtonBgColor";
import TransparentButton from "../../../components/ButtonBgColor/TransparentButton/TransparentButton";

const OfferClass = () => {
    return (
        <div className='bg-[#cad8bf] py-16'>
            <div className='px-[8px] grid lg:grid-cols-2'> 
                 <div className="text-center">
                    <h2 className="font-bold text-3xl text-[#496558] tracking-wide ">TRY &nbsp;A&nbsp;FREE&nbsp;CLASS&nbsp;NOW</h2>
                    <p className="text-xl font-semibold text-[#496558] leading-8">5 minutes a day takes your wrinkles away.</p>
                 </div>
                 <div className="flex space-x-6">
                    <ButtonBgColor btnText={'Start Hare'}></ButtonBgColor>
                    <TransparentButton btnText={'learn more'}></TransparentButton>
                 </div>
            </div>
        </div>
    );
};

export default OfferClass;