import React from 'react';
import { MemberProps } from '../../interfaces/teamMembers';
import truncateAfterFirstSentence from '../../utils/truncateAfterFirstSentence';

export const ExpandedTeamCard: React.FC<{
  teamMembers: MemberProps[];
  index: number;
  fadeAnime: boolean;
}> = ({ teamMembers, index, fadeAnime }) => (
  <div
    className={`tablet:mx-6 laptop:mx-12 mx-7 flex tablet:flex-row flex-col items-center gap-6 tablet:gap-16 transition-opacity duration-300 ${fadeAnime ? 'opacity-0' : 'opacity-100'}`}
  >
    <img
      src={teamMembers[index].image}
      alt={`headshot photo of ${teamMembers[index].name}, ${teamMembers[index].role} at Mun-e`}
      className="w-52 h-52 rounded-full shadow-md border-2 border-custom-bgreen"
    />
    <div className="flex flex-col w-full gap-2">
      <div className="flex flex-col w-full tablet:gap-2">
        <h3 className="text-black text-base tablet:text-[1.5rem] laptop:text-[1.75rem] font-bold">
          {teamMembers[index].name},{' '}
          {teamMembers[index].role}
        </h3>
        <p className="text-gray-800 text-base laptop:text-[1.375rem] italic">
          {teamMembers[index].school}
        </p>
      </div>
      <div className="flex flex-start w-full text-gray-800 max-w-[63ch]">
        <p className="text-sm tablet:text-base">
          {truncateAfterFirstSentence(
            teamMembers[index].bio
          )}
        </p>
      </div>
    </div>
  </div>
);
