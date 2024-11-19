import React from 'react';

const ProgramBenefitsCard: React.FC<{
  title: string;
  copy: string;
  imageSrc: string;
}> = ({ title, copy, imageSrc }) => (
  <div className="flex-2 flex flex-col gap-2 tablet:border rounded-3xl tablet:py-4 tablet:px-3">
    <img src={imageSrc} alt="" className="w-6" />
    <div className="text-[15px] font-semibold">{title}</div>
    <div className="text-[13px] font-normal me-12">
      {copy}
    </div>
  </div>
);

export default ProgramBenefitsCard;
