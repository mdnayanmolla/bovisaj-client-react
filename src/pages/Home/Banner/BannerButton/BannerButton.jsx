

const BannerButton = () => {
    return (
        <div className="absolute top-[280px] md:top-[330px] lg:top-[380px] left-[4%] lg:left-[8%]">
            <div>
                <button className="bg-[#496558] px-4 md:px-12 text-sm md:text-base text-[#E6DCD4] py-3 rounded-full  uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
                duration-500 transition-all translate-y-0 hover:-translate-y-2">TRY YOUR FREE CLASS</button>
            </div>
            <div className="mt-4 lg:mt-10">
                <button className="bg-[#e6dcd4] px-4 md:px-12 text-sm md:text-base py-2 text-[#496558] md:py-3 rounded-full border border-[#496558] uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
               duration-500 transition-all translate-y-0 hover:-translate-y-2">WATCH TRAILER</button>
           </div>
        </div>
    );
};

export default BannerButton;