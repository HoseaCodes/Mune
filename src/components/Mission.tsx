import React from 'react';
// import GreenMuneButton from '../components/GreenMuneButton';
// import GlowButton from './button/Glow';
import familySelfie from '../assets/pages/about/family-selfie.webp';

const MissionSection: React.FC = () => {
  return (
    <div className="relative py-10 laptop:py-20 px-6 laptop:px-8 flex flex-col items-center border-2 laptop:border-none rounded-[32px] border-[#D9E9E2] laptop:bg-none">
      <div className="laptop:absolute laptop:top-0 laptop:left-0 flex flex-col gap-2 items-center laptop:items-start laptop:bg-[#F2FDF9F2] laptop:border-2 border-[#D9E9E2] rounded-[48px] max-w-fit py-8 px-6">
        <h2 className="font-bold text-4xl text-center text-[#182E26]">
          How we give back to the community:
        </h2>
        <h2 className="font-bold text-4xl text-[#19A530]">
          Mun-e Uplift.
        </h2>
      </div>
      <img
        src={familySelfie}
        className="border-2 border-[#D9E9E2] rounded-[48px] aspect-[16/10] laptop:aspect-[16/9] object-cover w-full"
        />
    </div>
  );
};

export default MissionSection;
