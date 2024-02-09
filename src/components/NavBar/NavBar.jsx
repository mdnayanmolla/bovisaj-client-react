'use client'
import { Link } from "react-router-dom";
import logoColot from '../../assets/logoColor.png'
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
    const [sticky, setSticky] = useState(false)

    const handleSticky = () => {
        if (window.scrollY >= 100) {
            setSticky(true)
        } else if (window.scrollY === 0) {
            setSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleSticky)
        return (
            window.addEventListener('scroll', handleSticky)
        )
    }, [])

    return (
        <div className={`${sticky ? "w-full duration-500 transition-all bg-opacity-40 bg-gray-100 backdrop-filter backdrop-saturate-200 backdrop-blur-3xl" : "w-full"}  bg-opacity-5 bg-[#f6f4f3] fixed py-2 md:py-4 px-[4%] lg:px-[8%] z-50`}>
            <div >
                <div className="flex py-1 md:py-3 justify-between items-center">
                    <div className="">
                        <Link to='/'>
                            <img src={logoColot} className="w-32 md:w-40" alt="" />
                        </Link>
                    </div>

                    <div className="hidden lg:block">
                        <ul className="lg:flex uppercase">
                            <Link to='/parallax'><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">EXPLORE</li></Link>
                            <Link><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">CONSULTATION</li></Link>
                            <Link><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">PRICING</li></Link>
                            <Link><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">ABOUT</li></Link>
                        </ul>
                    </div>
                    {/* Responsive Menu */}
                    <div className="block md:hidden absolute top-full left-0 bg-[#496558] w-full ">
                        <ul className="lg:flex uppercase">
                            <Link to='/parallax'><li className="py-3 px-4 text-[#fff] hover:text-[#496558] duration-300 transition-all">EXPLORE</li></Link>
                            <Link><li className="py-3 px-4 text-[#fff] hover:bg-[#f6f4f3] hover:text-[#496558] duration-300 transition-all">CONSULTATION</li></Link>
                            <Link><li className="py-3 px-4 text-[#fff] hover:bg-[#f6f4f3] hover:text-[#496558] duration-300 transition-all">PRICING</li></Link>
                            <Link><li className="py-3 px-4 text-[#fff] hover:bg-[#f6f4f3] hover:text-[#496558] duration-300 transition-all">ABOUT</li></Link>
                        </ul>
                    </div>
                    <div className="">
                        <button className="hidden lg:block bg-[#496558] px-12 text-[#E6DCD4] py-3 rounded-full text-[14px] uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
                          duration-500 transition-all translate-y-0 hover:-translate-y-2">Sign in</button>
                        <button className="block lg:hidden bg-[#496558] text-white px-2 py-2 text-xl rounded-md"><FaBars /> </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;