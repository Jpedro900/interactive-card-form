import React from "react";
import TYImg from "../../assets/images/icon-complete.svg";

type Props = {};

function ThankYou({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 h-1/2 mt-20 gap-8">
      <img src={TYImg} alt="complete" />
      <div className="text-center space-y-2 flex flex-col items-center gap-2">
        <h1 className="text-3xl text-[#351347] font-bold uppercase tracking-widest">Thank you!</h1>
        <span className=" text-[#9788a0] font-semibold">We've adedd your card details</span>
      </div>
      <button 
        className="bg-[#351347] text-white w-[90%] rounded-lg h-14 hover:bg-[#1f1a2f] transition duration-300"
        onClick={() => window.location.reload()}
      >
        Continue
      </button>
    </div>
  );
}

export default ThankYou;
