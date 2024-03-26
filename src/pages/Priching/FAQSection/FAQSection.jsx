import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

const FAQSection = () => {
    const [answer,setAnswer] = useState(false)

    return (
        <div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 px-[8%] py-16">
               <div>
                 <h3 className="text-[#496558] font-bold text-2xl">FREQUENTLY ASKED</h3>
                 <h3 className="text-[#496558] font-bold text-2xl">QUESTIONS</h3>
               </div>
               <div>
                 <div className="border-b border-[#e5e6e4] py-6">
                    <div onClick={()=> setAnswer(!answer)} className="flex justify-between items-center cursor-pointer">
                      <h3 className="text-[#496558] font-semibold text-2xl">WHAT IS FACE YOGA?</h3>
                      <span className="text-[#496558] transition-all duration-500"> 
                       {
                        answer ? <FaChevronUp />  :  <FaChevronDown />
                       }  
                      </span>
                    </div>
                    {
                        answer &&
                        <div className="py-4 duration-500 transition-all">
                        <p className="text-[#496558]">Face yoga is a series of exercises that focus on the muscles of the face. Its practices aim to promote a youthful appearance, enhance skin health, and increase facial muscle tone. Regular practice can lead to tighter, more radiant skin.</p>
                        </div>
                    }
                 </div>
               </div>
            </div>
        </div>
    );
};

export default FAQSection;