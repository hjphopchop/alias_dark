import { CloseIcon } from '@/assets/icons/icons';
import { useTeamsContext } from '@/providers/TeamsProvider';
import Image from 'next/image';
import React from 'react';
import TeamItem from './TeamItem';

const TeamsList = ({ showForm }: any) => {
  const { teams, deleteTeam }: any = useTeamsContext();

  return (
    <ul className="flex flex-wrap justify-start gap-10 pt-10">
      {teams.map((item: any, index: any) => (
        <TeamItem key={index} item={item} />
      ))}
      <li className="flex h-[250px] w-[200px] items-center gap-2 rounded-b-xl bg-green-600">
        <button
          className="h-[250px] w-[200px] rotate-6 rounded-b-xl bg-green-400"
          onClick={showForm}
        >
          +
        </button>
      </li>
    </ul>
  );
};

export default TeamsList;
