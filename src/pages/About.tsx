import React from 'react';
import ashley from '../assets/Ashley-S.png';
import bryan from '../assets/Bryan.png';
import arrow from '../assets/arrow.png';
import mainImage from '../assets/pinkshirt.png';
import NotificationBubble from '../components/NotificationBubbleCard';
import WhiteMuneButton from '../components/WhiteMuneButton';
import MeetTheTeam from '../components/MeetTheTeam';
import MissionSection from '../components/Mission';
import GlowButton from '../components/button/Glow';
import Layout from '../components/home/Layout';

const AboutSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  return (
    <Layout modalOpen={isModalOpen}>
      <div>
        <div className="bg-[#19A530] flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-8 sm:py-16 md:py-20 rounded-[48px] border-2 max-w-full lg:max-w-[1184px] lg:h-[660.92px] mx-auto mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[37px]">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="block sm:hidden">
                Send It.
                <br /> Save It.
                <br /> Earn it.
                <br /> Learn It.
              </span>
              <span className="hidden sm:block">
                Send It. Save It. Earn it. Learn It.
              </span>
            </h1>
            <p className="text-white text-base sm:text-lg">
              COMING SOON: Experience convenience and knowledge with our
              app. Simplify your financial life and boost
              your money know-how.
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <GlowButton onClick={() => setIsModalOpen(!isModalOpen)} color='white'>Get Mun-e</GlowButton>
            </div>
          </div>
          <div className="relative w-full lg:w-1/2 mt-16 lg:mt-0">
            <img
              src={mainImage}
              alt="Main"
              className="rounded-lg w-full lg:w-[99%] h-auto mx-auto"
            />
            <NotificationBubble
              image={bryan}
              name="Bryan Just"
              message="Completed a lesson!"
              extraInfo="+25xp"
              position="top-right"
            />
            <NotificationBubble
              image={ashley}
              name="Ashley S."
              amount="+$250"
              position="bottom-left"
              message={''}
            />
            <NotificationBubble
              image={arrow}
              name="Profile"
              message="Almost there! Goal is 75% complete."
              position="bottom-right"
            />
          </div>
        </div>
        <MeetTheTeam />
        <MissionSection setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
      </div>
    </Layout>
  );
};

export default AboutSection;
