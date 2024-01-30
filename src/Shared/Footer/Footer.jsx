import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import whiteLogo from '../../assets/logoWhite.png'
import footerLogo from '../../assets/footerLogo.png'


const Footer = () => {
    return (
        <div className="bg-[#496558] py-16">
            <div className="px-[8%] grid lg:grid-cols-5 gap-5 md:grid-cols-3">
                <div>
                    <div>
                        <Link>
                            <img src={whiteLogo} alt="" className="w-4/5" />
                            <img src={footerLogo} alt="" className="h-28 w-28 mt-3" />
                            <p className="text-white mt-3">Accredited with the International Practitioners of Holistic Medicine</p>
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-white font-bold text-[18px]"> My Account</h3>
                    <ul className="text-white">
                        <Link><li className="pt-4 hover:text-[#dbdddb] duration-300">Login</li></Link>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold text-[18px]">Quick links</h3>
                    <ul className="text-white">
                        <Link><li className="pt-4 hover:text-[#dbdddb] duration-300">About Us</li></Link>
                        <Link><li className="pt-4 hover:text-[#dbdddb] duration-300">Consultation</li></Link>
                        <Link><li className="pt-4 hover:text-[#dbdddb] duration-300">Pricing</li></Link>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold text-[18px]">Customer Service</h3>
                    <ul className="text-white">
                        <Link><li className="pt-4 hover:text-[#dbdddb] duration-300">FAQs</li></Link>
                        <Link><li className="pt-4 hover:text-[#dbdddb] duration-300">Contacts</li></Link>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-bold text-[18px]">Sign up for our newsletter below</h3>
                    <div>
                        <div className="my-6">
                            <form>
                                <div>
                                    <input type="text" className="bg-white px-3 py-2 rounded-md placeholder:text-[#496558] placeholder:font-semibold" placeholder="Enter First Name" />
                                </div>
                                <div className="mt-4">
                                    <input type="text" className="bg-white px-3 py-2 rounded-md placeholder:text-[#496558] placeholder:font-semibold" placeholder="Enter Your Email" />
                                </div>
                                <button className="bg-white mt-4 py-2 font-semibold text-[#496558] w-full rounded-full">Subscribe</button>
                            </form>
                        </div>
                        <p className="text-[12px] text-white pt-7">By entering your email address, you agree to our Privacy Policy and will receive BOVISAJ offers, promotions and other commercial messages. You may unsubscribe at any time.</p>
                        <div className="mt-5">
                            <h3 className="text-[18px] text-white font-semibold">Flow Us</h3>
                            <ul className="flex space-x-3 mt-3">
                                <li className="text-[25px] text-white hover:text-[#dbdddb] duration-300"><Link className="hover:text-[#dbdddb] duration-300"><span><FaFacebook /></span> </Link></li>
                                <li className="text-[25px] text-white hover:text-[#dbdddb] duration-300"><Link className="hover:text-[#dbdddb] duration-300"><span><FaInstagram /></span> </Link></li>
                            </ul>
                        </div>

                    </div>

                </div>
            </div>
            <div className=" mt-10 px-[8%]">
                <div className="flex justify-between">
                    <p className="text-[#dbdddb]">© 2023 <span className="text-white text-[18px]">BOVISAJ</span>, LLC. All Rights Reserved.</p>
                    <ul className="flex text-white space-x-4">
                        <li><Link className="underline">Terms & Conditions</Link></li>
                        <li><Link className="underline">Privacy</Link></li>
                    </ul>
                    <p className="text-white">Made by Md. Nayan Molla</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;