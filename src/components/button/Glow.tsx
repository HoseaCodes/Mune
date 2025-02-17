import React from 'react';

interface GlowButtonProps {
  children: string,
  color: string,
  onClick?: () => void
}

const GlowButton: React.FC<GlowButtonProps> = ({ children, color, onClick }) => {
    const green = "button-three text-[#f2f7f4] hover:shadow-[#00B26C] shadow-[#00B26C] "
    const white = "border-2 bg-stone-100 border-neutral-300 text-black font-semibold shadow-md shadow-neutral-300 hover:shadow-neutral-300/80"
  return (
    <button onClick={onClick} className={`${color === "green" ? green : white}  w-[131px] h-[44px] text-[15px] justify-center font-semibold rounded-xl bg-primary hover:bg-primary hover:shadow-md flex items-center whitespace-nowrap shadow-md`}>
      {children}
    </button>
  );
};

export default GlowButton;
