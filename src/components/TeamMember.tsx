import React from 'react';
import { TeamMemberProps } from '../interfaces/teamMembers';

const TeamMember: React.FC<TeamMemberProps> = ({
  member,
  isActive,
  onClick,
}) => {
  const { name, image } = member;
  const [firstName, lastName] = name.split(' ');

  return (
    <div
      className={`relative flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${isActive ? 'bg-[#CEE0D0]' : 'bg-[#F2F7F3]'} ${isActive ? 'mb-10' : ''}`}
      onClick={onClick}
      style={{
        width: '115px',
        height: '186.5px',
        padding: '12px 0 0 0',
        gap: '16.5px',
        borderRadius: '15px',
        border: '2px solid transparent',
        borderTopColor: isActive ? '#CEE0D0' : 'transparent',
      }}
    >
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mb-2"
      />
      <p className="text-center text-black font-bold">
        {firstName}
        <br />
        {lastName}
      </p>
    </div>
  );
};

export default TeamMember;
