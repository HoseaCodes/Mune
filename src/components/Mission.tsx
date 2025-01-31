import React from 'react';
import missionImage from '../assets/black-couple.png';
import GreenMuneButton from '../components/GreenMuneButton';
import GlowButton from './button/Glow'
interface MissionSectionProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

const MissionSection: React.FC<MissionSectionProps> = ({ isModalOpen, setIsModalOpen }) => {
  return (
    <>
      <div className="mb-36 mt-[-88px]">
        <div className="relative w-full">
          {/* Div for mobile and tablet screens */}
          <div className="lg:hidden p-6 rounded-lg max-w-[510px] mx-auto border-t-2 border-custom-bgreen mt-16">
            <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-4">
              Our Mission: <br /> Elevate Your Finances
            </h2>
            <p className="text-black text-base sm:text-lg mb-4">
              Our mission is simple: help you get your money
              right and your knowledge tight. We&apos;re here to
              make financial literacy easy and accessible, so
              you can flex your financial skills and secure
              your bag for the future.
            </p>
            <div className="flex justify-center space-x-4">
              <GlowButton color='green' onClick={() => setIsModalOpen(!isModalOpen) }>Get Mun-e</GlowButton>
              <button onClick={() => setIsModalOpen(!isModalOpen)} className="bg-transparent text-[#010a03] font-bold py-2 px-6 rounded-lg border-2 border-custom-bgreen">
                Learn More
              </button>
            </div>
          </div>
          {/* Image */}
          <img
            src={missionImage}
            alt="Mission"
            className="max-w-full lg:max-w-[4184px] mx-auto mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[157px] rounded-[48px] border-2 border-custom-bgreen"
          />
          {/* Div for larger screens */}
          <div className="hidden lg:flex absolute inset-0 items-center justify-center">
            <div
              className="bg-custom-white p-6 lg:p-[48px] rounded-lg shadow-lg w-[510px] h-[437px] border-2 border-custom-bgreen ml-[39rem]"
              style={{
                top: '81.02px',
                left: '626px',
                padding: '48px 24px',
                gap: '56px',
                borderRadius: '24px 24px 24px 24px',
                opacity: 1,
              }}
            >
              <h2 className="text-black font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                Our Mission: <br /> Elevate Your Finances
              </h2>
              <p className="text-black text-base sm:text-lg mb-4">
                Our mission is simple: help you get your money
                right and your knowledge tight. We&apos;re here to
                make financial literacy easy and accessible,
                so you can flex your financial skills and
                secure your bag for the future.
              </p>
              <div className="flex justify-center space-x-4">
                {/* Updated GreenMuneButton with onClick handler */}
                <div>
                  <GreenMuneButton onClick={() => setIsModalOpen(!isModalOpen) } text="Get Mun-e" />
                </div>
                <button onClick={() => setIsModalOpen(!isModalOpen)} className="bg-transparent text-[#010a03] font-bold py-2 px-6 rounded-lg border-2 border-custom-bgreen">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MissionSection;