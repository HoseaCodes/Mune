import React from 'react';
import PlayMockup from '../../assets/pages/home/feature-pay-section-image.png';
import PayMobileMockup from '../../assets/pages/home/feature-pay-section-image-mobile.png';
import GlowButton from '../button/Glow';

const FeaturePay = () => {
  return (
    <div className="flex flex-col-reverse tablet:flex-row-reverse laptop:flex-row items-center justify-between gap-6 laptop:gap-10 tablet:pl-6 laptop:pr-12 mt-[120px]">
      <div className='flex-1'>
        <img src={PlayMockup} className="hidden laptop:block w-full object-contain" alt="" />
        <img src={PayMobileMockup} className="laptop:hidden" alt="" />
      </div>
      <div className="flex flex-1 tablet:mb-28 px-4 tablet:p-0">
        <div className="space-y-8">
          <div className="space-y-4">
          <div className="text-3xl laptop:text-4xl font-bold">Pay Friends</div>
          <div className="text-[13px] tablet:text-base laptop:text-2xl w-full laptop:max-w-[525px]">
            Split bills and share costs effortlessly. Mun-e lets you settle up instantly, keeping
            group expenses simple and stress-free.
          </div>
          </div>
          <div className="hidden laptop:block">
            <GlowButton color="green">Get Mun-e</GlowButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePay;
