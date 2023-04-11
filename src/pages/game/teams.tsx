import { TEAMS } from '@/common/routes';
import { getLayout } from '@/layout/components/DefaultLayout/DefaultLayout';
import Image from 'next/image';
import mouse from 'src/assets/img/mouse.svg';
import React, { useEffect, useState } from 'react';
import { useTeamsContext } from '@/providers/TeamsProvider';
import CreateTeamForm from '@/modules/game/components/forms/CreateTeamForm';
import { useRouter } from 'next/router';

const test = ['бобры', 'мыши', 'желуди'];
const TeamsPage = () => {
  const { teams, addTeam }: any = useTeamsContext();
  console.log(teams);
  const [isAddTeam, setIsAddTeam] = useState<boolean>(false);
  const [isShowForm, setIsShowForm] = useState(false);

  useEffect(() => {
    if (isAddTeam === true) {
      setIsAddTeam(false);
    }
  }, [isAddTeam]);

  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    router.push('/game/categorySelection');
  };

  return (
    <>
      <div className="px-[50px]">
        <h3 className="text-2xl"> Выбор команд</h3>
        <ul className="flex items-center gap-6">
          {teams.map((item: any, index: any) => (
            <li key={index} className="">
              <div className="flex h-[200px] w-[200px] items-center justify-center rounded-full bg-[#ffffff]">
                <Image
                  src={mouse}
                  width={150}
                  height={150}
                  className="object-cover object-center"
                  alt="mouse"
                />
              </div>
              <span className=" ">{item.title}</span>
            </li>
          ))}
          <li className="flex min-h-[100px] min-w-[100px] items-center justify-center rounded-full bg-pink-500">
            <button onClick={() => setIsShowForm(true)}>+</button>
          </li>
        </ul>
        <button
          className="my-5 rounded-xl bg-blue-600 px-3 py-2"
          onClick={handleClick}
        >
          {' '}
          Дальше
        </button>
      </div>
      {isShowForm && (
        <CreateTeamForm addTeam={addTeam} onClose={setIsShowForm} />
      )}
    </>
  );
};

TeamsPage.auth = TEAMS.auth;

TeamsPage.getLayout = getLayout;
export default TeamsPage;
