import React from 'react';
import { GreenButton } from './Button';
import phoneIcon2 from '../assets/phone-icon2.png';

const StayTunedSection = () => {
  return (
    <section className="text-center my-10">
      <h2 className="font-sf-pro text-[22px] font-bold leading-[28px] tracking-[-0.26px] text-black ">
        Stay tuned for new lessons!
      </h2>
      <p className="font-sf-pro text-[16px] font-normal leading-[21px] tracking-[-0.31px] text-black mb-5">
        Enter your mobile number for updates on new
        educational videos!
      </p>
      <div className="flex items-center justify-center w-full max-w-md mx-auto mt-4">
        <div className="flex items-center justify-start w-full h-[60px] p-8 rounded-[14px] border-2 border-[#cee0d0] bg-white mb-5">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-full p-[10px] text-[14px] rounded-l-[30px] border-none outline-none text-black"
          />
          <GreenButton
            text="Get Mun-e"
            className="hidden lg:block whitespace-nowrap"
          />
          <img
            src={phoneIcon2}
            alt="Phone Icon"
            className="block lg:hidden h-6 w-6 ml-2"
          />
        </div>
      </div>
    </section>
  );
};

export default StayTunedSection;
