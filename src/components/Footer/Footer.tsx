import React from 'react';
import Logo from '../../assets/logo/logo-white.svg';
import FbIcon from '../../assets/icons/fb.svg';
import InstaIcon from '../../assets/icons/insta.svg';
import TiktokIcon from '../../assets/icons/tiktok.svg';
import AppleIcon from '../AppleIcon';
import GoogleIcon from '../GoogleIcon';
import FooterSignUpForm from './FooterSignUpForm';

const Footer: React.FC = () => {
  return (
    <footer className="md:h-[673px] rounded-tl-[32px] md:rounded-tl-[48px] mt-[120px] rounded-tr-[32px] md:rounded-tr-[48px] p-10">
      <img
        src={Logo}
        className="md:hidden block w-[85px]"
        alt="logo"
      />
      <div className="flex justify-center items-center flex-col gap-8 pt-10 md:pt-24">
        <div className="text-stone-100 text-[34px] text-center leading-9 md:text-5xl font-bold">
          Don’t Sleep! &nbsp;
          <br className="block md:hidden" />
          Sign Up Now.
        </div>
        <FooterSignUpForm />
      </div>
      <div className="md:grid grid-cols-2 mt-8 md:mt-28">
        <div className="flex flex-col gap-8 justify-start">
          <img
            src={Logo}
            className="hidden md:block w-[190px]"
            alt="logo"
          />
          <div className="text-[22px] md:text-[28px] md:text-start text-center font-bold text-stone-100">
            App Coming Soon!
          </div>
          <div className=" gap-3 items-center hidden md:flex">
            <GoogleIcon />
            <AppleIcon />
          </div>
        </div>
        <div className="flex flex-col gap-8 mt-9 md:mt-0 items-start md:items-end">
          <div className="md:flex gap-12">
            <div className="hidden md:flex flex-col gap-6">
              <div className="text-[20px] text-stone-100 font-semibold">
                Legal
              </div>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Terms of use
              </a>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Privacy Policy
              </a>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Security Policy
              </a>
              <a
                href="#/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Cookie Settings
              </a>
            </div>
            <div className="flex flex-col gap-4 md:gap-6">
              <div className="text-[20px] hidden md:block text-stone-100 font-semibold">
                Navigation
              </div>
              <a
                href="/"
                className="text-[20px] text-stone-100 font-normal"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-[20px] text-stone-100 font-normal"
              >
                About
              </a>
              <a
                href="/contact"
                className="text-[20px] text-stone-100 font-normal"
              >
                Contact
              </a>
              <a
                href="/subscribe"
                className="text-[20px] text-stone-100 font-normal"
              >
                Subscribe
              </a>
            </div>
            <div className="flex flex-col gap-6 mt-16 md:mt-0">
              <div className="hidden md:flex text-[20px] text-stone-100 font-semibold">
                Subscribe
              </div>
              <div className="flex items-center justify-start gap-3">
                <a
                  href="#/"
                  className="text-[20px] text-stone-100 font-normal"
                >
                  <img src={FbIcon} alt="" />
                </a>
                <a
                  href="#/"
                  className="text-[20px] text-stone-100 font-normal"
                >
                  <img src={InstaIcon} alt="" />
                </a>
                <a
                  href="#/"
                  className="text-[20px] text-stone-100 font-normal"
                >
                  <img src={TiktokIcon} alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
