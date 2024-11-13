import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import LessonCard from '../components/LessonCard';
import TrendingCard from '../components/TrendingCard';
import StayTunedSection from '../components/StayTuned';
import { GreenButton } from '../components/Button';
import phoneIcon2 from '../assets/phone-icon2.png';
import subscribeImage from '../assets/student.png'; // Replace with actual image path
import lessonImage1 from '../assets/pinkjacketvideo.png'; // Replace with actual image path
import lessonImage2 from '../assets/jeanshirt.png'; // Replace with actual image path
import lessonImage3 from '../assets/throwingmune.png'; // Replace with actual image path
import trendingImage1 from '../assets/munefan.png'; // Replace with actual image path
import trendingImage2 from '../assets/openstore.png'; // Replace with actual image path
import trendingImage3 from '../assets/pinkjacketsmile.png'; // Replace with actual image path
import trendingImage4 from '../assets/familymune.png'; // Replace with actual image path
import { Link } from 'react-router-dom';

const Subscribe: React.FC = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center min-h-screen p-5">
        <section className="flex flex-col items-center justify-center w-full max-w-5xl py-6 md:flex-row md:justify-between">
          <div className="text-center md:text-left md:mr-5 mt-10 md:mt-[-4rem]">
            <h1 className="font-poppins text-3xl font-bold leading-tight text-center text-[#010a03] mb-6 md:mb-0 md:w-[40.58rem] md:text-5xl md:leading-tight md:text-left md:font-poppins">
              Elevate Your Financial IQ.
            </h1>
            <p className="font-poppins text-lg font-normal leading-relaxed text-center text-[#010a03] mb-8 md:mb-4 md:w-[30.58rem] md:text-xl md:leading-relaxed md:text-left">
              Stay ahead in your financial journey by
              subscribing to updates on our newest
              educational videos and resources!
            </p>
            <div className="mb-10 md:mb-0 md:self-start md:justify-center">
              <GreenButton text="Get Mun-e" />
            </div>
          </div>
          <img
            src={subscribeImage}
            alt="Subscribe"
            className="w-full max-w-md h-full rounded-lg"
          />
        </section>
        {/* LessonCards Section */}
        <div className="w-full max-w-5xl text-left mt-16 mb-8">
          <div className="flex overflow-x-scroll scroll-smooth space-x-5 scrollbar-hide md:overflow-x-visible md:flex-nowrap">
            <LessonCard
              title="Budgeting Basics: How to Manage Your Money"
              description="Learn the fundamentals of creating and maintaining a budget to keep your finances on track."
              buttonText="Start Lesson"
              image={lessonImage1}
              bgColor="bg-custom-green"
              buttonTextColor="text-custom-green"
            />
            <LessonCard
              title="Credit Scores 101: Building/Maintaining Good Credit"
              description="Understand what a credit score is, how it's calculated, tips for improving and maintaining a good score."
              buttonText="Start Lesson"
              image={lessonImage2}
              bgColor="bg-custom-purple"
              buttonTextColor="text-custom-purple"
            />
            <LessonCard
              title="Investing for Beginners: Growing Your Wealth"
              description="Get introduced to the basics of investing, different types of investments, and how to start investing wisely."
              buttonText="Start Lesson"
              image={lessonImage3}
              bgColor="bg-custom-blue"
              buttonTextColor="text-custom-blue"
            />
          </div>
        </div>
        <StayTunedSection />

        <div className="w-full max-w-5xl text-left mt-16 mb-8">
          <h2 className="text-2xl font-bold mb-5">
            Trending
          </h2>
          <div className="flex overflow-x-scroll scroll-smooth space-x-3 scrollbar-hide md:overflow-x-visible md:flex-nowrap">
            <TrendingCard
              title="Growing Your Wealth"
              image={trendingImage1}
            />
            <TrendingCard
              title="Strategies to Pay Off Loans"
              image={trendingImage2}
            />
            <TrendingCard
              title="How to Build an Emergency Fund"
              image={trendingImage3}
            />
            <TrendingCard
              title="How to Manage Your Money"
              image={trendingImage4}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Subscribe;
