import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { nanoid } from 'nanoid';
import CustomSelect from '../Teams/CustomSelect';
import { useTeamsContext } from '@/providers/TeamsProvider';
import { Container } from '@/common/components/Container';

const CreateTeamForm = ({ onClose, isActive }: any) => {
  const { register, handleSubmit, control } = useForm();
  const { addTeam }: any = useTeamsContext();
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    axios.get('/api/images/downloadAvatars').then(async ({ data }) => {
      setAvatars(data);
    });
  }, []);

  const handleClose = () => {
    onClose(false);
  };
  const onSubmit = (data: any) => {
    const teamData = { ...data, id: nanoid(), points: 0 };
    addTeam(teamData);
    onClose(false);
  };

  return (
    <Container isActive={isActive} center fullScreen shading>
      <div className="w-[500px] rounded-xl bg-white px-[20px] py-[35px] text-black">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl ">Создание команды</h2>
          <span onClick={handleClose} className="hover:rotate-2">
            Закрыть
          </span>
        </div>

        <form
          className="flex flex-col  items-stretch justify-center gap-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center  gap-5 ">
            <span className="w-[100px]">Название</span>
            <input
              className="rounded-[5px] border   px-2 py-1 ring-1 ring-inset ring-gray-300  focus:ring-1 focus:ring-[#3c77e6]"
              placeholder="Введите название"
              {...register('title', { required: true })}
            />
          </div>

          <div className="flex items-center gap-5 ">
            <span className="w-[100px]">Изображение</span>
            <CustomSelect
              avatars={avatars}
              control={control}
              {...register('image', { required: true })}
            />
          </div>

          <input
            type="submit"
            value={'Создать'}
            className="w-[120px] self-end rounded-[10px] bg-[#3c77e6] py-1 px-1 text-white "
          />
        </form>
      </div>
    </Container>
  );
};

export default CreateTeamForm;
