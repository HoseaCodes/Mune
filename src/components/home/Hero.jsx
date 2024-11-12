import React, { useState, useRef } from 'react';
import GooglePlay from '../../assets/images/google-play.svg';
import AppStore from '../../assets/images/app-store.svg';
import PlayIcon from '../../assets/icons/play.svg';
import PauseIcon from '../../assets/icons/pause.png';
import WhatsappIcon from '../../assets/icons/whatsapp.svg';
import heroVideo from '../../assets/videos/hero.mp4';
import heroImage from '../../assets/images/hero.png';
import GoogleIcon from '../GoogleIcon';
import AppleIcon from '../AppleIcon';
import HeroSignUpForm from './HeroSignUpForm';

const Hero = () => {
  const [isVideoPlaying, setIsVideoPlaying] =
    useState(false);
  const videoRef = useRef(null);

  const handlePlayPauseVideo = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <div className="hero-section lg:mx-2 mx-3">
      <div className="relative w-full sm:max-w-7xl mx-auto rounded-3xl h-[476px] sm:h-[700px] sm:rounded-[48px] overflow-hidden">
        <div
          className={`absolute top-0 left-0 bg-right md:bg-none w-full h-full bg-cover  bg-no-repeat transition-opacity duration-300 ${isVideoPlaying ? 'opacity-0' : 'opacity-100'}`}
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <video
          ref={videoRef}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${isVideoPlaying ? 'opacity-100' : 'opacity-0'}`}
          src={heroVideo}
          loop
          muted
          playsInline
        />
        <div className="w-full flex justify-start px-4 py-6 md:items-center h-[476px] sm:h-[700px] bg-black rounded-3xl bg-opacity-50 absolute sm:rounded-[48px]">
          <div className="md:ms-6 ms-0 md:w-2/4 w-full space-y-10 flex flex-col justify-between sm:justify-normal sm:items-start ">
            <div className="hero-text text-stone-100 md:w-[549px] w-full font-bold text-[34px] sm:text-5xl ">
              Easy Payments. <br />
              Make Mun-e Moves.
            </div>
            <HeroSignUpForm />
            <div className="hidden sm:flex gap-3 items-center">
              <a href="#/">
                <img src={GooglePlay} alt="Google Play" />
              </a>
              <a href="#/">
                <img src={AppStore} alt="App Store" />
              </a>
            </div>
            <div className="sm:hidden flex justify-center items-center w-full">
              <form className="w-[240px]">
                <div className="border-2 bg-white px-2 border-neutral-300 flex justify-start gap-2 items-center rounded-[12px] h-[44px]">
                  <img
                    src={WhatsappIcon}
                    alt="WhatsApp Icon"
                  />
                  <input
                    className="w-webkit-fill-available appearance-none placeholder:text-sm placeholder:text-black bg-transparent rounded text-black leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your mobile number"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <button
          href="#/"
          onClick={handlePlayPauseVideo}
          className="flex justify-center items-center gap-1 rounded-xl bg-white bg-opacity-30 border border-neutral-300 h-11
                      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:top-auto md:left-auto md:transform-none md:bottom-10 md:right-10
                      md:w-[240px] w-[64px]
                    "
        >
          <div className="w-4 h-6 flex justify-start items-center">
            {isVideoPlaying ? (
              <img
                src={PauseIcon}
                className="w-4 h-4"
                alt="Play/Pause Icon"
              />
            ) : (
              <img
                src={PlayIcon}
                className="ms-0.5 w-3 h-3"
                alt="Play/Pause Icon"
              />
            )}
          </div>
          <span className="text-[15px] font-semibold text-stone-100 hidden md:block">
            Watch the Mun-e story
          </span>
        </button>
      </div>
      <div className="flex justify-center items-center mt-6">
        <div className="md:hidden flex gap-3 items-center">
          <GoogleIcon />
          <AppleIcon />
        </div>
      </div>
    </div>
  );
};

export default Hero;
