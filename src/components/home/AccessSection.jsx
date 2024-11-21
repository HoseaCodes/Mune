import React from 'react';
import AccessImage from '../../assets/images/access-two.png'
import CardIcon from '../../assets/icons/icon_card.svg'
import HatIcon from '../../assets/icons/hat-graduation.svg'
import PiggyIcon from '../../assets/icons/pig-icon.svg'
import SheildIcon from '../../assets/icons/sheild-icon.svg'
import GlowButton from '../button/Glow';

const AccessSection = () => {
    return (
        <div className="lg:mx-2 mx-3 mt-[80px] md:mt-[120px]">
            <div className="access-section max-w-[1184px] mx-auto rounded-[22px] md:rounded-[48px]">
                <div className="md:grid grid-cols-2 p-4 md:p-6">
                    <div className="text-stone-100 flex justify-start">
                        <div className='space-y-4 md:mt-3 md:max-w-[509px]'>
                            <div className="text-[22px] md:text-4xl font-bold">Exclusive Early Access</div>
                            <div className="primary-text-white w-[250px] md:w-full">
                                Get early access to cutting-edge financial tools and features designed just for you.</div>
                            <div>
                                <GlowButton color='white'>Get Mun-e</GlowButton>
                                {/* <button className='button-two text-[15px] md:text-base w-[133px] h-[44px] border-2 bg-stone-100 border-neutral-300 rounded-xl text-black font-semibold'>Get Mun-e</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-end mt-10 md:mt-0 border-[#CEE0D0]">
                        <img src={AccessImage} className="" alt="" />
                    </div>
                </div>
            </div>
            <div className='md:grid grid-cols-4 md:max-w-[1184px] mx-auto mt-20 space-y-8 md:space-y-0 md:mt-24 md:px-6'>
                <div className='space-y-2'>
                    <img src={CardIcon} alt="" />
                    <div className='text-[15px] font-semibold'>Send and Receive Money Instantly</div>
                    <div className='text-[13px] font-normal me-12'>Make quick and easy payments to friends and family with just a few taps.</div>
                </div>
                <div className='space-y-2'>
                    <img src={HatIcon} alt="" />
                    <div className='text-[15px] font-semibold'>Learn Money Skills Anytime, <br /> Anywhere</div>
                    <div className='text-[13px] font-normal me-12'>Access bite-sized financial lessons and tips designed to boost your financial literacy on the go.</div>
                </div>
                <div className='space-y-2'>
                    <img src={PiggyIcon} alt="" />
                    <div className='text-[15px] font-semibold'>Smart Saving Tools for Your Goals</div>
                    <div className='text-[13px] font-normal me-12'>Set savings goals and track your progress effortlessly to build a better financial future.</div>
                </div>
                <div className='space-y-2'>
                    <img src={SheildIcon} alt="" />
                    <div className='text-[15px] font-semibold'>Protection You Can Trust</div>
                    <div className='text-[13px] font-normal me-12'>Your transactions are protected with top-tier security protocols to keep your money safe.</div>
                </div>
            </div>
        </div>
    )
}

export default AccessSection