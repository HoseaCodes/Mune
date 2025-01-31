import React, { useState } from 'react';
import TeamMember from './TeamMember';
import BioOverlay from './BiosOverlay';
import { teamMembers } from '../constants/bios';

const MeetTheTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState<number | null>(null);

  const handleMemberClick = (index: number) => {
    setActiveIndex(index);
    setIsExpanded(null); // Reset expanded state on member change
  };

  const handleToggleExpand = (index: number) => {
    setIsExpanded(index === isExpanded ? null : index); // Toggle the expanded state
  };

  const handleClose = () => {
    setIsExpanded(null);
  };

  const truncateAfterFirstSentence = (paragraph: string) => {
    const sentences = paragraph.split(/(?<=[.!?])\s+|<br\s*\/?>/i);
    return sentences[0];
  }

  return (
    <div className={`${isExpanded === activeIndex && "overflow-hidden"} bg-gray-100 py-12 sm:px-8 md:px-12 lg:px-2 mx-auto max-w-[1184px]`}>
      <div className="flex justify-center overflow-x-scroll scroll-smooth space-x-2 scrollbar-hide md:overflow-x-visible md:flex-wrap">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 mt-8">
          Meet the Team
        </h2>
        <div className="flex flex-nowrap space-x-5 pl-48 md:pl-0 md:space-x-32 my-10">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              isActive={activeIndex === teamMembers.indexOf(member)}
              onClick={() => handleMemberClick(teamMembers.indexOf(member))}
              onToggleExpand={() => handleToggleExpand(teamMembers.indexOf(member))}
            />
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <div className="mt-6 md:px-12 pe-4 rounded-lg flex items-start space-x-6 z-10 transition-all duration-300 ease-in-out w-ful h-auto">
          <img
            src={teamMembers[activeIndex].image}
            alt={teamMembers[activeIndex].name}
            className="w-40 h-40 rounded-full shadow-md hidden md:block"
          />
          <div className="flex flex-col w-full">
            <h3 className="text-black text-xl font-bold">
              {teamMembers[activeIndex].name}
            </h3>
            <p className="text-gray-600 italic">{teamMembers[activeIndex].school}</p>
            <p className="text-gray-800 mt-2">{teamMembers[activeIndex].role}</p>
            <div className="flex flex-start w-full text-gray-800 mt-2">
              <p>{truncateAfterFirstSentence(teamMembers[activeIndex].bio)}{".."}</p>
            </div>
            <button
              onClick={() => handleToggleExpand(activeIndex)}
              aria-label={'Show more'}
              className="flex flex-start w-full text-blue-500 mt-2"
            >
              {'Show More'}
            </button>
          </div>
        </div>
      )}
      {activeIndex !== null && isExpanded !== null && activeIndex === isExpanded && (
        <BioOverlay
          name={teamMembers[activeIndex].name}
          school={teamMembers[activeIndex].school}
          role={teamMembers[activeIndex].role}
          image={teamMembers[activeIndex].image}
          bio={teamMembers[activeIndex].bio}
          onClose={handleClose}
        />
      )}
    </div>
  );
};

export default MeetTheTeam;
