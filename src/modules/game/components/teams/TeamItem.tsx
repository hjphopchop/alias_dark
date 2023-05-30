import { CloseIcon } from '@/assets/icons/icons';
import { useTeamsContext } from '@/providers/TeamsProvider';
import Image from 'next/image';
import React from 'react';

const TeamItem = ({ item }: any) => {
  const { deleteTeam }: any = useTeamsContext();
  return (
    <li className=" justify-stretch flex flex-col items-center ">
      <div className="relative flex h-[250px] w-[200px] items-end justify-center  overflow-hidden rounded-b-2xl bg-green-400">
        <Image
          src={'data:image/png;base64,' + item?.image?.file}
          width={190}
          height={190}
          className="absolute bottom-[-5px]"
          alt="avatar"
        />
        <button
          className="absolute top-0 right-0 "
          onClick={() => deleteTeam(item.id)}
        >
          {' '}
          <CloseIcon />
        </button>
      </div>
      <p className=" break-word mt-3 max-w-[180px] overflow-hidden text-center">
        {item.title}
      </p>
    </li>
  );
};

export default TeamItem;
