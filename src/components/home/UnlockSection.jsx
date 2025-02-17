/* eslint-disable react/prop-types */
import React from 'react';
import CardMockup from '../../assets/images/card.png'
import GlowButton from '../button/Glow';

const UnlockSection = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <div className="lg:mx-2 mx-3 mt-[80px] md:mt-[120px]">
            <div className="play-section md:max-w-[1184px] mx-auto">
                <div className="md:grid grid-cols-2 gap-10 md:gap-32 overflow-hidden flex flex-col-reverse md:flex-row">
                    <div className="flex justify-center items-center">
                        <img src={CardMockup} className="w-[244px] md:w-full" alt="" />
                    </div>
                    <div className="flex justify-start items-center">
                        <div className='space-y-4'>
                            <div className="text-[22px] md:text-4xl font-bold">Unlock Special Perks</div>
                            <div className="primary-text w-full md:w-[525px]">
                                Enjoy exclusive perks and rewards as a thank you for being an early supporter.
                            </div>
                            <div className='pt-3'>
                                <GlowButton onClick={() => setIsModalOpen(!isModalOpen)} color='green'>Get Mun-e</GlowButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UnlockSection