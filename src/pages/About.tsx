import React from 'react';
import ashley from '../assets/Ashley-S.png';
import bryan from '../assets/Bryan.png';
import arrow from '../assets/arrow.png';
import mainImage from '../assets/pinkshirt.png';
import NotificationBubble from '../components/NotificationBubbleCard';
import MeetTheTeam from '../components/meet-the-team/MeetTheTeam';
import MissionSection from '../components/Mission';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header';
import GlowButton from '../components/button/Glow';

const AboutSection: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center">
        <div className="bg-[#19A530] tablet:mx-6 laptop:mx-12 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 py-8 sm:py-16 md:py-20 rounded-[48px] border-2 max-w-full lg:max-w-[1184px] lg:h-[660.92px] mx-auto mt-[40px] sm:mt-[80px] md:mt-[120px] lg:mt-[37px]">
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-4 sm:space-y-6 text-center lg:text-left">
            <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
              <span className="block sm:hidden">
                Your Money.
                <br /> Mastered.
              </span>
              <span className="hidden sm:block">
                Your Money. Mastered.
              </span>
            </h1>
            <p className="text-white text-base sm:text-lg">
              Own your finances. Mun-e simplifies sending,
              saving & growing your money. Learn on the go &
              build wealth with your community. Download &
              take control!
            </p>
            <div className="flex justify-center lg:justify-start w-full">
              <GlowButton color="white">
                Get Mun-e
              </GlowButton>
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
        <MissionSection />
      </div>
      <Footer />
    </>
  );
};

export default AboutSection;
