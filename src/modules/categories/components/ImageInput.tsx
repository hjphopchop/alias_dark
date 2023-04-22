import Image from 'next/image';
import React, { forwardRef, useEffect, useRef, useState } from 'react';

const ImageInput = (
  { name, label, getValues, onChange, ...rest }: any,
  ref: any
) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        type="file"
        name={name}
        placeholder="картинка"
        {...rest}
        ref={ref}
        onChange={onChange}
      />
    </>
  );
};

export default forwardRef(ImageInput);
