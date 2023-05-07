import React, { Fragment, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { nanoid } from 'nanoid';
import CustomSelect from '../teams/CustomSelect';
import { useTeamsContext } from '@/providers/TeamsProvider';

const CreateTeamForm = ({ onClose }: any) => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const { addTeam }: any = useTeamsContext();
  const [avatars, setAvatars] = useState([]);
  useEffect(() => {
    axios.get('/api/images/downloadAvatars').then(async ({ data }) => {
      setAvatars(data);
    });
  }, []);

  const onSubmit = (data: any) => {
    const teamData = { ...data, id: nanoid(), points: 0 };
    addTeam(teamData);
    onClose(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="text-black"
        {...register('title', { required: true })}
      />

      <CustomSelect
        avatars={avatars}
        control={control}
        {...register('image', { required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default CreateTeamForm;
