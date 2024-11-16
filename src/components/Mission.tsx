import React from 'react';
import MissionCard from './about/MissionCard';
import ProgramBenefitsCard from './about/ProgramBenefitsCard';
import familySelfie from '../assets/pages/about/family-selfie.webp';
import empowermentImage from '../assets/pages/about/empowerment.webp';
import donationCommitmentImage from '../assets/pages/about/donation-commitment.webp';
import whyWeDoThisImage from '../assets/pages/about/why-we-do-this.webp';

import fundingIcon from '../assets/pages/about/benefits-funding-icon.svg';
import mentorshipIcon from '../assets/pages/about/benefits-mentorship-icon.svg';
import scholoarshipsIcon from '../assets/pages/about/benefits-scholarships-icon.svg';

const MissionSection: React.FC = () => {
  return (
    <div className="flex flex-col gap-20 max-w-[1184px] mx-6 laptop:mx-12">
      <div className="relative pt-10 laptop:pt-20 px-6 laptop:px-8 flex flex-col items-center border-2 laptop:border-none rounded-[32px] border-[#D9E9E2] laptop:bg-none">
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
      <div className="flex flex-col gap-20">
        <MissionCard
          title="Empowering Black Entrepreneurs to Thrive"
          copy="The Mun-e Uplift Program is a financial and mentorship initiative designed to empower Black small business owners and aspiring entrepreneurs."
          imageSrc={empowermentImage}
        />
        <MissionCard
          title="Donation Commitment"
          copy="Through this program, Mun-e donates 10% of its profits to award grants and scholarships to deserving individuals."
          imageSrc={donationCommitmentImage}
          reverseOrder
        />
        <MissionCard
          title="Why We Do This"
          copy="Mun-e recognizes the unique challenges faced by Black entrepreneurs in securing funding and guidance. The Mun-e Uplift Program bridges this gap by providing critical financial resources and mentorship opportunities to help Black-owned businesses flourish."
          imageSrc={whyWeDoThisImage}
          displayButtons
        />
      </div>
      <div className="flex flex-col laptop:flex-row gap-4">
        <div className="flex flex-col tablet:flex-row gap-4">
          <ProgramBenefitsCard
            title="Grant Funding"
            copy="Uplift grants provide financial support to help cover essential business needs such as equipment, marketing, and inventory"
            imageSrc={fundingIcon}
          />
          <ProgramBenefitsCard
            title="Mentorship"
            copy="Grantees will be paired with experienced business professionals for personalized mentorship and guidance."
            imageSrc={mentorshipIcon}
          />
        </div>
        <ProgramBenefitsCard
          title="Scholarship Opportunities"
          copy="Scholarships are available to support educational programs relevant to business growth and entrepreneurship."
          imageSrc={scholoarshipsIcon}
        />
      </div>
    </div>
  );
};

export default MissionSection;
