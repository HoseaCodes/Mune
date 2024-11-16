import React from 'react';
// import GreenMuneButton from '../components/GreenMuneButton';
// import GlowButton from './button/Glow';
import familySelfie from '../assets/pages/about/family-selfie.webp';

const MissionSection: React.FC = () => {
  return (
    <div className="relative py-20 px-8">
      <div className="absolute top-0 left-0 flex flex-col gap-2 bg-[#F2FDF9F2] border-2 border-[#D9E9E2] rounded-[48px] max-w-fit py-8 px-6">
        <h2 className="font-bold text-4xl text-[#182E26]">
          How we give back to the community:
        </h2>
        <h2 className="font-bold text-4xl text-[#19A530]">
          Mun-e Uplift.
        </h2>
      </div>
      <img
        src={familySelfie}
        className="border-2 border-[#D9E9E2] rounded-[48px]"
      />
    </div>
  );
};

export default MissionSection;
