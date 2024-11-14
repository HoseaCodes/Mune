import React, { Dispatch, SetStateAction } from 'react';
import chainLogoWhite from '../../../assets/logo/chain-logo-white.svg';

const ContactSuccessCard: React.FC<{
  setDisplaySubmitCard: Dispatch<SetStateAction<boolean>>;
}> = ({ setDisplaySubmitCard }) => (
  <div className="absolute flex flex-col justify-between items-start z-10 bg-[#1AAE33] h-full w-full px-4 py-8 rounded-[48px]">
    <div className="flex flex-col gap-4">
      <p className="text-white font-bold text-xl">
        Thanks for Contacting Us.
      </p>
      <p className="text-white text-xl">
        We&apos;ll get back to you shortly!
      </p>
    </div>
    <div>
      <p className="text-white font-bold">
        have another inquiry?
      </p>
      <button
        className="text-white underline"
        onClick={() => setDisplaySubmitCard(false)}
      >
        Contact Us
      </button>
    </div>
    <img
      src={chainLogoWhite}
      className="w-[2rem]"
      alt="mun-e chain logo"
    />
  </div>
);

export default ContactSuccessCard;
