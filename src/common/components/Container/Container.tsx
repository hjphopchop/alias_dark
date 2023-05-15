import React from 'react';
import classnames from 'classnames';

type ContainerProps = {
  center?: boolean;
  shading?: boolean;
  fullScreen?: boolean;
  placeholder?: boolean;
  isActive?: boolean;
  children: JSX.Element;
};

const Container = ({
  center,
  shading,
  fullScreen,
  placeholder,
  isActive,
  children,
}: ContainerProps) => {
  const containerClasses = classnames('flex overflow-auto p-20', {
    'flex-1 justify-center items-center': center,
    'bg-[rgba(12,12,12,0.71)]': shading,
    'fixed top-0 right-0 w-full h-full z-[100]': fullScreen,
  });

  if (!isActive) return null;

  return (
    <>
      <div className={containerClasses}>{children}</div>
      {placeholder && fullScreen && <div className={'flex-1'} />}
    </>
  );
};

export default Container;
