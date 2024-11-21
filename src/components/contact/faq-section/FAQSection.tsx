import React from 'react';
import FAQItem from './FAQItem';
import faqData from '../../../constants/faq';

const FAQSection: React.FC = () => (
  <div className="flex flex-col w-full">
    <h1 className="font-bold text-[22px] tablet:text-5xl text-black leading-[55px] p-14 tablet:ml-4 tablet:p-6 w-full tablet:text-left text-center">
      FAQ
    </h1>
    <div className="max-w-6xl mx-auto flex flex-row gap-2 tablet:gap-4 w-full overflow-x-auto scrollbar-hide">
      {faqData.map((item, index) => (
        <FAQItem
          key={index}
          isFirstItem={index === 0}
          item={item}
        />
      ))}
    </div>
  </div>
);

export default FAQSection;
