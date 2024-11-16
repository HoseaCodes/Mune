import React from 'react';
import PlayMockup from '../../assets/pages/home/feature-pay-section-image.png';
import PayMobileMockup from '../../assets/pages/home/feature-pay-section-image-mobile.png';
import GlowButton from '../button/Glow';

const FeaturePay = () => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row-reverse md:flex-row items-center justify-between gap-10">
      <div className='flex-1'>
        <img src={PlayMockup} className="hidden md:block w-full object-contain" alt="" />
        <img src={PayMobileMockup} className="md:hidden" alt="" />
      </div>
      <div className="flex flex-1 items-center">
        <div className="space-y-4">
          <div className="text-[22px] md:text-4xl font-bold">Pay Friends</div>
          <div className="primary-text w-full md:max-w-[525px]">
            Split bills and share costs effortlessly. Mun-e lets you settle up instantly, keeping
            group expenses simple and stress-free.
          </div>
          <div className="hidden md:block">
            <GlowButton color="green">Get Mun-e</GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePay;
