import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const UploadImage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data: any) => {
    console.log(data.image[0]);
    const body = new FormData();
    body.append('theFiles', data.image[0]);
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
      onUploadProgress: (event: any) => {
        console.log(
          `Current progress:`,
          Math.round((event.loaded * 100) / event.total)
        );
      },
    };
    await axios
      .post('/api/images/upload', body, config)
      .then(() => {
        console.log('Успех');
      })
      .catch((e) => {
        console.log('error', e);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center justify-center bg-pink-800 text-lg text-black"
    >
      {/* register your input into the hook by invoking the "register" function */}

      {/* include validation with required or other standard HTML validation rules */}
      <input type="file" {...register('image', { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};

export default UploadImage;
