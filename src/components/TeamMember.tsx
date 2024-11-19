import React from 'react';
import { TeamMemberProps } from '../interfaces/teamMembers';

const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  isActive,
  onClick,
}) => {
  const { name, image, role } = member;
  const [firstName, lastName] = name.split(' ');

  return (
    <button
      type="button"
      aria-label="team member card"
      className={`${member.role === 'CEO' && 'ml-6 laptop:ml-12'} relative flex rounded-2xl w-content h-full gap-3 tablet:gap-4 flex-col justify-between items-center p-3 transition-all duration-300 ease-in-out ${isActive ? 'bg-[#CEE0D0]' : ''}`}
      onClick={onClick}
    >
      <img
        src={image}
        alt={`headshot photo of ${name}, ${role} at Mun-e`}
        className="h-16 min-w-16 tablet:min-w-24 tablet:h-24 rounded-full border-2 border-custom-bgreen"
      />
      <p className="text-center text-black tablet:font-bold font font-semibold text-base tablet:text-[1.375rem] leading-5 tablet:leading-7">
        {firstName}
        <br />
        {lastName}
      </p>
    </button>
  );
};

export default TeamMember;
