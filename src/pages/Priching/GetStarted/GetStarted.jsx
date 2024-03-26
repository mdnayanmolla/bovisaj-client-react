import getImg from '../../../assets/get.jpg'

const GetStarted = () => {
    return (
        <div className='bg-cover bg-center py-24 px-[8%]' style={{ backgroundImage: `url(${getImg})` }}>
            <div className='bg-[#f6f4f3] w-2/4 rounded-xl py-9 px-10'>
                <h3 className='text-xl font-bold tracking-widest  text-[#496558]'>GET STARTED</h3>
                <form className='text-center'> 
                    <div>
                        <input type="text" className="w-full bg-white px-3 py-3 rounded-md placeholder:text-[#496558] placeholder:font-semibold" placeholder=" First Name" />
                    </div>
                    <div className="mt-4">
                        <input type="text" className="w-full bg-white px-3 py-3 rounded-md placeholder:text-[#496558] placeholder:font-semibold" placeholder=" Last Namel" />
                    </div>
                    <div className="mt-4">
                        <input type="text" className="w-full bg-white px-3 py-3 rounded-md placeholder:text-[#496558] placeholder:font-semibold" placeholder=" Your Email" />
                    </div>
                    <button className="text-white mt-4 py-3 font-semibold bg-[#496558] rounded-lg text-center px-14 hover:bg-[#e6dcd4] duration-500 transition-all border border-transparent hover:border-[#496558]">SIGN UP</button>
                </form>
            </div>
        </div>
    );
};

export default GetStarted;