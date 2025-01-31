/* eslint-disable react/prop-types */
import React from 'react';
import LearnImage from '../../assets/images/learn.jpg'
import GlowButton from '../button/Glow';

const FeatureLearn = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <div className='lg:mx-2 mx-3 mt-[80px] md:mt-0'>
            <div className='learn-section max-w-[1120px] border-2 border-[#CEE0D0] mx-auto hidden md:flex justify-start items-center h-[700px] rounded-[48px]'>
                <div className='md:w-[510px] ms-10 space-y-8 border-2 border-[#CEE0D0] rounded-3xl p-6 bg-white'>
                    <div className="text-4xl font-bold">Learn Together</div>
                    <div className="secondary-text">
                        Grow with friends using Mun-e’s lessons on budgeting, investing, and saving. Our app makes elevating your financial IQ together fun.
                    </div>
                    <div className='flex gap-4'>
                        <GlowButton onClick={() => setIsModalOpen(!isModalOpen)} color='green'>Start a Lesson</GlowButton>
                        <button onClick={() => setIsModalOpen(!isModalOpen)} className='text-black font-semibold h-11 w-[131px] border-2 rounded-xl border-[#CEE0D0] text-[15px]'>Learn More</button>
                    </div>
                </div>
            </div>
            <div className='block md:hidden space-y-8'>
                <img src={LearnImage} className='rounded-3xl border-2 border-[#CEE0D0]' alt="" />
                <div className=' md:space-y-8 space-y-6 border-2 border-[#CEE0D0] rounded-3xl p-6 bg-white'>
                    <div className="text-[22px] font-bold">Learn Together</div>
                    <div className="secondary-text">
                        Grow with friends using Mun-e’s lessons on budgeting, investing, and saving. Our app makes elevating your financial IQ together fun.
                    </div>
                    <div className='flex md:flex-row flex-col md:gap-4 gap-3'>
                        <button onClick={() => setIsModalOpen(!isModalOpen)} className='button-one text-stone-100 font-semibold h-11 w-[131px] rounded-xl text-[15px]'>Start a Lesson</button>
                        <button onClick={() => setIsModalOpen(!isModalOpen)} className=' text-black font-semibold h-11 w-[131px] border-2 rounded-xl border-[#CEE0D0] text-[15px]'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeatureLearn;