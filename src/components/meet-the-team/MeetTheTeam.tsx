import React, { useState } from 'react';
import TeamMember from '../TeamMember';
import { teamMembers } from '../../constants/bios';
import { ExpandedTeamCard } from './ExpandedTeamCard';

const MeetTheTeam: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<
    number | null
  >(null);
  const [fadeAnime, setFadeAnime] = useState(false);
  const [isExpanded, setIsExpanded] = useState<
    number | null
  >(null);

  const handleMemberClick = (index: number) => {
    setFadeAnime(true);
    setTimeout(() => {
      setActiveIndex(index);
      setIsExpanded(null); // Reset expanded state on member change
      setFadeAnime(false);
    }, 100);
  };

  return (
    <div
      className={`${isExpanded === activeIndex && 'overflow-hidden'} max-w-[1184px] w-full flex flex-col gap-6 tablet:gap-20 laptop:my-32 tablet:my-24 my-[120px]`}
    >
      <div className="flex flex-col justify-center gap-10">
        <h2 className="tablet:mx-6 laptop:mx-12 text-2xl tablet:text-3xl laptop:text-5xl text-center tablet:text-left font-bold">
          Meet the Team
        </h2>
        <div className="flex flex-nowrap gap-6 tablet:gap-12 laptop:gap-[85px] w-full justify-around m-0 overflow-x-auto max-w-[1184px] scrollbar-hide">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              member={member}
              isActive={
                activeIndex === teamMembers.indexOf(member)
              }
              onClick={() =>
                handleMemberClick(
                  teamMembers.indexOf(member)
                )
              }
            />
          ))}
        </div>
      </div>
      {activeIndex !== null && (
        <ExpandedTeamCard
          teamMembers={teamMembers}
          index={activeIndex}
          fadeAnime={fadeAnime}
        />
      )}
    </div>
  );
};

export default MeetTheTeam;
