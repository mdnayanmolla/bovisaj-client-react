'use client'
import { Link } from "react-router-dom";
import logoColot from '../../assets/logoColor.png'
import { useEffect, useState } from "react";

const NavBar = () => {
    const [sticky, setSticky] = useState(false)

    const handleSticky = () => {
        if (window.scrollY >= 100) {
            setSticky(true)
        } else if(window.scrollY === 0) {
            setSticky(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',handleSticky)
        return(
            window.addEventListener('scroll',handleSticky) 
        )
    },[])

    return (
        <div className={`${sticky ? "w-full duration-500 transition-all bg-opacity-40 bg-gray-100 backdrop-filter backdrop-saturate-200 backdrop-blur-3xl" : "w-full"}  bg-opacity-5 bg-[#f6f4f3] fixed py-4 px-[8%] z-50`}>
            <div >
                <div className="flex  py-3 justify-between items-center">
                    <div className="">
                        <Link to='/'>
                            <img src={logoColot} className="w-40" alt="" />
                        </Link>
                    </div>
                    <div>
                        <ul className="flex uppercase mr-4">
                            <Link to='/parallax'><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">EXPLORE</li></Link>
                            <Link><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">CONSULTATION</li></Link>
                            <Link><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">PRICING</li></Link>
                            <Link><li className="mr-8 text-[#496558] hover:text-white duration-300 transition-all">ABOUT</li></Link>
                        </ul>
                    </div>
                    <div>
                        <button  className="bg-[#496558] px-12 text-[#E6DCD4] py-3 rounded-full text-[14px] uppercase hover:bg-white hover:text-[#496558] hover:border hover:border-[#496558]
          duration-500 transition-all translate-y-0 hover:-translate-y-2">Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;