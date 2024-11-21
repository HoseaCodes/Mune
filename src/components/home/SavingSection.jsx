import React from 'react';
import SavingMockup from '../../assets/images/saving-mockup.png'
import SavingMobileMockup from '../../assets/images/saving-mobile-mockup.png'
import FlagIcon from '../../assets/icons/flag.svg'
import TableIcon from '../../assets/icons/table.svg'
import TrophyIcon from '../../assets/icons/trophy.svg'
import GlowButton from '../button/Glow';

const SavingSection = () => {
    return (
        <div className="lg:mx-2 mx-3 md:mt-[120px] mt-[80px]">
            <div className="saving-section px-6 py-10 md:max-w-[1184px] mx-auto rounded-3xl md:rounded-[48px]">
                <div className="lg:grid grid-cols-2 md:h-[610px]">
                    <div className="text-stone-100 flex justify-start items-center md:-mt-20 md:ms-10">
                        <div className='space-y-2'>
                            <div className="text-[22px] md:text-4xl font-bold">Hit Your Savings Goals</div>
                            <div className="primary-text-white w-full md:w-[429px]">
                                Use our interactive tools to set personal savings goals and track your progress with real-time updates.
                            </div>
                            <div className='hidden md:block pt-3'>
                                <GlowButton color='white'>Start Saving</GlowButton>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-start md:justify-end md:-me-10">
                        <img src={SavingMockup} className="hidden md:block w-full" alt="" />
                        <img src={SavingMobileMockup} className='md:hidden block mt-4' alt="mockup" />
                    </div>
                    <div className='mt-10 md:hidden block'>
                        <button className='button-two text-[15px] md:text-base w-[133px] h-[44px] border-2 bg-stone-100 border-neutral-300 rounded-xl text-black font-semibold'>Start Saving</button>
                    </div>
                </div>
            </div>
            <div className='md:hidden border-2 space-y-4 px-3 shadow py-6 rounded-3xl border-neutral-300 mt-8'>
                <div className='flex items-center gap-3'>
                    <img src={FlagIcon} alt="" />
                    <div>
                        <div className='text-black text-xs font-bold'>Set Your Savings Target</div>
                        <div className='text-black text-xs font-medium opacity-75'>Choose what you&apos;re saving for</div>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={TableIcon} alt="" />
                    <div>
                        <div className='text-black text-xs font-bold'>Set Your Savings Target</div>
                        <div className='text-black text-xs font-medium opacity-75'>Choose what you&apos;re saving for</div>
                    </div>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={TrophyIcon} alt="" />
                    <div>
                        <div className='text-black text-xs font-bold'>Set Your Savings Target</div>
                        <div className='text-black text-xs font-medium opacity-75'>Choose what you&apos;re saving for</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavingSection