/* eslint-disable react/prop-types */
import React from 'react';
import PlayMockup from '../../assets/images/play-mockup.png';
import PayMobileMockup from '../../assets/images/pay-mobile.png';
import GlowButton from '../button/Glow';

const FeaturePay = ({ setIsModalOpen, isModalOpen }) => {
  return (
    <div className="lg:mx-2 mx-3 mt-[80px] md:mt-[120px]">
      <div className="play-section max-w-7xl mx-auto ">
        <div className="md:grid grid-cols-2 gap-10 md:h-[620px] overflow-hidden  flex flex-col-reverse md:flex-row">
          <div className="flex justify-center">
            <img
              src={PlayMockup}
              className=" hidden md:block md:w-full"
              alt=""
            />
            <img
              src={PayMobileMockup}
              className="md:hidden"
              alt=""
            />
          </div>
          <div className="md:h-[620px]  flex justify-start items-center">
            <div className="space-y-4">
              <div className=" text-[22px] md:text-4xl font-bold">
                Pay Friends
              </div>
              <div className="primary-text w-full md:w-[525px]">
                Split bills and share costs effortlessly.
                Mun-e lets you settle up instantly, keeping
                group expenses simple and stress-free.
              </div>
              <div className="hidden md:block">
                <GlowButton onClick={() => setIsModalOpen(!isModalOpen)} color='green'>Get Mun-e</GlowButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePay;
