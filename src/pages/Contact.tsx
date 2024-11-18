import React from 'react';
import {
  ContactWrapper,
  TeamImages,
} from '../styles/ContactStyles';
import Header from '../components/Header';
import Footer from '../components/Footer/Footer';
import MarquesZahir from '../assets/Marques-Zahir.png'; // Replace with actual image path
import CaseyBass from '../assets/Casey-Bass.png'; // Replace with actual image path
import DanaSimone from '../assets/Dana-Simone.png'; // Replace with actual image path
import connectTeam from '../assets/connect-team.webp'; // Replace with actual image path
import ContactForm from '../components/contact/contact-form/ContactForm';
import FAQSection from '../components/contact/faq-section/FAQSection';

const Contact: React.FC = () => {
  const teamImages = [
    {
      src: MarquesZahir,
      alt: 'image of Marques Zahir',
    },
    {
      src: CaseyBass,
      alt: 'image of Casey Bass',
    },
    {
      src: DanaSimone,
      alt: 'image of Dana Simone',
    },
  ];

  return (
    <>
      <Header />
      <ContactWrapper>
        <div className="flex flex-col items-center max-w-[1186px] w-full tablet:gap-24 laptop:gap-32 mx-auto">
          <div className="flex tablet:flex-row flex-col gap-12 tablet:gap-4 laptop:gap-20 flex-nowrap px-6">
            <div className="w-full flex flex-col gap-6">
              <h1 className="font-bold text-5xl text-black leading-[55px] p-6 w-full tablet:max-w-[15ch] text-center laptop:text-left">
                Connect with Our Team.
              </h1>
              <img
                src={connectTeam}
                alt={'mun-e team'}
                className="w-full rounded-2xl laptop:rounded-[48px]"
              />
            </div>
            <div className="w-full flex flex-col flex-nowrap tablet:items-end gap-6">
              <ContactForm />
              <div className="flex items-center justify-center tablet:justify-start w-full">
                <TeamImages>
                  {teamImages.map(({ src, alt }) => (
                    <img
                      key={alt}
                      className="w-[45px] h-[45px] laptop:w-[67.5px] laptop:h-[67.5px] rounded-full border-[2.82px] border-[#f2f7f4] -mr-5 relative transition-transform duration-300 ease-in-out"
                      src={src}
                      alt={alt}
                    />
                  ))}
                </TeamImages>
                <p className="text-base font-semibold text-black shrink ml-4">
                  Hang Tight, We'll Reply Shortly.
                </p>
              </div>
            </div>
          </div>
          <FAQSection />
        </div>
      </ContactWrapper>
      <Footer />
    </>
  );
};

export default Contact;
