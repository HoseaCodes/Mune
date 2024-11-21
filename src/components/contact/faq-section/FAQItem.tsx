import React, { useState } from 'react';
import FAQRow from './FAQRow';

const FAQItem: React.FC<{
  isFirstItem: boolean;
  item: { question: string; answer: string }[];
}> = ({ isFirstItem, item }) => {
  const [expandedIndex, setExpandedIndex] = useState<
    number | null
  >(null);

  const toggleRow = (index: number) => {
    setExpandedIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  return (
    <div
      className={`${isFirstItem && 'ml-6 laptop:m-0'} bg-[#19A530] p-4 laptop:p-16 pb-24 rounded-3xl text-white shrink-0 divide-y`}
    >
      {item.map((item, index) => (
        <FAQRow
          key={index}
          item={item}
          isExpanded={expandedIndex === index}
          onToggle={() => toggleRow(index)}
        />
      ))}
    </div>
  );
};

export default FAQItem;
