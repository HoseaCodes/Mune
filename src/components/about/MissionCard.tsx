import React from 'react';
import GlowButton from '../button/Glow';

const MissionCard: React.FC<{
  title: string;
  copy: string;
  imageSrc: string;
  displayButtons?: boolean;
  reverseOrder?: boolean;
}> = ({
  title,
  copy,
  imageSrc,
  displayButtons,
  reverseOrder,
}) => (
  <div
    className={`flex flex-col ${reverseOrder ? 'tablet:flex-row-reverse' : 'tablet:flex-row'} justify-between gap-10 items-center`}
  >
    <div className="flex-1 flex flex-col gap-4 laptop:gap-6 w-full">
      <h3 className="text-xl tablet:text-3xl laptop:text-4xl font-bold">
        {title}
      </h3>
      <p className="text-[13px] tablet:text-base laptop:text-[22px] w-full">
        {copy}
      </p>
      {displayButtons && (
        <div className="hidden tablet:flex gap-4 mt-2">
          <GlowButton color="green">Get mun-e</GlowButton>
          <button className="text-black font-semibold h-11 w-[131px] border-2 rounded-xl border-[#CEE0D0] text-[15px]">
            Learn More
          </button>
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
      <div className="tablet:hidden flex mt-4 gap-2">
        <GlowButton color="green">Get mun-e</GlowButton>
        <button className="text-black font-semibold h-11 w-[131px] border-2 rounded-xl border-[#CEE0D0] text-[15px]">
          Learn More
        </button>
      </div>
    )}
  </div>
);

export default MissionCard;
