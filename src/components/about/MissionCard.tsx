import React from 'react';
import GlowButton from '../button/Glow';
import { LearnMoreButton } from '../Button';

const MissionCard: React.FC<{
  title: string;
  copy: string;
  imageSrc: string;
  displayButtons?: boolean;
  reverseOrder?: boolean;
}> = ({ title, copy, imageSrc, displayButtons, reverseOrder }) => (
  <div className={`flex flex-col ${reverseOrder ? 'tablet:flex-row-reverse' : 'tablet:flex-row'} justify-between gap-10 items-center`}>
    <div className="flex-1 flex flex-col gap-4 w-full">
      <h3 className="text-[22px] md:text-4xl font-bold">{title}</h3>
      <p className="primary-text w-full">{copy}</p>
      {displayButtons && (
        <div className="hidden tablet:flex gap-4">
          <GlowButton color="green">Get Mun-e</GlowButton>
          <LearnMoreButton text="Learn More" />
        </div>
      )}
    </div>
    <div className="flex-1">
      <img
        src={imageSrc}
        className="border-2 border-[#D9E9E2] rounded-[48px] aspect-[272/165] tablet:aspect-square laptop:aspect-[281/184] object-cover w-full"
      />
    </div>
    {displayButtons && (
        <div className="tablet:hidden flex gap-4">
          <GlowButton color="green">Get Mun-e</GlowButton>
          <LearnMoreButton text="Learn More" />
        </div>
      )}
  </div>
);

export default MissionCard;
