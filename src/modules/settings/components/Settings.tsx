import { useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import UpdateSettings from '../graphql/mutation/UpdateSettings';
import GetSettings from '../graphql/query/GetSettings';

interface IFormInput {
  roundTime: number;
  pointToWin: number;
  takeAwayPoints: boolean;
}
const Settings = () => {
  const { register, handleSubmit, control, formState, getFieldState } =
    useForm<IFormInput>();
  const { data: session } = useSession();
  const { data, loading } = useQuery(GetSettings, {
    variables: {
      userId: session?.user?.id,
    },
    fetchPolicy: 'network-only',
  });
  const [updateSettings] = useMutation(UpdateSettings, {
    fetchPolicy: 'network-only',
  });
  const settingsData = data?.settings[0];
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    updateSettings({
      variables: {
        id: session?.user?.id,
        settingsData: {
          roundTime: +data.roundTime,
          pointToWin: +data.pointToWin,
          takeAwayPoints: !!data.takeAwayPoints,
        },
      },
    });
  };
  return (
    <>
      {!loading && (
        <div className="flex h-full flex-col">
          <h2 className="text-xl">Настройки</h2>
          <form
            className="flex max-w-[600px] flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="roundTime"
              control={control}
              defaultValue={settingsData?.roundTime || 20}
              render={({ field }) => (
                <>
                  <label>Время раунда: {field.value} секунд</label>
                  <input
                    {...field}
                    type={'range'}
                    max={300}
                    step={10}
                    min={10}
                  />
                </>
              )}
            />

            <Controller
              name="pointToWin"
              control={control}
              defaultValue={settingsData?.pointToWin || 25}
              render={({ field }) => (
                <>
                  <label>Очков для победы: {field.value}</label>
                  <input {...field} type={'range'} max={100} step={5} min={5} />
                </>
              )}
            />
            <div className="flex justify-start gap-5">
              <label>Отнимать очки за пропуски:</label>
              <input
                type={'checkbox'}
                defaultChecked={settingsData?.takeAwayPoints || false}
                {...register('takeAwayPoints')}
              />
            </div>

            <input
              type="submit"
              value={'Сохранить'}
              className="m-auto w-[150px] rounded-xl bg-[#3c77e6] py-1"
            />
          </form>
        </div>
      )}
    </>
  );
};

export default Settings;
