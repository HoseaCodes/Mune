import React from 'react';

interface GlowButtonProps {
  children: string,
  color: string
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, color }) => {
    const green = "button-three text-[#f2f7f4] hover:shadow-green-500/50 shadow-green-500/80 "
    const white = "border-2 bg-stone-100 border-neutral-300 text-black font-semibold shadow-md shadow-neutral-300 hover:shadow-neutral-300/80"
  return (
    <button className={`${color === "green" ? green : white}  w-[131px] h-[44px] text-[15px] justify-center font-semibold rounded-xl bg-primary hover:bg-primary hover:shadow-md flex items-center whitespace-nowrap shadow-md`}>
      {children}
    </button>
  );
};

export default GlowButton;
