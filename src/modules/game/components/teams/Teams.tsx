import { SyntheticEvent, useState } from 'react';
import CreateTeamForm from '../forms/CreateTeamForm';
import { useRouter } from 'next/router';
import TeamsList from './TeamsList';

const Teams = () => {
  const [isShowForm, setIsShowForm] = useState(false);
  const router = useRouter();
  const handleNext = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push('/game/categorySelection');
  };
  const handleShowForm = () => {
    setIsShowForm((prev) => !prev);
  };

  return (
    <>
      <div className="px-[50px]">
        <h3 className="text-2xl"> Выбор команд</h3>
        <TeamsList showForm={handleShowForm} />
        <button
          className="my-5 rounded-xl bg-blue-600 px-3 py-2"
          onClick={handleNext}
        >
          {' '}
          Дальше
        </button>
      </div>
      {isShowForm && (
        <CreateTeamForm isActive={isShowForm} onClose={setIsShowForm} />
      )}
    </>
  );
};

export default Teams;
