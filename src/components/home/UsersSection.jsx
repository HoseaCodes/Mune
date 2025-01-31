import React, { useState, useRef, useEffect } from 'react';
import UserOne from '../../assets/images/user1.png';
import UserTwo from '../../assets/images/user2.png';
import UserThree from '../../assets/images/user3.png';

const UsersSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const [itemWidth, setItemWidth] = useState(449); // Default to desktop width
    const sliderRef = useRef(null);

    useEffect(() => {
        const updateItemWidth = () => {
            if (window.innerWidth < 768) {
                setItemWidth(230); // Mobile width
            } else {
                setItemWidth(449); // Desktop width
            }
        };

        // Initial check
        updateItemWidth();

        // Update on resize
        window.addEventListener('resize', updateItemWidth);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('resize', updateItemWidth);
        };
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    };

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        document.body.style.cursor = 'grabbing';
        document.body.style.userSelect = 'none';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';

        if (translateX > 100 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (translateX < -100 && currentIndex < 2) { // Only 3 items, so max index is 2
            setCurrentIndex(currentIndex + 1);
        }
        setTranslateX(0);
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        document.body.style.cursor = 'default';
        document.body.style.userSelect = 'auto';

        if (translateX > 100 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (translateX < -100 && currentIndex < 2) { // Only 3 items, so max index is 2
            setCurrentIndex(currentIndex + 1);
        }
        setTranslateX(0);
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            handleMouseUp();
        }
    };

    return (
        <div className='mx-3 users-section mt-[80px] md:mt-[120px]'>
            <div className=' md:max-w-[1184px] mx-auto relative'>
                <div className="relative ms-auto w-[1600px]" >
                    <div className='w-screen md:w-full h-full user-section absolute z-50 pointer-events-none'></div>
                    <div className='mb-14'>
                        <div className="text-[22px] md:text-4xl font-bold">Hear from Our Users</div>
                        <div className="primary-text w-[330px] md:w-[710px] mt-4">
                            See what our early adopters are saying about how Mun-e has streamlined their financial operations and enhanced their learning.
                        </div>
                    </div>
                    <div
                        className="overflow-hidden cursor-grab relative z-40"
                        ref={sliderRef}
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                        onMouseLeave={handleMouseLeave}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                    >
                        <div
                            className={`flex gap-2 md:gap-10 transition-transform duration-500 ease-out`}
                            style={{
                                transform: `translateX(calc(-${currentIndex * itemWidth}px + ${translateX}px))`,
                                transition: isDragging ? 'none' : 'transform 0.5s ease-out'
                            }}
                        >
                            <div className="w-[230px] md:w-[449px] border-4 rounded-3xl md:rounded-[36px] space-y-6 p-4 md:p-8 border-[#CEE0D0]">
                                <div className='flex items-center gap-4'>
                                    <img src={UserOne} className='w-[33px] md:w-auto' alt="User One" />
                                    <div>
                                        <div className='text-black font-bold text-xs md:text-sm'>Mary Thomas</div>
                                        <div className='text-xs md:text-sm'>Howard University</div>
                                    </div>
                                </div>
                                <p className='text-xs md:text-base'>“Balancing school and work was tough until I found Mun-e. It&apos;s more than just an app—it&lsquo;s my financial assistant. I easily send money, save, and even started investing. Mun-e has transformed how I manage my finances and taught me so much about money management. I love it!”</p>
                            </div>
                            <div className="w-[230px] md:w-[449px] border-4 rounded-3xl md:rounded-[36px] space-y-6 p-4 md:p-8 border-[#CEE0D0]">
                                <div className='flex items-center gap-4'>
                                    <img src={UserTwo} className='w-[33px] md:w-auto' alt="User One" />
                                    <div>
                                        <div className='text-black font-bold text-xs md:text-sm'>John Lewis</div>
                                        <div className='text-xs md:text-sm'>Spelman College</div>
                                    </div>
                                </div>
                                <p className='text-xs md:text-base'>“Mun-e has completely changed how I handle my finances. From quick transfers with classmates to tracking my spending habits, everything is simpler now. Plus, the investment features introduced me to new ways to grow my savings safely. Every student should have this app!”</p>
                            </div>
                            <div className="w-[230px] md:w-[449px] border-4 rounded-3xl md:rounded-[36px] space-y-6 p-4 md:p-8 border-[#CEE0D0]">
                                <div className='flex items-center gap-4'>
                                    <img src={UserThree} className='w-[33px] md:w-auto' alt="User One" />
                                    <div>
                                        <div className='text-black font-bold text-xs md:text-sm'>Seth Howard</div>
                                        <div className='text-xs md:text-sm'>Austin, TX</div>
                                    </div>
                                </div>
                                <p className='text-xs md:text-base'>&ldquo;Mun-e has been a game-changer for my college life. It&apos;s so easy to split bills for group projects or outings. The best part? I&apos;m learning about managing finances in a way that&apos;s actually fun and engaging. It&apos;s perfect for any student who wants to get a grip on their financial future.&ldquo;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersSection;
