import React from 'react';

const FAQRow: React.FC<{
  item: { question: string; answer: string };
  isExpanded: boolean;
  onToggle: () => void;
}> = ({ item, isExpanded, onToggle }) => (
  <div
    className={`max-w-[240px] flex flex-col py-2 ${isExpanded ? 'gap-6' : 'gap-1'}`}
  >
    <div
      className="flex items-center justify-between gap-2 border-green-400 cursor-pointer"
      onClick={onToggle}
    >
      <span className="text-[17px] font-semibold leading-[22px] tracking-[-0.43px] text-left">
        {item.question}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 min-w-6 transition-transform duration-[750ms] ${isExpanded ? '' : '-rotate-90'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>
    <div
      className={`text-sm overflow-hidden transition-all duration-[750ms] ease-in-out ${
        isExpanded
          ? 'max-h-40 opacity-100'
          : 'max-h-0 opacity-0'
      }`}
    >
      <p className="text-[13px] font-normal leading-[18px]">
        {item.answer}
      </p>
    </div>
  </div>
);

export default FAQRow;
